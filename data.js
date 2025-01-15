const data = [
    {
        word: "あ",
        ipa_pronunciation: ["a̠"],
        readings: {
            en: ["a"],
            vn: ["a"],
            my: ["a"]
        },
    },
    {
        word: "い",
        ipa_pronunciation: ["i̥"],
        readings: {
            en: ["i"],
            vn: ["i"],
            my: ["i"]
        },
    },
    {
        word: "う",
        ipa_pronunciation: ["ɯᵝ", "u̥"],
        readings: {
            en: ["u"],
            vn: ["u"],
            my: ["u"]
        },
    },
    {
        word: "え",
        ipa_pronunciation: ["e̞"],
        readings: {
            en: ["e"],
            vn: ["e"],
            my: ["e"]
        },
    },
    {
        word: "お",
        ipa_pronunciation: ["o̞"],
        readings: {
            en: ["o"],
            vn: ["o"],
            my: ["o"]
        },
    },
    {
        word: "か",
        ipa_pronunciation: ["ka̠"],
        readings: {
            en: ["ka"],
            vn: ["ca"],
            my: ["ka"]
        },
    },
    {
        word: "き",
        ipa_pronunciation: ["ki̥"],
        readings: {
            en: ["ki"],
            vn: ["ki"],
            my: ["ki"]
        },
    },
    {
        word: "く",
        ipa_pronunciation: ["kɯᵝ", "ku̥"],
        readings: {
            en: ["ku"],
            vn: ["cu"],
            my: ["ku"]
        },
    },
    {
        word: "け",
        ipa_pronunciation: ["ke̞"],
        readings: {
            en: ["ke"],
            vn: ["ce"],
            my: ["ke"]
        },
    },
    {
        word: "こ",
        ipa_pronunciation: ["ko̞"],
        readings: {
            en: ["ko"],
            vn: ["co"],
            my: ["ko"]
        },
    },
    {
        word: "さ",
        ipa_pronunciation: ["sa̠"],
        readings: {
            en: ["sa"],
            vn: ["sa"],
            my: ["sa"]
        },
    },
    {
        word: "し",
        ipa_pronunciation: ["ɕi̥"],
        readings: {
            en: ["shi"],
            vn: ["xì"],
            my: ["shi"]
        },
    },
    {
        word: "す",
        ipa_pronunciation: ["sɯᵝ", "su̥"],
        readings: {
            en: ["su"],
            vn: ["xu"],
            my: ["su"]
        },
    },
    {
        word: "せ",
        ipa_pronunciation: ["se̞"],
        readings: {
            en: ["se"],
            vn: ["xe"],
            my: ["se"]
        },
    },
    {
        word: "そ",
        ipa_pronunciation: ["so̞"],
        readings: {
            en: ["so"],
            vn: ["xo"],
            my: ["so"]
        },
    },
    {
        word: "た",
        ipa_pronunciation: ["ta̠"],
        readings: {
            en: ["ta"],
            vn: ["ta"],
            my: ["ta"]
        },
    },
    {
        word: "ち",
        ipa_pronunciation: ["tɕi̥"],
        readings: {
            en: ["chi"],
            vn: ["chì"],
            my: ["chi"]
        },
    },
    {
        word: "つ",
        ipa_pronunciation: ["tsɯᵝ", "tsu̥"],
        readings: {
            en: ["tsu"],
            vn: ["tư"],
            my: ["tsu"]
        },
    },
    {
        word: "て",
        ipa_pronunciation: ["te̞"],
        readings: {
            en: ["te"],
            vn: ["te"],
            my: ["te"]
        },
    },
    {
        word: "と",
        ipa_pronunciation: ["to̞"],
        readings: {
            en: ["to"],
            vn: ["to"],
            my: ["to"]
        },
    },
    {
        word: "な",
        ipa_pronunciation: ["na̠"],
        readings: {
            en: ["na"],
            vn: ["na"],
            my: ["na"]
        },
    },
    {
        word: "に",
        ipa_pronunciation: ["ni̥"],
        readings: {
            en: ["ni"],
            vn: ["ni"],
            my: ["ni"]
        },
    },
    {
        word: "ぬ",
        ipa_pronunciation: ["nɯᵝ", "nu̥"],
        readings: {
            en: ["nu"],
            vn: ["nu"],
            my: ["nu"]
        },
    },
    {
        word: "ね",
        ipa_pronunciation: ["ne̞"],
        readings: {
            en: ["ne"],
            vn: ["ne"],
            my: ["ne"]
        },
    },
    {
        word: "の",
        ipa_pronunciation: ["no̞"],
        readings: {
            en: ["no"],
            vn: ["no"],
            my: ["no"]
        },
    },
    {
        word: "は",
        ipa_pronunciation: ["ha̠"],
        readings: {
            en: ["ha"],
            vn: ["ha"],
            my: ["ha"]
        },
    },
    {
        word: "ひ",
        ipa_pronunciation: ["çi̥"],
        readings: {
            en: ["hi"],
            vn: ["hì"],
            my: ["hi"]
        },
    },
    {
        word: "ふ",
        ipa_pronunciation: ["ɸɯᵝ", "fu̥"],
        readings: {
            en: ["fu"],
            vn: ["phu"],
            my: ["fu"]
        },
    },
    {
        word: "へ",
        ipa_pronunciation: ["he̞"],
        readings: {
            en: ["he"],
            vn: ["he"],
            my: ["he"]
        },
    },
    {
        word: "ほ",
        ipa_pronunciation: ["ho̞"],
        readings: {
            en: ["ho"],
            vn: ["ho"],
            my: ["ho"]
        },
    },
    {
        word: "ま",
        ipa_pronunciation: ["ma̠"],
        readings: {
            en: ["ma"],
            vn: ["ma"],
            my: ["ma"]
        },
    },
    {
        word: "み",
        ipa_pronunciation: ["mi̥"],
        readings: {
            en: ["mi"],
            vn: ["mi"],
            my: ["mi"]
        },
    },
    {
        word: "む",
        ipa_pronunciation: ["mɯᵝ", "mu̥"],
        readings: {
            en: ["mu"],
            vn: ["mu"],
            my: ["mu"]
        },
    },
    {
        word: "め",
        ipa_pronunciation: ["me̞"],
        readings: {
            en: ["me"],
            vn: ["me"],
            my: ["me"]
        },
    },
    {
        word: "も",
        ipa_pronunciation: ["mo̞"],
        readings: {
            en: ["mo"],
            vn: ["mo"],
            my: ["mo"]
        },
    },
    {
        word: "や",
        ipa_pronunciation: ["ja̠"],
        readings: {
            en: ["ya"],
            vn: ["dya"],
            my: ["ya"]
        },
    },
    {
        word: "ゆ",
        ipa_pronunciation: ["jɯᵝ", "ju̥"],
        readings: {
            en: ["yu"],
            vn: ["dyu"],
            my: ["yu"]
        },
    },
    {
        word: "よ",
        ipa_pronunciation: ["jo̞"],
        readings: {
            en: ["yo"],
            vn: ["dyo"],
            my: ["yo"]
        },
    },
    {
        word: "ら",
        ipa_pronunciation: ["ɾa̠"],
        readings: {
            en: ["ra"],
            vn: ["la"],
            my: ["ra"]
        },
    },
    {
        word: "り",
        ipa_pronunciation: ["ɾi̥"],
        readings: {
            en: ["ri"],
            vn: ["li"],
            my: ["ri"]
        },
    },
    {
        word: "る",
        ipa_pronunciation: ["ɾɯᵝ", "ɾu̥"],
        readings: {
            en: ["ru"],
            vn: ["lu"],
            my: ["ru"]
        },
    },
    {
        word: "れ",
        ipa_pronunciation: ["ɾe̞"],
        readings: {
            en: ["re"],
            vn: ["le"],
            my: ["re"]
        },
    },
    {
        word: "ろ",
        ipa_pronunciation: ["ɾo̞"],
        readings: {
            en: ["ro"],
            vn: ["lo"],
            my: ["ro"]
        },
    },
    {
        word: "わ",
        ipa_pronunciation: ["ɰa̠"],
        readings: {
            en: ["wa"],
            vn: ["oa"],
            my: ["wa"]
        },
    },
    {
        word: "を",
        ipa_pronunciation: ["o̞"],
        readings: {
            en: ["wo"],
            vn: ["ô"],
            my: ["wo"]
        },
    },
    {
        word: "ん",
        ipa_pronunciation: ["ɴ", "n", "m", "ŋ"],
        readings: {
            en: ["n/m/ng"],
            vn: ["n/m/ng"],
            my: ["n/m/ng"]
        },
    },
    {
        word: "きゃ",
        ipa_pronunciation: ["kʲa̠"],
        readings: {
            en: ["kya"],
            vn: ["kyă"],
            my: ["kya"]
        },
    },
    {
        word: "きゅ",
        ipa_pronunciation: ["kʲɯᵝ", "kʲu̥"],
        readings: {
            en: ["kyu"],
            vn: ["kyư"],
            my: ["kyu"]
        },
    },
    {
        word: "きょ",
        ipa_pronunciation: ["kʲo̞"],
        readings: {
            en: ["kyo"],
            vn: ["kyô"],
            my: ["kyo"]
        },
    },
    {
        word: "しゃ",
        ipa_pronunciation: ["ɕa̠"],
        readings: {
            en: ["sha"],
            vn: ["sá"],
            my: ["sya"]
        },
    },
    {
        word: "しゅ",
        ipa_pronunciation: ["ɕɯᵝ", "ɕu̥"],
        readings: {
            en: ["shu"],
            vn: ["su"],
            my: ["shu"]
        },
    },
    {
        word: "しょ",
        ipa_pronunciation: ["ɕo̞"],
        readings: {
            en: ["sho"],
            vn: ["so"],
            my: ["sho"]
        },
    },
    {
        word: "ちゃ",
        ipa_pronunciation: ["tɕa̠"],
        readings: {
            en: ["cha"],
            vn: ["chà"],
            my: ["cha"]
        },
    },
    {
        word: "ちゅ",
        ipa_pronunciation: ["tɕɯᵝ", "tɕu̥"],
        readings: {
            en: ["chu"],
            vn: ["chư"],
            my: ["chu"]
        },
    },
    {
        word: "ちょ",
        ipa_pronunciation: ["tɕo̞"],
        readings: {
            en: ["cho"],
            vn: ["chô"],
            my: ["cho"]
        },
    },
    {
        word: "にゃ",
        ipa_pronunciation: ["ɲa̠"],
        readings: {
            en: ["nya"],
            vn: ["nhă"],
            my: ["nya"]
        },
    },
    {
        word: "にゅ",
        ipa_pronunciation: ["ɲɯᵝ", "ɲu̥"],
        readings: {
            en: ["nyu"],
            vn: ["như"],
            my: ["nyu"]
        },
    },
    {
        word: "にょ",
        ipa_pronunciation: ["ɲo̞"],
        readings: {
            en: ["nyo"],
            vn: ["nhô"],
            my: ["nyo"]
        },
    },
    {
        word: "ひゃ",
        ipa_pronunciation: ["ça̠"],
        readings: {
            en: ["hya"],
            vn: ["hia"],
            my: ["hya"]
        },
    },
    {
        word: "ひゅ",
        ipa_pronunciation: ["çɯᵝ", "çu̥"],
        readings: {
            en: ["hyu"],
            vn: ["hiu"],
            my: ["hyu"]
        },
    },
    {
        word: "ひょ",
        ipa_pronunciation: ["ço̞"],
        readings: {
            en: ["hyo"],
            vn: ["hio"],
            my: ["hyo"]
        },
    },
    {
        word: "みゃ",
        ipa_pronunciation: ["mja̠"],
        readings: {
            en: ["mya"],
            vn: ["mia"],
            my: ["mya"]
        },
    },
    {
        word: "みゅ",
        ipa_pronunciation: ["mjɯᵝ", "mju̥"],
        readings: {
            en: ["myu"],
            vn: ["miu"],
            my: ["myu"]
        },
    },
    {
        word: "みょ",
        ipa_pronunciation: ["mjo̞"],
        readings: {
            en: ["myo"],
            vn: ["mio"],
            my: ["myo"]
        },
    },
    {
        word: "りゃ",
        ipa_pronunciation: ["ɾʲa̠"],
        readings: {
            en: ["rya"],
            vn: ["lia"],
            my: ["rya"]
        },
    },
    {
        word: "りゅ",
        ipa_pronunciation: ["ɾʲɯᵝ", "ɾʲu̥"],
        readings: {
            en: ["ryu"],
            vn: ["liu"],
            my: ["ryu"]
        },
    },
    {
        word: "りょ",
        ipa_pronunciation: ["ɾʲo̞"],
        readings: {
            en: ["ryo"],
            vn: ["lio"],
            my: ["ryo"]
        },
    },
    {
        word: "ぎゃ",
        ipa_pronunciation: ["ɡʲa̠"],
        readings: {
            en: ["gya"],
            vn: ["gia"],
            my: ["gya"]
        },
    },
    {
        word: "ぎゅ",
        ipa_pronunciation: ["ɡʲɯᵝ", "ɡʲu̥"],
        readings: {
            en: ["gyu"],
            vn: ["giu"],
            my: ["gyu"]
        },
    },
    {
        word: "ぎょ",
        ipa_pronunciation: ["ɡʲo̞"],
        readings: {
            en: ["gyo"],
            vn: ["gio"],
            my: ["gyo"]
        },
    },
    {
        word: "じゃ",
        ipa_pronunciation: ["ʑa̠"],
        readings: {
            en: ["ja"],
            vn: ["dza"],
            my: ["ja"]
        },
    },
    {
        word: "じゅ",
        ipa_pronunciation: ["ʑɯᵝ", "ʑu̥"],
        readings: {
            en: ["ju"],
            vn: ["dzư"],
            my: ["ju"]
        },
    },
    {
        word: "じょ",
        ipa_pronunciation: ["ʑo̞"],
        readings: {
            en: ["jo"],
            vn: ["dzo"],
            my: ["jo"]
        },
    },
    {
        word: "びゃ",
        ipa_pronunciation: ["bʲa̠"],
        readings: {
            en: ["bya"],
            vn: ["bia"],
            my: ["bya"]
        },
    },
    {
        word: "びゅ",
        ipa_pronunciation: ["bʲɯᵝ", "bʲu̥"],
        readings: {
            en: ["byu"],
            vn: ["biu"],
            my: ["byu"]
        },
    },
    {
        word: "びょ",
        ipa_pronunciation: ["bʲo̞"],
        readings: {
            en: ["byo"],
            vn: ["bio"],
            my: ["byo"]
        },
    },
    {
        word: "ぴゃ",
        ipa_pronunciation: ["pʲa̠"],
        readings: {
            en: ["pya"],
            vn: ["pia"],
            my: ["pya"]
        },
    },
    {
        word: "ぴゅ",
        ipa_pronunciation: ["pʲɯᵝ", "pʲu̥"],
        readings: {
            en: ["pyu"],
            vn: ["piu"],
            my: ["pyu"]
        },
    },
    {
        word: "ぴょ",
        ipa_pronunciation: ["pʲo̞"],
        readings: {
            en: ["pyo"],
            vn: ["pio"],
            my: ["pyo"]
        },
    },
    {
        word: "ア",
        ipa_pronunciation: ["a̠"],
        readings: {
            en: ["a"],
            vn: ["a"],
            my: ["a"]
        },
    },
    {
        word: "イ",
        ipa_pronunciation: ["i̥"],
        readings: {
            en: ["i"],
            vn: ["i"],
            my: ["i"]
        },
    },
    {
        word: "ウ",
        ipa_pronunciation: ["ɯᵝ", "u̥"],
        readings: {
            en: ["u"],
            vn: ["u"],
            my: ["u"]
        },
    },
    {
        word: "エ",
        ipa_pronunciation: ["e̞"],
        readings: {
            en: ["e"],
            vn: ["e"],
            my: ["e"]
        },
    },
    {
        word: "オ",
        ipa_pronunciation: ["o̞"],
        readings: {
            en: ["o"],
            vn: ["o"],
            my: ["o"]
        },
    },
    {
        word: "カ",
        ipa_pronunciation: ["ka̠"],
        readings: {
            en: ["ka"],
            vn: ["ca"],
            my: ["ka"]
        },
    },
    {
        word: "キ",
        ipa_pronunciation: ["ki̥"],
        readings: {
            en: ["ki"],
            vn: ["ki"],
            my: ["ki"]
        },
    },
    {
        word: "ク",
        ipa_pronunciation: ["kɯᵝ", "ku̥"],
        readings: {
            en: ["ku"],
            vn: ["cu"],
            my: ["ku"]
        },
    },
    {
        word: "ケ",
        ipa_pronunciation: ["ke̞"],
        readings: {
            en: ["ke"],
            vn: ["ce"],
            my: ["ke"]
        },
    },
    {
        word: "コ",
        ipa_pronunciation: ["ko̞"],
        readings: {
            en: ["ko"],
            vn: ["co"],
            my: ["ko"]
        },
    },
    {
        word: "サ",
        ipa_pronunciation: ["sa̠"],
        readings: {
            en: ["sa"],
            vn: ["sa"],
            my: ["sa"]
        },
    },
    {
        word: "シ",
        ipa_pronunciation: ["ɕi̥"],
        readings: {
            en: ["shi"],
            vn: ["xì"],
            my: ["shi"]
        },
    },
    {
        word: "ス",
        ipa_pronunciation: ["sɯᵝ", "su̥"],
        readings: {
            en: ["su"],
            vn: ["xu"],
            my: ["su"]
        },
    },
    {
        word: "セ",
        ipa_pronunciation: ["se̞"],
        readings: {
            en: ["se"],
            vn: ["xe"],
            my: ["se"]
        },
    },
    {
        word: "ソ",
        ipa_pronunciation: ["so̞"],
        readings: {
            en: ["so"],
            vn: ["xo"],
            my: ["so"]
        },
    },
    {
        word: "タ",
        ipa_pronunciation: ["ta̠"],
        readings: {
            en: ["ta"],
            vn: ["ta"],
            my: ["ta"]
        },
    },
    {
        word: "チ",
        ipa_pronunciation: ["tɕi̥"],
        readings: {
            en: ["chi"],
            vn: ["chì"],
            my: ["chi"]
        },
    },
    {
        word: "ツ",
        ipa_pronunciation: ["tsɯᵝ", "tsu̥"],
        readings: {
            en: ["tsu"],
            vn: ["tư"],
            my: ["tsu"]
        },
    },
    {
        word: "テ",
        ipa_pronunciation: ["te̞"],
        readings: {
            en: ["te"],
            vn: ["te"],
            my: ["te"]
        },
    },
    {
        word: "ト",
        ipa_pronunciation: ["to̞"],
        readings: {
            en: ["to"],
            vn: ["to"],
            my: ["to"]
        },
    },
    {
        word: "ナ",
        ipa_pronunciation: ["na̠"],
        readings: {
            en: ["na"],
            vn: ["na"],
            my: ["na"]
        },
    },
    {
        word: "ニ",
        ipa_pronunciation: ["ni̥"],
        readings: {
            en: ["ni"],
            vn: ["ni"],
            my: ["ni"]
        },
    },
    {
        word: "ヌ",
        ipa_pronunciation: ["nɯᵝ", "nu̥"],
        readings: {
            en: ["nu"],
            vn: ["nu"],
            my: ["nu"]
        },
    },
    {
        word: "ネ",
        ipa_pronunciation: ["ne̞"],
        readings: {
            en: ["ne"],
            vn: ["ne"],
            my: ["ne"]
        },
    },
    {
        word: "ノ",
        ipa_pronunciation: ["no̞"],
        readings: {
            en: ["no"],
            vn: ["no"],
            my: ["no"]
        },
    },
    {
        word: "ハ",
        ipa_pronunciation: ["ha̠"],
        readings: {
            en: ["ha"],
            vn: ["ha"],
            my: ["ha"]
        },
    },
    {
        word: "ヒ",
        ipa_pronunciation: ["çi̥"],
        readings: {
            en: ["hi"],
            vn: ["hì"],
            my: ["hi"]
        },
    },
    {
        word: "フ",
        ipa_pronunciation: ["ɸɯᵝ", "fu̥"],
        readings: {
            en: ["fu"],
            vn: ["phu"],
            my: ["fu"]
        },
    },
    {
        word: "ヘ",
        ipa_pronunciation: ["he̞"],
        readings: {
            en: ["he"],
            vn: ["he"],
            my: ["he"]
        },
    },
    {
        word: "ホ",
        ipa_pronunciation: ["ho̞"],
        readings: {
            en: ["ho"],
            vn: ["ho"],
            my: ["ho"]
        },
    },
    {
        word: "マ",
        ipa_pronunciation: ["ma̠"],
        readings: {
            en: ["ma"],
            vn: ["ma"],
            my: ["ma"]
        },
    },
    {
        word: "ミ",
        ipa_pronunciation: ["mi̥"],
        readings: {
            en: ["mi"],
            vn: ["mi"],
            my: ["mi"]
        },
    },
    {
        word: "ム",
        ipa_pronunciation: ["mɯᵝ", "mu̥"],
        readings: {
            en: ["mu"],
            vn: ["mu"],
            my: ["mu"]
        },
    },
    {
        word: "メ",
        ipa_pronunciation: ["me̞"],
        readings: {
            en: ["me"],
            vn: ["me"],
            my: ["me"]
        },
    },
    {
        word: "モ",
        ipa_pronunciation: ["mo̞"],
        readings: {
            en: ["mo"],
            vn: ["mo"],
            my: ["mo"]
        },
    },
    {
        word: "ヤ",
        ipa_pronunciation: ["ja̠"],
        readings: {
            en: ["ya"],
            vn: ["dya"],
            my: ["ya"]
        },
    },
    {
        word: "ユ",
        ipa_pronunciation: ["jɯᵝ", "ju̥"],
        readings: {
            en: ["yu"],
            vn: ["dyu"],
            my: ["yu"]
        },
    },
    {
        word: "ヨ",
        ipa_pronunciation: ["jo̞"],
        readings: {
            en: ["yo"],
            vn: ["dyo"],
            my: ["yo"]
        },
    },
    {
        word: "ラ",
        ipa_pronunciation: ["ɾa̠"],
        readings: {
            en: ["ra"],
            vn: ["la"],
            my: ["ra"]
        },
    },
    {
        word: "リ",
        ipa_pronunciation: ["ɾi̥"],
        readings: {
            en: ["ri"],
            vn: ["li"],
            my: ["ri"]
        },
    },
    {
        word: "ル",
        ipa_pronunciation: ["ɾɯᵝ", "ɾu̥"],
        readings: {
            en: ["ru"],
            vn: ["lu"],
            my: ["ru"]
        },
    },
    {
        word: "レ",
        ipa_pronunciation: ["ɾe̞"],
        readings: {
            en: ["re"],
            vn: ["le"],
            my: ["re"]
        },
    },
    {
        word: "ロ",
        ipa_pronunciation: ["ɾo̞"],
        readings: {
            en: ["ro"],
            vn: ["lo"],
            my: ["ro"]
        },
    },
    {
        word: "ワ",
        ipa_pronunciation: ["ɰa̠"],
        readings: {
            en: ["wa"],
            vn: ["oa"],
            my: ["wa"]
        },
    },
    {
        word: "ヲ",
        ipa_pronunciation: ["o̞"],
        readings: {
            en: ["wo"],
            vn: ["ô"],
            my: ["wo"]
        },
    },
    {
        word: "ン",
        ipa_pronunciation: ["ɴ", "n", "m", "ŋ"],
        readings: {
            en: ["n/m/ng"],
            vn: ["n/m/ng"],
            my: ["n/m/ng"]
        },
    },
    {
        word: "キャ",
        ipa_pronunciation: ["kʲa̠"],
        readings: {
            en: ["kya"],
            vn: ["kyă"],
            my: ["kya"]
        },
    },
    {
        word: "キュ",
        ipa_pronunciation: ["kʲɯᵝ", "kʲu̥"],
        readings: {
            en: ["kyu"],
            vn: ["kyư"],
            my: ["kyu"]
        },
    },
    {
        word: "キョ",
        ipa_pronunciation: ["kʲo̞"],
        readings: {
            en: ["kyo"],
            vn: ["kyô"],
            my: ["kyo"]
        },
    },
    {
        word: "シャ",
        ipa_pronunciation: ["ɕa̠"],
        readings: {
            en: ["sha"],
            vn: ["sá"],
            my: ["sya"]
        },
    },
    {
        word: "シュ",
        ipa_pronunciation: ["ɕɯᵝ", "ɕu̥"],
        readings: {
            en: ["shu"],
            vn: ["su"],
            my: ["shu"]
        },
    },
    {
        word: "ショ",
        ipa_pronunciation: ["ɕo̞"],
        readings: {
            en: ["sho"],
            vn: ["so"],
            my: ["sho"]
        },
    },
    {
        word: "チャ",
        ipa_pronunciation: ["tɕa̠"],
        readings: {
            en: ["cha"],
            vn: ["chà"],
            my: ["cha"]
        },
    },
    {
        word: "チュ",
        ipa_pronunciation: ["tɕɯᵝ", "tɕu̥"],
        readings: {
            en: ["chu"],
            vn: ["chư"],
            my: ["chu"]
        },
    },
    {
        word: "チョ",
        ipa_pronunciation: ["tɕo̞"],
        readings: {
            en: ["cho"],
            vn: ["chô"],
            my: ["cho"]
        },
    },
    {
        word: "ニャ",
        ipa_pronunciation: ["ɲa̠"],
        readings: {
            en: ["nya"],
            vn: ["nhă"],
            my: ["nya"]
        },
    },
    {
        word: "ニュ",
        ipa_pronunciation: ["ɲɯᵝ", "ɲu̥"],
        readings: {
            en: ["nyu"],
            vn: ["như"],
            my: ["nyu"]
        },
    },
    {
        word: "ニョ",
        ipa_pronunciation: ["ɲo̞"],
        readings: {
            en: ["nyo"],
            vn: ["nhô"],
            my: ["nyo"]
        },
    },
    {
        word: "ヒャ",
        ipa_pronunciation: ["ça̠"],
        readings: {
            en: ["hya"],
            vn: ["hia"],
            my: ["hya"]
        },
    },
    {
        word: "ヒュ",
        ipa_pronunciation: ["çɯᵝ", "çu̥"],
        readings: {
            en: ["hyu"],
            vn: ["hiu"],
            my: ["hyu"]
        },
    },
    {
        word: "ヒョ",
        ipa_pronunciation: ["ço̞"],
        readings: {
            en: ["hyo"],
            vn: ["hio"],
            my: ["hyo"]
        },
    },
    {
        word: "ミャ",
        ipa_pronunciation: ["mja̠"],
        readings: {
            en: ["mya"],
            vn: ["mia"],
            my: ["mya"]
        },
    },
    {
        word: "ミュ",
        ipa_pronunciation: ["mjɯᵝ", "mju̥"],
        readings: {
            en: ["myu"],
            vn: ["miu"],
            my: ["myu"]
        },
    },
    {
        word: "ミョ",
        ipa_pronunciation: ["mjo̞"],
        readings: {
            en: ["myo"],
            vn: ["mio"],
            my: ["myo"]
        },
    },
    {
        word: "リャ",
        ipa_pronunciation: ["ɾʲa̠"],
        readings: {
            en: ["rya"],
            vn: ["lia"],
            my: ["rya"]
        },
    },
    {
        word: "リュ",
        ipa_pronunciation: ["ɾʲɯᵝ", "ɾʲu̥"],
        readings: {
            en: ["ryu"],
            vn: ["liu"],
            my: ["ryu"]
        },
    },
    {
        word: "リョ",
        ipa_pronunciation: ["ɾʲo̞"],
        readings: {
            en: ["ryo"],
            vn: ["lio"],
            my: ["ryo"]
        },
    },
    {
        word: "ギャ",
        ipa_pronunciation: ["ɡʲa̠"],
        readings: {
            en: ["gya"],
            vn: ["gia"],
            my: ["gya"]
        },
    },
    {
        word: "ギュ",
        ipa_pronunciation: ["ɡʲɯᵝ", "ɡʲu̥"],
        readings: {
            en: ["gyu"],
            vn: ["giu"],
            my: ["gyu"]
        },
    },
    {
        word: "ギョ",
        ipa_pronunciation: ["ɡʲo̞"],
        readings: {
            en: ["gyo"],
            vn: ["gio"],
            my: ["gyo"]
        },
    },
    {
        word: "ジャ",
        ipa_pronunciation: ["ʑa̠"],
        readings: {
            en: ["ja"],
            vn: ["dza"],
            my: ["ja"]
        },
    },
    {
        word: "ジュ",
        ipa_pronunciation: ["ʑɯᵝ", "ʑu̥"],
        readings: {
            en: ["ju"],
            vn: ["dzư"],
            my: ["ju"]
        },
    },
    {
        word: "ジョ",
        ipa_pronunciation: ["ʑo̞"],
        readings: {
            en: ["jo"],
            vn: ["dzo"],
            my: ["jo"]
        },
    },
    {
        word: "ビャ",
        ipa_pronunciation: ["bʲa̠"],
        readings: {
            en: ["bya"],
            vn: ["bia"],
            my: ["bya"]
        },
    },
    {
        word: "ビュ",
        ipa_pronunciation: ["bʲɯᵝ", "bʲu̥"],
        readings: {
            en: ["byu"],
            vn: ["biu"],
            my: ["byu"]
        },
    },
    {
        word: "ビョ",
        ipa_pronunciation: ["bʲo̞"],
        readings: {
            en: ["byo"],
            vn: ["bio"],
            my: ["byo"]
        },
    },
    {
        word: "ピャ",
        ipa_pronunciation: ["pʲa̠"],
        readings: {
            en: ["pya"],
            vn: ["pia"],
            my: ["pya"]
        },
    },
    {
        word: "ピュ",
        ipa_pronunciation: ["pʲɯᵝ", "pʲu̥"],
        readings: {
            en: ["pyu"],
            vn: ["piu"],
            my: ["pyu"]
        },
    },
    {
        word: "ピョ",
        ipa_pronunciation: ["pʲo̞"],
        readings: {
            en: ["pyo"],
            vn: ["pio"],
            my: ["pyo"]
        },
    }
];

// Note: The above list includes all basic Hiragana and Katakana characters.
