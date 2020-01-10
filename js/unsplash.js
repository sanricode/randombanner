
$(function() {
    var bansize = [
    "男性",
    "女性",
    "子ども",
    "老人",
    "犬",
    "猫",
    "ゾウ",
    "カバ",
    "ねずみ",
    "魚",
    "海獣",
    "靴",
    "ドリンク",
    "亀",
    "鳥",
    "西洋人",
    "アジア人",
    "イスラム教徒",
    "アフリカ系",
    "ラテン系",
    "メガネの人物",
    "眠っている人",
    "踊っている人",
    "反射ジオメトリ"
    ];

    var banshop = [
    "フラワータイポグラフィ",
    "高層ビル",
    "花畑",
    "荒野",
    "海",
    "海中",
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
    "墓地",
    "廃墟",
    "波打ち際",
    "本棚/図書館/書籍",    
    "部屋の中",
    "窓際",
    "玄関前",
    "テラス",
    "屋上",
    "草原"
    ];

    var bangoal = [
      "砂嵐",
      "霧",
      "逆光",
      "ボケ",
      "雨",
      "ちょうちょ",
      "街灯",
      "ランタン",
      "虹",
      "雲",
      "手紙",
      "妖精",
      "足跡",
      "飛行機",
      "気球",
      "満月",
      "日没",
      "夕焼け",
      "アノニマスマスク",
      "風に吹かれる草",
      "夜明け",
      "追っ手の影",
      "アナログ水彩",
      "古紙",
      "未知へのゲート",
      "デジタルグリッチ",
      "花かざり",
      "水しぶき",
      "パーツの発光",
      "後光"
    ];

    var banclient = [
    // "植物を生やす"
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
