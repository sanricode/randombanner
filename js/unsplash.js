
$(function() {
    var bansize = [ //今日の主役
    "人物：男性",
    "人物：女性",
    "人物：子ども",
    "人物：老人",
    "人物：西洋人",
    "人物：アジア人",
    "人物：イスラム教徒",
    "人物：アフリカ系",
    "人物：ラテン系",
    "人物：眠っている人",
    "人物：踊っている人",
    "人物：考え込む人",
    "主役：犬",
    "主役：猫",
    "主役：ゾウ、キリンなど大型哺乳類",
    "主役：アフリカの動物",
    "主役：げっ歯類",
    "主役：魚",
    "主役：海獣",
    "主役：亀など爬虫類",
    "主役：鳥",
    "主役：ジオメトリ",
    "主役：なんでもよし"
    ];

    var banshop = [ //背景
   "フラワータイポグラフィ",
    "高層ビル",
    "花畑",
    "荒野",
    "海",
    "海の中",
    "教会",
    "田舎の小道",
    "密林",    
    "小川",
    "森の中",
    "線路",
    "道",
    "山脈",
    "湖",
    "崖",
    "都心部",
    "街の中",
    "墓地",
    "廃墟",
    "雲の上",
    "波打ち際",
    "本棚/図書館/書籍",    
    "部屋の中",
    "窓際",
    "玄関前",
    "テラス",
    "屋上",
    "室内",
    "草原"
    ];

    var bangoal = [ //演出・特殊効果
      "砂嵐",
      "霧",
      "嵐",
      "逆光",
      "ボケ",
      "雨",
      "灯",
      "虹",
      "雲",
      "ささめ雪",
      "雪",
      "手紙",
      "足跡",
      "満月",
      "日没",
      "夕焼け",
      "ボカシ",
      "夜明け",
      "水墨画の風景",
      "水彩画の風景",
      "渡り鳥の群れ",
      "古紙テクスチャ",
      "デジタルグリッチ",
      "水しぶき",
      "月はわたしのもの",
      "パーツの発光",
      "夜空から光が降りそそぐ",
      "窓の外側になにかが見える",
      "窓の外は海",
      "窓の外は宇宙", 
      "シャボン玉",
      "後光"
    ];

    var banclient = [ //助演・小道具
      "とりかご",
      "ボール（サッカーボール、バスケットボール等）",
      "金魚",
      "錦鯉",
      "犬",
      "猫",
      "大型海洋生物",
      "ちょうちょ",
      "誰かからの手紙",
      "はしご",
      "空っぽの椅子",
      "iPhone",
      "紙巻タバコ",
      "葉巻",
      "芽・若葉",
      "錆びたバケツ",
      "かわいいキノコ",
      "空っぽの椅子",
      "巨大な「いいね」（その他SNSアイコン）",
      "パズルのピース",
      "空のさかな",
      "旅支度",
      "夏の思い出",
      "春の残り香",
      "秋の残滓",
      "冬のわすれもの",
      "パーティ",
      "コーヒーカップ",
      "鳩/からす",
      "花が一輪",
      "ジオメトリ",
      "アノニマス",
      "車",
      "車椅子",
      "雨の窓ガラス",
      "手前にボカシのかかった枝・花"
    ];

    //コーディングレベルこれくらいなのでスマートな書き方はちょっとまってね

    var bansize_length = bansize.length;
    var banshop_length = banshop.length;
    var bangoal_length = bangoal.length;
    // var banclient_length = banclient.length;

    var bansize_random = Math.floor(Math.random()*bansize_length);
    var banshop_random = Math.floor(Math.random()*banshop_length);
    var bangoal_random = Math.floor(Math.random()*bangoal_length);
    // var banclient_random = Math.floor(Math.random()*banclient_length);

    var bansize_text = bansize[bansize_random];
    var banshop_text = banshop[banshop_random];
    var bangoal_text = bangoal[bangoal_random];
    // var banclient_text = banclient[banclient_random];

    $("#bansize").html( bansize_text );
    $("#banshop").html( banshop_text );
    $("#bangoal").html( bangoal_text );
    // $("#banclient").html( banclient_text );

    //今後の成長にご期待ください

});
