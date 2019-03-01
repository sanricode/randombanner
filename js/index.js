
$(function() {
    var bansize = [
    "300x250<span>（GDN,YDN/レクタングル）</span>",
    "336x280<span>（GDN/レクタングル）</span>",
    "240x400<span>（GDN/レクタングル）</span>",
    "600x500<span>（YDN/レクタングル）</span>",
    "1200x628<span>（YDN/レクタングル）</span>",
    "200x200<span>（GDN/スクエア）</span>",
    "250x250<span>（GDN/スクエア）</span>",
    "300x300<span>（YDN/スクエア）</span>",
    "180x180<span>（YDN/スクエア）</span>",
    "468x60<span>（GDN,YDN/バナー）</span>",
    "728x90<span>（GDN,YDN/バナー）</span>",
    "970x90<span>（GDN/バナー）</span>",
    "970x250<span>（GDN/バナー）</span>",
    "160x600<span>（GDN,YDN/スカイスクレイパー）</span>",
    "120x600<span>（GDN/スカイスクレイパー）</span>",
    "300x600<span>（GDN/スカイスクレイパー）</span>",
    "300x1050<span>（GDN/スカイスクレイパー）</span>",
    "320x50<span>（GDN,YDN/モバイル）</span>",
    "320x100<span>（GDN,YDN/モバイル）</span>",
    "640x100<span>（YDN/モバイル）</span>",
    "640x200<span>（YDN/モバイル）</span>"
    ];

    var banshop = [
    "老舗うなぎ屋",
    "老舗割烹",
    "靴専門店",
    "イタリアンレストラン",
    "中央アジア料理店",
    "アウトドア用品店",
    "知育おもちゃ専門店",
    "高級腕時計専門店",
    "女性用下着ブランド",
    "エステサロン",
    "ヨガ教室",
    "リゾートホテル",
    "結婚式場",
    "写真館",
    "着物レンタルサービス",
    "宝飾店",
    "ペット用品店",
    "釣具店",
    "ジム",
    "バレエスタジオ",
    "ガーデニングショップ",
    "ギター専門店",
    "模型店",
    "質屋",
    "20代女性向けファッションブランド",
    "20代男性向けファッションブランド",
    "ファストファッションブランド",
    "文具店",
    "レコードショップ",
    "サイクルショップ",
    "焼肉屋",
    "工務店",
    "ミニシアター",
    "スポーツ用品店",
    "イタリアンレストラン",
    "オーダースーツ専門店",
    "パン屋",
    "革小物専門店",
    "カフェ",
    "子ども向け英会話教室",
    "社会人向け英会話教室",
    "猫カフェ",
    "ボルダリングスタジオ",
    "スペインバル",
    "日本酒専門店",
    "バー",
    "スポーツバー",
    "シュラスコレストラン",
    "バイク店",
    "レンタカー",
    "転職エージェント",
    "化粧品メーカー",
    "大手航空会社",
    "格安航空会社",
    "大手コンビニチェーン",
    "マンションデベロッパー",
    "旅行代理店"
    ];

    var bangoal = [
    "父の日キャンペーン",
    "母の日キャンペーン",
    "新店舗オープンキャンペーン",
    "ポイント5倍キャンペーン",
    "10%OFFキャンペーン",
    "年末フェア",
    "クリスマスフェア",
    "旧正月フェア",
    "ハロウィンフェア",
    "バレンタインキャンペーン",
    "ホワイトデーキャンペーン",
    "入学・卒業キャンペーン",
    "新生活応援フェア",
    "七夕フェア",
    "リニューアルキャンペーン",
    "サマーキャンペーン",
    "夏休み親子キャンペーン",
    "お客様感謝ウィーク",
    "創業周年キャンペーン",
    "オータムフェア"
    ];

    var banclient = [
    "男性向けと女性向けとで迷ってるから、両方作ってほしい",
    "高齢者向けと若者向けで迷ってるから、両方作ってほしい",
    "なんかこう、フレッシュ！！っていう感じで！",
    "インスタ映えっぽい雰囲気を出したい",
    "10代〜20代の女性にウケるような感じにしてほしい",
    "至急。2時間以内にください。",
    "至急。1時間以内にください。",
    "至急。30分以内にください。",
    "黒とか白とか、なんかこう、モダンでシャープな雰囲気がいい",
    "インパクトのあるデザインがいい",
    "最終的には社長なんで、80代男性がOK出しそうなやつで",
    "キラキラした感じで、かっこよくてオシャレなやつがいい",
    "笑顔の人物写真を使ってほしい。爽やかなイメージで",
    "親しみやすさをアピールしたい。ナチュラル系とか、ポップで可愛い感じで。",
    "これまでと違うイメージを出したいので、意外なデザインにしてみてほしい",
    "一切お任せする。デザイナーさんのセンスを爆発させてほしい。楽しみにしています",
    "売上を上げられるバナーなら何でもいいよ",
    "写真ないんで、文字のみでお願いします",
    "高級感をガツーンと打ち出して欲しいんだよね〜"
    ];

    var bansize_length = bansize.length;
    var banshop_length = banshop.length;
    var bangoal_length = bangoal.length;
    var banclient_length = banclient.length;

    var bansize_random = Math.floor(Math.random()*bansize_length);
    var banshop_random = Math.floor(Math.random()*banshop_length);
    var bangoal_random = Math.floor(Math.random()*bangoal_length);
    var banclient_random = Math.floor(Math.random()*banclient_length);

    var bansize_text = bansize[bansize_random];
    var banshop_text = banshop[banshop_random];
    var bangoal_text = bangoal[bangoal_random];
    var banclient_text = banclient[banclient_random];

    $("#bansize").html( bansize_text );
    $("#banshop").html( banshop_text );
    $("#bangoal").html( bangoal_text );
    $("#banclient").html( banclient_text );

    //コーディングレベルこれくらいなのでスマートな書き方はちょっとまってね
    //今後の成長にご期待ください

});
