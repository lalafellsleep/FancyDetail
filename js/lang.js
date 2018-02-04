var userLang = "en";
userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substring(0, 2);

var Languages = {
	"lang":{
		"ko":"한국어",
		"en":"English",
		"ja":"日本語"
	},
	"data":[
		"settings", "html", "label", "columns"
	],
	"settings":{
		"glapld":{
			"ko":"검술사, 나이트 배경색",
			"en":"GLA, PLD BackColor",
			"ja":"剣術士, ナイト 背景色"
		},
		"mrdwar":{
			"ko":"도끼술사, 전사 배경색",
			"en":"MRD, WAR BackColor",
			"ja":"斧術士, 戦士 背景色"
		},
		"drk":{
			"ko":"암흑기사 배경색",
			"en":"DRK BackColor",
			"ja":"暗黒騎士 背景色"
		},
		"cnjwhm":{
			"ko":"환술사, 백마도사 배경색",
			"en":"CNJ, WHM BackColor",
			"ja":"幻術士, 白魔道士 背景色"
		},
		"sch":{
			"ko":"학자 배경색",
			"en":"SCH BackColor",
			"ja":"学者 背景色"
		},
		"ast":{
			"ko":"점성술사 배경색",
			"en":"ACT BackColor",
			"ja":"占星術師 背景色"
		},
		"pglmnk":{
			"ko":"격투사, 몽크 배경색",
			"en":"PGL, MNK BackColor",
			"ja":"格闘士, モンク 背景色"
		},
		"lncdrg":{
			"ko":"창술사, 용기사 배경색",
			"en":"LNC, DRG BackColor",
			"ja":"槍術士, 竜騎士 背景色"
		},
		"rognin":{
			"ko":"쌍검사, 닌자 배경색",
			"en":"ROG, NIN BackColor",
			"ja":"双剣士, 忍者 背景色"
		},
		"sam":{
			"ko":"사무라이 배경색",
			"en":"SAM BackColor",
			"ja":"侍 背景色"
		},
		"arcbrd":{
			"ko":"궁술사, 음유시인 배경색",
			"en":"ARC, BRD BackColor",
			"ja":"弓術士, 吟遊詩人 背景色"
		},
		"mch":{
			"ko":"기공사 배경색",
			"en":"MCH BackColor",
			"ja":"機工士 背景色"
		},
		"thmblm":{
			"ko":"주술사, 흑마도사 배경색",
			"en":"THM, BLM BackColor",
			"ja":"呪術士, 黒魔道士 背景色"
		},
		"acnsmn":{
			"ko":"비술사, 소환사 배경색",
			"en":"ACN, SMN BackColor",
			"ja":"巴術士, 召喚士 背景色"
		},
		"rdm":{
			"ko":"적마도사 배경색",
			"en":"RDM BackColor",
			"ja":"赤魔道士 背景色"
		},
		"glapldf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"mrdwarf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"drkf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"cnjwhmf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"schf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"astf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"pglmnkf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"lncdrgf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"rogninf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"samf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"arcbrdf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"mchf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"thmblmf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"acnsmnf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"rdmf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"lmb":{
			"ko":"리미트 브레이크 배경색",
			"en":"LMB BackColor",
			"ja":"リミットブレイク 背景色"
		},
		"lmbf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色"
		},
		"bgcolor":{
			"ko":"배경색",
			"en":"BackColor",
			"ja":"文字色"
		},
		"advancedset":{
			"ko":"고급",
			"en":"Advanced",
			"ja":"高度"
		},
		"user":{
			"ko":"사용자",
			"en":"USER",
			"ja":"ユーザー"
		},
		"ui":{
			"ko":"표시",
			"en":"Interface",
			"ja":"インターフェース"
		},
		"data":{
			"ko":"데이터",
			"en":"Data",
			"ja":"データ"
		},
		"language":{
			"ko":"언어",
			"en":"Language",
			"ja":"言語"
		},
		"nickhide":{
			"ko":"자신 이외의 닉네임 블러",
			"en":"Blur User Names (exclude YOU)",
			"ja":"プレイヤー名をぼかす (自分以外)"
		},
		"rankanim":{
			"ko":"순위변경 효과 사용",
			"en":"Use Ranking Animation",
			"ja":"順位の更新にアニメーションを使う"
		},
		"numbanim":{
			"ko":"숫자변경 효과 사용",
			"en":"Use RDPS & RHPS Number Animation",
			"ja":"数字の更新にアニメーションを使う"
		},
		"hpsallview":{
			"ko":"힐러 영역에 힐러 외 직업 숨김",
			"en":"Display Only Healer on HPS Area",
			"ja":"HPS領域にヒーラーのみを表示する"
		},
		"opacity":{
			"ko":"막대 투명도",
			"en":"Bar Opacity",
			"ja":"バーの不透明度"
		},
		"displayhps":{
			"ko":"힐러 영역 표시",
			"en":"Display HPS Area",
			"ja":"HPS領域を表示する"
		},
		"image":{
			"ko":"배경 이미지",
			"en":"Background Image",
			"ja":"背景画像"
		},
		"imgalign":{
			"ko":"이미지 정렬",
			"en":"Image Align",
			"ja":"画像の配置"
		},
		"imgsizeopt":{
			"ko":"이미지 크기",
			"en":"Image Size",
			"ja":"画像の大きさ"
		},
		"nickshorter":{
			"ko":"이름 줄이기 (글로벌용)",
			"en":"Use Initial Name",
			"ja":"頭文字を使う"
		},
		"tankers":{
			"ko":"방어 역할",
			"en":"Tanker",
			"ja":"タンク"
		},
		"healers":{
			"ko":"회복 역할",
			"en":"Healer",
			"ja":"ヒーラー"
		},
		"dealers":{
			"ko":"공격 역할",
			"en":"DPS",
			"ja":"DPS"
		},
		"rolecolor":{
			"ko":"역할 색상",
			"en":"Role Color",
			"ja":"ロールの色"
		},
		"c_tanker":{
			"ko":"방어 역할",
			"en":"Tanker",
			"ja":"タンク"
		},
		"c_healer":{
			"ko":"회복 역할",
			"en":"Healer",
			"ja":"ヒーラー"
		},
		"c_dps":{
			"ko":"공격 역할",
			"en":"DPS",
			"ja":"DPS"
		},
		"etcicon":{
			"ko":"막대 일반 설정",
			"en":"Bar General Setting",
			"ja":"バーの全般的な設定"
		},
		"overhealcolor":{
			"ko":"오버힐 색상",
			"en":"Overheal Color",
			"ja":"オーバーヒールの色"
		},
		"iconglow":{
			"ko":"직업 아이콘 글로우 색",
			"en":"Icon Glow Color",
			"ja":"ジョブアイコンの光る色"
		},
		"fonts":{
			"ko":"폰트 스타일",
			"en":"General Font Style",
			"ja":"フォント"
		},
		"fontsize":{
			"ko":"폰트 크기",
			"en":"General Font Size",
			"ja":"文字の大きさ"
		},
		"columnset":{
			"ko":"항목 설정",
			"en":"Column Setting",
			"ja":"カラム設定"
		},
		"setting-in-out":{
			"ko":"설정 내보내기/들여오기",
			"en":"Set Export/Import",
			"en":"設定のエクスポート／インポート"
		},
		"overlayinfo":{
			"ko":"오버레이 정보",
			"en":"Overlay Information",
			"ja":"オーバーレイ情報"
		},
		"topbgcolor":{
			"ko":"헤더 색상",
			"en":"Header Color",
			"ja":"ヘッダーの色"
		}
	},
	"html":{
		"lang-setting":{
			"ko":"설정",
			"en":"Setting",
			"ja":"設定"
		}
	},
	"label":{
		"donate":{
			"ko":"기부",
			"en":"DONATE",
			"ja":"寄付"
		},
		"issue":{
			"ko":"문의",
			"en":"OPEN ISSUE",
			"ja":"お問い合わせ"
		},
		"setting":{
			"ko":"설정",
			"en":"SET AND INFO",
			"ja":"設定"
		},
		"cssfilter":{
			"ko":"CSS필터",
			"en":"CSS Filter",
			"ja":"CSSフィルタ"
		},
		"widthfit":{
			"ko":"좌우에 맞게",
			"en":"Width fit",
			"en":"横幅を合わせる"
		},
		"heightfit":{
			"ko":"상하에 맞게",
			"en":"Height fit",
			"en":"縦幅を合わせる"
		},
		"original":{
			"ko":"원본",
			"en":"Original",
			"ja":"そのまま"
		},
		"notuse":{
			"ko":"Aquamarin Diamond (사용 안 함)",
			"en":"Aquamarin Diamond",
			"ja":"Naoki Yoshida"
		},
		"nameval1":{
			"ko":"Aquamarin D. (뒷 이름 줄이기)",
			"en":"Aquamarin D.",
			"ja":"Naoki Y."
		},
		"nameval2":{
			"ko":"A. Diamond (앞 이름 줄이기)",
			"en":"A. Diamond",
			"ja":"N. Yoshida"
		},
		"nameval3":{
			"ko":"A. D. (모두 줄이기)",
			"en":"A. D.",
			"ja":"N. Y."
		},
		"setexport":{
			"ko":"텍스트 상자를 복사하여 설정을 공유하거나 저장할 수 있습니다.",
			"en":"Copy textbox content, you can save and share this.",
			"ja":"テキストボックスの中身をコピーして、設定を共有したり、保存することができます"
		},
		"setimport":{
			"ko":"혹은, 공유받거나 저장한 설정이 있으면 불러올 수 있습니다.",
			"en":"Or, if you have Setting JSON. Paste that below textbox and press Allow button.",
			"ja":"また、JSONデータを持っている場合は貼り付けて適用することができます。"
		},
		"set-gen":{
			"ko":"일반",
			"en":"General Set",
			"ja":"全般"
		},
		"set-bgs":{
			"ko":"배경 및 헤더 설정",
			"en":"BG &amp; Header Edit",
			"ja":"背景とヘッダー"
		},
		"set-col":{
			"ko":"항목 설정",
			"en":"Columns Edit",
			"ja":"カラム編集"
		},
		"set-gnb":{
			"ko":"전역 바 설정",
			"en":"General Bar Set",
			"ja":"バーの設定"
		},
		"set-adb":{
			"ko":"상세 바 설정",
			"en":"Advanced Bar Set",
			"ja":"バーの設定 (詳細)"
		},
		"set-xim":{
			"ko":"들여오기/내보내기",
			"en":"Set Export/Import",
			"ja":"インポート／エクスポート"
		},
		"set-inf":{
			"ko":"오버레이 정보",
			"en":"Overlay Information",
			"ja":"オーバーレイ情報"
		}
	},
	"columns":{
		"encdps":{
			"ko":"DPS",
			"en":"DPS",
			"ja":"DPS"
		},
		"enchps":{
			"ko":"HPS",
			"en":"HPS",
			"ja":"HPS"
		},
		"damage":{
			"ko":"딜량",
			"en":"Damage",
			"ja":"Damage"
		},
		"crithit%":{
			"ko":"극대%",
			"en":"D.Crit%",
			"ja":"D.Crit%"
		},
		"maxhit":{
			"ko":"최대딜",
			"en":"Max Hit",
			"ja":"Best Hit"
		},
		"swings":{
			"ko":"타격",
			"en":"Swing",
			"ja":"Swing"
		},
		"misses":{
			"ko":"빗나감",
			"en":"Miss",
			"ja":"Miss"
		},
		"deaths":{
			"ko":"사망",
			"en":"D",
			"ja":"死"
		},
		"healed":{
			"ko":"힐량",
			"en":"Healed",
			"ja":"Healed"
		},
		"dps":{
			"ko":"개인DPS",
			"en":"P.DPS",
			"ja":"個人DPS"
		},
		"hps":{
			"ko":"개인HPS",
			"en":"P.HPS",
			"ja":"個人HPS"
		},
		"overHeal":{
			"ko":"오버힐",
			"en":"Ov.H",
			"ja":"Ov.H"
		},
		"overHeal%":{
			"ko":"오버힐%",
			"en":"Ov.H%",
			"ja":"Ov.H%"
		},
		"damageShield":{
			"ko":"보호막",
			"en":"D.Shield",
			"ja":"バリア"
		},
		"effectiveHeal":{
			"en":"Eff.H",
			"ko":"유효힐",
			"ja":"有効ヒール"
		}
	}
};

if (Languages.lang[userLang] == undefined)
	userLang = "en";

var option = {
	displayhps:true,
	nickhide:true,
	rankanim:true,
	numbanim:true,
	hpsallview:true,
	opacity:100,
	backgroundimg:"",
	fonts:"Noto Sans KR",
	fontsize:12
};

var curLang = new function()
{
	this.lang = Languages.lang[userLang];
	for(var l in Languages.data)
	{
		for(var i in Languages[Languages.data[l]])
		{
			if(this[Languages.data[l]] == undefined)
				this[Languages.data[l]] = [];

			for(var i in Languages[Languages.data[l]])
			{
				this[Languages.data[l]][i] = Languages[Languages.data[l]][i][userLang];
			}
		}
	}
};

$(".item[data-id=language]").html(curLang.lang);

if(curLang != undefined)
{
	$("[data-id]").each(function()
	{
		if(curLang.settings[$(this).attr("data-id")] != undefined)
		{
			$(this).attr("label", curLang.settings[$(this).attr("data-id")]);
		}
	});

	for(var i in curLang.html)
	{
		var $element = $("#" + i );
		$element.text(curLang.html[i]);
	}

	for(var i in curLang.label)
	{
		$("[data-label]").each(function()
		{
			if($(this).attr("data-label") == i)
				$(this).html(curLang.label[i]);
		});
	}
}
var origopt = option;
