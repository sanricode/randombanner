
$(function() {
    var bansize = [
    "青",
    "白",
    "茶色",
    "赤",
    "オレンジ",
    "ピンク",
    "黄色",
    "緑",
    "マーブル",
    "デュオトーン",
    "ダークグレー",
    "紫",
    "水色",
    "黄緑",
    "ライトグレー",
    "ゴールド",
    "シルバー",
    "セピア",
    "パステル"
    ];

    var banshop = [
    "男性被写体",
    "女性被写体",
    "老人被写体",
    "子供被写体",
    "動物（哺乳類）",
    "動物（爬虫類）",
    "動物（鳥類）",
    "動物（魚類）",
    "犬・狼",
    "スポーツシーン",
    "風景（平原）",
    "風景（山）",
    "風景（川）",
    "風景（都市）",
    "風景（空）",
    "風景（鳥瞰図）",
    "デジタルデバイス",
    "住宅街",
    "カフェシーン",
    "家電製品",
    "街角のアート",
    "車",
    "おもちゃ",
    "ガラス瓶",
    "箱",
    "アルファベットまたは数字",
    "身体パーツ"
    ];

    var bangoal = [
      "WebサイトUI",
      "アプリUI",
      "扉の向こうへ（異界と繋げる）",
      "幾何学模様",
      "異種合成",
      "手前に人物を置く",
      "裁断",
      "大きくテキストを置く",
      "類似種と合成",
      "時間帯を変える",
      "天候を変える",
      "異世界の配色に変える",
      "翼をつける",
      "版画風デザイン",
      "激しいエフェクト",
      "かじり跡みたいな欠け",
      "チラシ風",
      "ドーンと美女",
      "窓の向こうに宇宙",
      "フラットデザイン",
      "アイコン化",
      "ダイナミックな動き",
      "アール・デコ",
      "イラレでシンプルにイラスト化",
      "紙幣風デザイン",
      "周囲に異種を飛ばす",
      "宙に浮かす",
      "モフモフにする",
      "線画にする",
      "塵と化して消滅",
      "二重露光",
      "進撃の赤ちゃん",
      "人物と植物を合成",
      "天災図",
      "建物を増やす",
      "円モチーフを配置",
      "植物を生やす"
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
