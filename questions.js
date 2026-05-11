const worldGeographyQuestions = [
    // Southwest Asia & North Africa - Environmental Adaptation & Resources
    {
        id: 1,
        question: "What is desalination?",
        type: "typing",
        correctAnswers: ["desalination", "a process that turns salt water into fresh water"],
        difficulty: "easy",
        topic: "Southwest Asia & North Africa - Environmental Adaptation"
    },
    {
        id: 2,
        question: "What are the two biggest causes of tension in Southwest Asia regarding resources?",
        type: "typing",
        correctAnswers: ["fresh water and oil", "water and oil"],
        difficulty: "medium",
        topic: "Southwest Asia & North Africa - Resources"
    },
    {
        id: 3,
        question: "Which countries have vast oil reserves in Southwest Asia?",
        type: "typing",
        correctAnswers: ["saudi arabia and kuwait", "saudi arabia", "kuwait"],
        difficulty: "medium",
        topic: "Southwest Asia & North Africa - Resources"
    },
    {
        id: 4,
        question: "What major movement spread rapidly through social media in the Arab world during the early 2010s?",
        type: "typing",
        correctAnswers: ["the arab spring", "arab spring"],
        difficulty: "medium",
        topic: "Southwest Asia & North Africa - Political Change"
    },
    {
        id: 5,
        question: "In 2018, Saudi Arabia lifted the ban on women doing what?",
        type: "typing",
        correctAnswers: ["driving", "women driving"],
        difficulty: "easy",
        topic: "Southwest Asia & North Africa - Social Change"
    },
    {
        id: 6,
        question: "What type of government does Iran have?",
        type: "typing",
        correctAnswers: ["theocracy", "theocracies"],
        difficulty: "medium",
        topic: "Southwest Asia & North Africa - Political Geography"
    },
    {
        id: 7,
        question: "Which city is a sacred space for Judaism, Christianity, and Islam?",
        type: "typing",
        correctAnswers: ["jerusalem"],
        difficulty: "easy",
        topic: "Southwest Asia & North Africa - Religion & Culture"
    },
    {
        id: 8,
        question: "What common language do most people in North Africa and Southwest Asia share?",
        type: "typing",
        correctAnswers: ["arabic", "the arabic language"],
        difficulty: "easy",
        topic: "Southwest Asia & North Africa - Religion & Culture"
    },

    // Sub-Saharan Africa - History & Political Geography
    {
        id: 9,
        question: "What was the Berlin Conference of 1884?",
        type: "typing",
        correctAnswers: ["european powers divided africa into colonies", "european division of africa"],
        difficulty: "medium",
        topic: "Sub-Saharan Africa - History"
    },
    {
        id: 10,
        question: "What was apartheid in South Africa?",
        type: "typing",
        correctAnswers: ["a system of racial segregation", "racial segregation"],
        difficulty: "medium",
        topic: "Sub-Saharan Africa - History"
    },
    {
        id: 11,
        question: "Who spent 27 years in prison and became South Africa's first Black president?",
        type: "typing",
        correctAnswers: ["nelson mandela"],
        difficulty: "easy",
        topic: "Sub-Saharan Africa - History"
    },
    {
        id: 12,
        question: "What movement ended apartheid and gave all citizens the right to vote?",
        type: "typing",
        correctAnswers: ["universal suffrage"],
        difficulty: "medium",
        topic: "Sub-Saharan Africa - History"
    },

    // Sub-Saharan Africa - Economic Development
    {
        id: 13,
        question: "What do many African women start to support their families?",
        type: "typing",
        correctAnswers: ["small businesses", "micro-businesses", "microenterprises"],
        difficulty: "medium",
        topic: "Sub-Saharan Africa - Economic Development"
    },
    {
        id: 14,
        question: "What type of economic activities does much of Africa rely on?",
        type: "typing",
        correctAnswers: ["primary industries", "extracting raw materials"],
        difficulty: "medium",
        topic: "Sub-Saharan Africa - Economic Development"
    },

    // Sub-Saharan Africa - Environmental Issues
    {
        id: 15,
        question: "What is the Sahel?",
        type: "typing",
        correctAnswers: ["the dry grassland south of the sahara", "dry grassland"],
        difficulty: "easy",
        topic: "Sub-Saharan Africa - Environmental Issues"
    },
    {
        id: 16,
        question: "What causes desertification in Sub-Saharan Africa?",
        type: "typing",
        correctAnswers: ["overgrazing, drought, and deforestation", "overgrazing", "drought", "deforestation"],
        difficulty: "medium",
        topic: "Sub-Saharan Africa - Environmental Issues"
    },

    // South Asia - Society & Religion
    {
        id: 17,
        question: "What is the caste system in Hinduism?",
        type: "typing",
        correctAnswers: ["a social hierarchy", "social hierarchy"],
        difficulty: "medium",
        topic: "South Asia - Society & Religion"
    },
    {
        id: 18,
        question: "By what year was India's population nearing 1 billion?",
        type: "typing",
        correctAnswers: ["1994"],
        difficulty: "easy",
        topic: "South Asia - Society & Religion"
    },
    {
        id: 19,
        question: "What is the most sacred river to Hindus?",
        type: "typing",
        correctAnswers: ["ganges", "ganges river", "the ganges"],
        difficulty: "easy",
        topic: "South Asia - Society & Religion"
    },

    // South Asia - Physical Geography & Climate
    {
        id: 20,
        question: "What bring heavy rain from the Indian Ocean to South Asia?",
        type: "typing",
        correctAnswers: ["summer monsoons", "monsoons"],
        difficulty: "medium",
        topic: "South Asia - Physical Geography & Climate"
    },
    {
        id: 21,
        question: "What are the two major rivers of India?",
        type: "typing",
        correctAnswers: ["ganges and brahmaputra", "ganges", "brahmaputra"],
        difficulty: "medium",
        topic: "South Asia - Physical Geography & Climate"
    },

    // South Asia - Regional Comparison
    {
        id: 22,
        question: "What type of government does India have?",
        type: "typing",
        correctAnswers: ["secular democracy", "democracy"],
        difficulty: "medium",
        topic: "South Asia - Regional Comparison"
    },
    {
        id: 23,
        question: "What challenges does Pakistan face that India does not?",
        type: "typing",
        correctAnswers: ["weak governance and political instability", "weak governance", "political instability"],
        difficulty: "medium",
        topic: "South Asia - Regional Comparison"
    },

    // Southeast Asia & Oceania - Natural Hazards
    {
        id: 24,
        question: "What is the Ring of Fire in Southeast Asia?",
        type: "typing",
        correctAnswers: ["an area with frequent tectonic activity", "tectonic activity area"],
        difficulty: "medium",
        topic: "Southeast Asia & Oceania - Natural Hazards"
    },
    {
        id: 25,
        question: "What natural disasters are common in Southeast Asia due to the Ring of Fire?",
        type: "typing",
        correctAnswers: ["tsunamis, earthquakes, and volcanoes", "tsunamis", "earthquakes", "volcanoes"],
        difficulty: "medium",
        topic: "Southeast Asia & Oceania - Natural Hazards"
    },
    {
        id: 26,
        question: "What makes national unity difficult in countries like Indonesia and the Philippines?",
        type: "typing",
        correctAnswers: ["thousands of islands", "archipelagos"],
        difficulty: "medium",
        topic: "Southeast Asia & Oceania - Natural Hazards"
    },

    // Southeast Asia & Oceania - Global Economy
    {
        id: 27,
        question: "Why do companies move Back Office jobs to Southeast Asia?",
        type: "typing",
        correctAnswers: ["low labor costs and high english speakers", "low labor costs", "english speakers"],
        difficulty: "medium",
        topic: "Southeast Asia & Oceania - Global Economy"
    },
    {
        id: 28,
        question: "What has industrialization in Tiger Economies increased along with living standards?",
        type: "typing",
        correctAnswers: ["pollution"],
        difficulty: "medium",
        topic: "Southeast Asia & Oceania - Global Economy"
    },

    // Critical Skills & Vocabulary - Population Pyramids
    {
        id: 29,
        question: "What does a Wide Base population pyramid indicate?",
        type: "typing",
        correctAnswers: ["high birth rates and high death rates", "developing nation", "young population"],
        difficulty: "medium",
        topic: "Critical Skills & Vocabulary - Population Pyramids"
    },
    {
        id: 30,
        question: "What does a Narrow Base/Top Heavy population pyramid indicate?",
        type: "typing",
        correctAnswers: ["low birth rates and aging population", "developed nation", "japan"],
        difficulty: "medium",
        topic: "Critical Skills & Vocabulary - Population Pyramids"
    },

    // Critical Skills & Vocabulary - Key Terms
    {
        id: 31,
        question: "What is arable land?",
        type: "typing",
        correctAnswers: ["land you can farm on", "farmable land"],
        difficulty: "easy",
        topic: "Critical Skills & Vocabulary - Key Terms"
    },
    {
        id: 32,
        question: "What is a refugee?",
        type: "typing",
        correctAnswers: ["someone fleeing war or famine", "someone fleeing danger"],
        difficulty: "easy",
        topic: "Critical Skills & Vocabulary - Key Terms"
    },
    {
        id: 33,
        question: "What is globalization?",
        type: "typing",
        correctAnswers: ["countries becoming more connected through trade and technology", "countries connected through trade"],
        difficulty: "medium",
        topic: "Critical Skills & Vocabulary - Key Terms"
    },
    {
        id: 34,
        question: "What is subsistence farming?",
        type: "typing",
        correctAnswers: ["growing only what you need to survive", "farming for survival"],
        difficulty: "medium",
        topic: "Critical Skills & Vocabulary - Key Terms"
    },
    {
        id: 35,
        question: "What is a cottage industry?",
        type: "typing",
        correctAnswers: ["a business run out of a person's home", "home business"],
        difficulty: "medium",
        topic: "Critical Skills & Vocabulary - Key Terms"
    }
];