window.defaultColumns = {
	"dpscolumn": {
		"encdps": 50,
		"damage": 50,
		"hits": 40,
		"crithit%": 50,
		"maxhit": 150,
		"swings": 40,
		"misses": 40,
		"deaths": 40
	},
	"hpscolumn": {
		"enchps": 50, 
		"healed": 50, 
		"effectiveHeal": 50, 
		"damageShield": 50, 
		"overHeal%": 50
	}
};

var headerinit = false;
if(option.fonts == undefined)
{
	option.fonts = "Noto Sans KR";
	localStorage.setItem("fancyset", JSON.stringify(option));
	setCSS();
}
if(!onACTWebSocket && navigator.userAgent.indexOf("Aliapoh") == -1)
{
	$(".capturebtn").remove();
	$(".refreshbtn").css("margin-right", "52px");
}

$("[lang]").each(function()
{
	$(this).html($(this).attr(userLang.substring(0, 2)).replace(/\\n/im, "<br>"));
});

$("[data-excludelang]").each(function()
{
	if(userLang.substring(0, 2) == $(this).attr("data-excludelang"))
	{
		$(this).attr("onclick", $(this).attr("data-excludelink"));
		$(this).hide();
	}
});

function setCSS()
{
	$("#customcss").html("");
	var css = "";
	try
	{
		var items = ["glapld", "mrdwar", "drk", "cnjwhm", "sch", "ast", "pglmnk", "lncdrg", "rognin", "sam", "arcbrd", "mch", "thmblm", "acnsmn", "rdm", "lmb"];
		for(var x in items)
		{
			var i = items[x];
			var job = items[x].substring(items[x].length - 3, items[x].length).toUpperCase();
			css += ".body>div>." + job + ">.barcover>.bar, .body>div>." + job + ">.barcover>.pbar {background:" + option[i] + ";}"
			css += ".body>div>." + job + ">.barcover>.bar *, .body>div>." + job + ">.barcover>.pbar * {border-color:" + option[i] + ";}"
		}
		for(var x in items)
		{
			var i = items[x];
			var job = items[x].substring(items[x].length - 3, items[x].length).toUpperCase();
			css += ".body>div>." + job + ">.data {color:" + option[i + "f"] + ";}"
		}
		if(option.bgcolor != undefined)
			css += ".body {background:" + option.bgcolor + ";}";
		if(option.backgroundimg != undefined)
			css += ".body::after { content:' '; position:fixed; left:0px; right:0px; bottom:0px; top:28px; border-radius:0px 0px 3px 3px; overflow:hidden; z-index:-1;" + option.backgroundimg + ";}";
		if(option.c_dps != undefined)
			css += ".DPS>.job {background-color:" + option.c_dps + " !important;}";
		if(option.c_tanker != undefined)
			css += ".Tanker>.job {background-color:" + option.c_tanker + " !important;}";
		if(option.c_healer != undefined)
			css += ".Healer>.job {background-color:" + option.c_healer + " !important;}";
		if(option.iconglow != undefined)
			css += "*>.job::after {filter:drop-shadow(0px 0px 1px " + option.iconglow + ") drop-shadow(0px 0px 1px " + option.iconglow + "); -webkit-filter:drop-shadow(0px 0px 1px " + option.iconglow + ") drop-shadow(0px 0px 1px " + option.iconglow + ");}";
		if(option.overhealcolor != undefined)
			css += ".body>div>*>.barcover>.overhealbar {background:" + option.overhealcolor + ";}";
		if(option.overhealcolor != undefined)
			css += ".body>div>*>.barcover>.overhealbar * {border-color:" + option.overhealcolor + ";}";
		if(option.fonts != undefined)
			css += "* {font-family:'" + option.fonts + "';}";
		if(option.fontsize != undefined)
			css += ".body>div>*>.data, .body>div>*>.data>.columns {font-size:" + option.fontsize +"px !important;}";
		if(option.topbgcolor != undefined)
		{
			css += ".header {background-color:" + option.topbgcolor + ";}";
			css += "body>.body>.dpsheader>.hilight, body>.body>.hpsheader>.hilight {background-color:" + option.topbgcolor.replace(/(rgba\(.+,.+,.+),.+\)/, "$1, 1)") + " !important;}";
		}

		$("#customcss").html(css);
	}
	catch(ex)
	{
		console.error(ex);
	}
}

function saveSetting()
{
	localStorage.setItem("fancyset", JSON.stringify(option));
}

function loadSetting()
{
	var set = JSON.parse(localStorage.getItem("fancyset"));
	if(set != null)
		option = set;

	for(var i in option)
	{
		if($("#" + i).length !== 0)
		{
			if(typeof(option[i]) === "boolean")
				$("#" + i).attr("data-checked", option[i]);
		}
	}
}

var sortkey_dps = "encdps";
var sortkey_hps = "enchps";
var stopEnc = false;
var mode = "list";
var w;
// modes : viewlist, viewself, viewlargeraid, viewpartysimple

loadSetting();
setCSS();
createHeader();

$(".body>*").hide();
$(".menubtn").click(function()
{
	opensetting();
});

function opensetting()
{
	if(w != undefined)
	{
		if(!w.closed)
			return;
	}
	if(!onACTWebSocket)
		w = window.open("./setting.html", "settingwindow", "menubar=0,resizable=0,width=980,height=640");
	else 
		w = window.open("./setting.html", "settingwindow" + (Math.random() * 1000).toFixed(), "menubar=0,resizable=0,width=980,height=640");
}

function classExists(p, c)
{
	return !$(p).find(c).length > 0;
}

function onOverlayDataUpdate(e)
{
	$(".notifyarea").hide();
	if(stopEnc) return;
	createHeader();
	listResort(e);
	window.lastData = e;
}

function createHeader()
{
	var replaceColName = curLang.columns;
	var columnData = {
		"dps":{
			"element":".dpsheader",
			"data": option.displayddps != undefined ? option.displayeddps : window.defaultColumns.dpscolumn,
			"sortkey": sortkey_dps
		},
		"hps":{
			"element":".hpsheader",
			"data": option.displayddps != undefined ? option.displayedhps : window.defaultColumns.hpscolumn,
			"sortkey": sortkey_hps
		}
	};

	for(var cdata in columnData)
	{
		var x = columnData[cdata];
		$(x.element).html("");
		for(var i in x.data)
		{
			var coltext = i;
			if(replaceColName != undefined)
				if(replaceColName[i] != undefined)
					coltext = replaceColName[i];

			$(x.element).append("<span data-column='" + i + "'>" + coltext + "</span>");
			$(x.element + ">[data-column=\"" + i + "\"]").width(x.data[i]);
		}
		$(x.element + ">span").removeClass("hilight");
		$(x.element + ">[data-column=\"" + x.sortkey + "\"]").addClass("hilight");
		$(x.element + ">span").click(function()
		{
			if($(this).parent().is(".dpsheader"))
				sortkey_dps = $(this).attr("data-column");
			else
				sortkey_hps = $(this).attr("data-column");
			createHeader();
			listResort();
		});
	}
}

function listResort(data)
{
	$(".body>*").show();
	if(data == undefined)
		data = window.lastData;
		
	$(".encounter>.duration").text(data.Encounter.duration);
	$(".encounter>.title").text(data.Encounter.title);
	$(".footer>.RDPS").text(Math.floor(data.Encounter.encdps));
	$(".footer>.RHPS").text(Math.floor(data.Encounter.enchps));

	$('.ncount').each(function()
	{
		if($(this).is(".RDPS"))
			if($(this).attr("data-prev") == data.Encounter.encdps) return;
		else if($(this).is(".RHPS"))
			if($(this).attr("data-prev") == data.Encounter.enchps) return;
			
		if(option.numbanim == !0)
		{
			$(this).prop('Counter',$(this).attr("data-prev"))
			.animate({
			Counter: $(this).text()
			},
			{
				duration:500,
				easing:'swing',
				step:function(now)
				{
					$(this).text(Math.ceil(now));
				}
			});

			if($(this).is(".RDPS"))
				$(this).attr("data-prev", data.Encounter.encdps);
			else if($(this).is(".RHPS"))
				$(this).attr("data-prev", data.Encounter.enchps);
		}
	});
	/*
	var start = new Date();
	var dpshps = {
		"dpsarea":[lastCombat, columnarray],
		"hpsarea":[lastCombatHPS, columnarrayhps]
	};

	if(option.displayeddps != undefined && option.displayedhps != undefined) 
	{
		dpshps = {
			"dpsarea":[lastCombat, option.displayeddps],
			"hpsarea":[lastCombatHPS, option.displayedhps]
		};
	}
	else
	{
		dpshps = {
			"dpsarea":[lastCombat, columnarray],
			"hpsarea":[lastCombatHPS, columnarrayhps]
		};
	}

	if(!option.displayhps)
	{
		$(".hpsarea").hide();
		$(".hpsheader").hide();
		$(".hpsarea").html("");
	}
	else
	{
		$(".hpsarea").show();
		$(".hpsheader").show();
	}

	// DIV 객체를 만들면서 설정
	if(lastCombat != null && lastCombatHPS != null)
	{
		var t = lastCombat.Encounter.duration;
		$(".encounter>.duration").text(t);
		$(".encounter>.title").text(lastCombat.Encounter.title);
		$(".encounter>.RDPS").text(Math.floor(lastCombat.Encounter.encdps));
		$(".encounter>.RHPS").text(Math.floor(lastCombat.Encounter.enchps));


		$(".encounter>.RDPS").attr("data-prev", Math.floor(lastCombat.Encounter.encdps));
		$(".encounter>.RHPS").attr("data-prev", Math.floor(lastCombat.Encounter.enchps));

		if($(".body").is(".raid"))
		{
			$(".dpsarea").html("");
			$(".dpsheader").hide();
		}
		else
		{
			$(".dpsheader").show();
		}

		for(var x in dpshps)
		{
			var e = dpshps[x];

			if(!option.displayhps && x == "hpsarea")
				continue;

			if(option.rankanim == !1)
				$(".body").addClass("noanim");
			else
				$(".body").removeClass("noanim");

			var xi = 0;
			for(var i in e[0].Combatant)
				if(!e[0].Combatant[i].isPet) xi++;

			if(xi > 16)
			{
				$(".body").addClass("raid");
			}
			else
			{
				$(".body").removeClass("raid");
			}

			for(var i in e[0].Combatant)
			{
				var c = e[0].Combatant[i];
				var name = c.name.replace(/(\s|'|\.|\"|\(|\))/ig,"_");
				var person = ".body>." + x + ">." + name;
				if(name.trim() == "") continue;

				if($(".body>." + x).find("." + name).length == 0)
					$(".body>." + x).append("<div class=\"" + name + "\"></div>");

				$(person).removeClass().addClass(name);
				$(person).addClass(c.Class);
				$(person).addClass(c.role);
				$(person).addClass(c.Job);

				var ishealer = false;
				
				if(x == "hpsarea" && option.hpsallview == !0)
				{
					if(c.role != "Healer")
						$(person).remove();
					else
						ishealer = true;
				}
				else
				{
					ishealer = true;
				}

				if(ishealer)
				{
					if(classExists(person, ".job"))
						$(person).append("<div class='job'></div>");
						
					if(classExists(person, ".shadowbar"))
					{
						$(person).append("<div class='shadowbar'></div>");
						$(person + ">.shadowbar").append("<div class='leftdeco'></div>");
						$(person + ">.shadowbar>.leftdeco").append("<div class='leftdeco_inner'></div>");
						$(person + ">.shadowbar").append("<div class='rightdeco'></div>");
					}
					
					if(classExists(person, ".barcover"))
					{
						$(person).append("<div class='barcover'></div>");
						$(person + ">.barcover").append("<div class='bar'></div>");
						$(person + ">.barcover>.bar").append("<div class='leftdeco'></div>");
						$(person + ">.barcover>.bar>.leftdeco").append("<div class='leftdeco_inner'></div>");
						$(person + ">.barcover>.bar").append("<div class='rightdeco'></div>");
					}

					if(option.opacity != undefined)
					{
						$(person + ">.barcover").css("opacity", option.opacity / 100);
					}

					if(c.pets != null && e[0].summonerMerge)
					{
						if(classExists(person + ">.barcover", ".pbar"))
						{
							$(person + ">.barcover").append("<div class='pbar'></div>");
							$(person + ">.barcover>.pbar").append("<div class='leftdeco'></div>");
							$(person + ">.barcover>.pbar>.leftdeco").append("<div class='leftdeco_inner'></div>");
							$(person + ">.barcover>.pbar").append("<div class='rightdeco'></div>");
						}

						$(person + ">.barcover>.pbar").css("width", (c[e[0].sortkey] / c.maxdamage * 100)+"%");

						var petval = 0;
						for(var i in c.pets)
						{
							petval += c.pets[i][e[0].sortkey];
						}

						$(person + ">.barcover>.bar").css("width", ((c[e[0].sortkey] - petval) / c.maxdamage * 100)+"%");
						$(person + ">.barcover>.pbar").show();
					}
					else
					{
						$(person + ">.barcover>.pbar").hide();
						$(person + ">.barcover>.bar").css("width", (c[e[0].sortkey] / c.maxdamage * 100)+"%");
					}

					if(c.maxdamage == 0)
					{
						$(person + ">.barcover>.bar").css("width", "100%");
					}

					if(x == "hpsarea")
					{
						if(classExists(person + ">.barcover", ".overhealbar"))
						{
							$(person + ">.barcover").append("<div class='overhealbar'></div>");
							$(person + ">.barcover>.overhealbar").append("<div class='leftdeco'></div>");
							$(person + ">.barcover>.overhealbar>.leftdeco").append("<div class='leftdeco_inner'></div>");
							$(person + ">.barcover>.overhealbar").append("<div class='rightdeco'></div>");
						}

						$(person + ">.barcover>.overhealbar").css("width", (c.get(e[0].sortkey) / c.maxdamage * 100)+"%");
						var petval = 0;
						var petoverheal = 0;
						for(var i in c.pets)
						{
							petval += c.pets[i].get(e[0].sortkey);
							petoverheal += c.pets[i].get("overHeal");
						}

						if(petval != 0 || petoverheal != 0)
						{
							$(person + ">.barcover>.pbar").show();
						}

						$(person + ">.barcover>.pbar").css("width", ((c[e[0].sortkey] - petoverheal) / c.maxdamage * 100)+"%");
						$(person + ">.barcover>.bar").css("width", ((c[e[0].sortkey] - petval - c.original.OverHeal) / c.maxdamage * 100)+"%");

						if(petval == 0)
							$(person + ">.barcover>.pbar").hide();
					}

					if(classExists(person, ".data"))
						$(person).append("<div class='data'></div>");

					if(option.nickhide == !1)
						$(person + ">.data").addClass("viewnick");
					else
						$(person + ">.data").removeClass("viewnick");

					var tname = (c.rank+1)+". ";
					if(c.name == "Limit Break")
						tname = "L.B";
					else if(option.nickshorter != undefined && !/[가-힣]/.test(c.name) && c.name != "YOU" && /\s/.test(c.name))
					{
						switch(option.nickshorter)
						{
							case "n0": tname += c.name; break;
							case "n1": 
							if(/\s/.test(c.name))
							{
								if((c.name+"").match(/\s/).length > 1)
								{
									tname += c.name;
								}
								else
								{
									tname += c.name.split(" ")[0] + " " + c.name.split(" ")[1].substring(0, 1) + ".";
								}
							}
							break;
							case "n2": 
							if(/\s/.test(c.name))
							{
								if((c.name+"").match(/\s/).length > 1)
								{
									tname += c.name;
								}
								else
								{
									tname += c.name.split(" ")[0].substring(0, 1) + "." + " " + c.name.split(" ")[1];
								}
							}
							break;
							case "n3": 
							if(/\s/.test(c.name))
							{
								if((c.name+"").match(/\s/).length > 1)
								{
									tname += c.name;
								}
								else
								{
									tname += c.name.split(" ")[0].substring(0, 1) + ". " + c.name.split(" ")[1].substring(0, 1) + ".";
								}
							}
							break;
						}
					}
					else
					{
						tname += c.name;
					}

					if(classExists(person, ".data>.name"))
						$(person + ">.data").append("<span class='name' style='display:inline-block;'>"+tname+"</span>");
					else
						$(person + ">.data>.name").html(tname);

					if(classExists(person, ".data>.columns"))
						$(person + ">.data").append("<div class='columns'></div>");

					for(var ix in e[1])
					{
						if(typeof e[1][ix] === "object")
						{
							if(!e[1][ix].view) continue;

							var colname = e[1][ix].name.replace(/%/ig, '_');
							var v = c.get(e[1][ix].name);
							var orgcol = e[1][ix].name;
							var width = e[1][ix].width;
						}
						else
						{
							var colname = e[1][ix].replace(/%/ig, '_');
							var v = c.get(e[1][ix]);
							var orgcol = e[1][ix];
							var width = 50;

							if(largeColumns.indexOf(colname) > -1) width = 140;
							if(smallColumns.indexOf(colname) > -1) width = 50;
						}

						if($(".body").is(".raid"))
							v = parseFloat(v).toFixed(0);

						if(orgcol.indexOf("%") > -1)
							v = parseFloat(v).toFixed(1) + "%";
						else if (typeof v === "number")
						{
							if(v>1000000)
								v = (v / 1000000).toFixed(1) + "m";
							else if(v>10000)
								v = (v / 1000).toFixed(1) + "k";
							else
								v = (v+"").replace(/\.[0-9]+/, "");
						}

						if(colname == "maxhit")
							v = c.get("maxhitstr").replace(/Midare Setsugekka/, "Midare…") + "-" + c.get("maxhitval");
						else if(colname == "maxheal")
							v = c.get("maxhealstr") + "-" + c.get("maxhealval");

						if(classExists(person, ".data>.columns>." + colname))
							$(person + ">.data>.columns").append("<span class='" + colname + "' data-prev='0'>"+v+"</span>");

						$(person + ">.data>.columns>." + colname).width(width);

						$(person + ">.data>.columns>." + colname).html(v);
					}
				}
			}

			$(".body>." + x + ">div")
			.each(function()
			{
				var exists = false;
				var hided = false;
				for(var i in e[0].Combatant)
				{
					var name = e[0].Combatant[i].name.replace(/(\s|'|\.|\"|\(|\))/ig,"_");
					if(name.trim() == "") continue;
					if($(this).is("."+name))
					{
						exists = true;
					}
				}
					
				if(e[0].summonerMerge)
				{
					if($(this).is(".AVA"))
					{
						$(this).hide();
						hided = true;
					}
				}

				if(!exists)
				{
					$(this).remove();
				}

				if(!hided && exists)
				{
					rank++;
				}
			});

			var rank = 0;
			for(var i in e[0].Combatant)
			{
				var c = e[0].Combatant[i];
				var name = c.name.replace(/(\s|'|\.|\"|\(|\))/ig,"_");
				if(name.trim() == "") continue;
				var cdiv = "." + x + ">."+name;
				
				if(x == "hpsarea" && c.enchps == 0)
				{
					$(cdiv).hide();
					rank--;
				}
				else if(x == "hpsarea" && !$(cdiv).is(".AVA"))
				{
					$(cdiv).show();
				}

				$(cdiv).css("top", (rank*$(cdiv).height())+"px");

				if(e[0].summonerMerge && !c.isPet)
					rank++;
				else if(!e[0].summonerMerge)
					rank++;
			}

			var height = 0;

			$("." + x + ">div")
			.each(function()
			{ 
				if($(this).attr("style") != undefined)
				{
					if($(this).attr("style").indexOf("display: none") == -1)
						height += $(this).height();
				}
				else
					height += $(this).height();
			});
			
			$("." + x).css("height", height+4+"px");

			if(height == 0)
			{
				$("." + x.replace("dpsarea", "dpsheader").replace("hpsarea", "hpsheader")).hide();
				$("." + x).hide();
			}
			else
			{
				$("." + x.replace("dpsarea", "dpsheader").replace("hpsarea", "hpsheader")).show();
				$("." + x).show();
			}
		}
	}
	aresize();
	*/
}

sortkey = "encdps";
createHeader();
function aresize()
{
	$(".dpsarea>div").each(function()
	{
		var w = $(this).find(".name").offset().left - $($(this).find(".columns>*")[0]).offset().left;
		$(this).find(".name").css("width", Math.abs(w) + 15);
	});
	$(".hpsarea>div").each(function()
	{
		var w = $(this).find(".name").offset().left - $($(this).find(".columns>*")[0]).offset().left;
		$(this).find(".name").css("width", Math.abs(w) + 15);
	});
}
$(window).resize(function(){aresize();});