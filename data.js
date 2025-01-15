const data = [
    // Hiragana
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

    // Katakana
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
    }
];

// Note: The above list includes all basic Hiragana and Katakana characters.