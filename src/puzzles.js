// Letter Griddle Buffet - Daily Puzzles
// 43 puzzles in rotation
// Puzzle changes at 8 PM EST daily

const puzzles = [
  // Puzzle 1 - FRIENDSHIP
  {
    category: "FRIENDSHIP",
    puzzleNumber: 1,
    amuseBouche: { word: "PAL", hint: "A close buddy or companion", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BOND", hint: "A close connection between people", revealedIndex: 0 },
        { word: "TRUST", hint: "Firm belief in someone's reliability", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CARING", hint: "Showing kindness and concern for others", revealedIndex: 3 },
        { word: "LOYALTY", hint: "Faithful commitment to a friend", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COMPANION", hint: "Someone who accompanies you through life", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 2 - PIZZA, PIZZA!
  {
    category: "PIZZA, PIZZA!",
    puzzleNumber: 2,
    amuseBouche: { word: "PIE", hint: "Slang term for a whole pizza", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MEAT", hint: "A savory protein topping category for pizza", revealedIndex: 0 },
        { word: "SAUCE", hint: "Tomato-based spread that goes on the dough", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TOMATO", hint: "Red fruit used as the base for pizza sauce", revealedIndex: 3 },
        { word: "SAUSAGE", hint: "Spiced ground meat topping, often Italian-style", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MUSHROOM", hint: "Earthy fungus that's a popular vegetable topping", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 3 - ART PROJECTS
  {
    category: "ART PROJECTS",
    puzzleNumber: 3,
    amuseBouche: { word: "INK", hint: "Colored liquid used for drawing and printing", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DRAW", hint: "Create pictures with pencil or pen", revealedIndex: 0 },
        { word: "PAINT", hint: "Apply color to a surface with a brush", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SKETCH", hint: "A rough, quick drawing", revealedIndex: 3 },
        { word: "COLLAGE", hint: "Art made by gluing various materials together", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SCULPTURE", hint: "Three-dimensional art carved or molded", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 4 - CANDY
  {
    category: "CANDY",
    puzzleNumber: 4,
    amuseBouche: { word: "GUM", hint: "Chewy treat you shouldn't swallow", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MINT", hint: "A refreshing flavored candy often used after dinner", revealedIndex: 0 },
        { word: "TAFFY", hint: "A chewy candy often sold at boardwalks and beaches", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GUMMY", hint: "Soft, chewy candy often shaped like bears or worms", revealedIndex: 3 },
        { word: "LOLLIPOP", hint: "Hard candy on a stick, a classic carnival treat", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHOCOLATE", hint: "Sweet treat made from cacao beans, enjoyed worldwide", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 5 - MUSIC STORAGE
  {
    category: "MUSIC STORAGE",
    puzzleNumber: 5,
    amuseBouche: { word: "MIX", hint: "A compilation of songs, often on a tape for a friend", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DISK", hint: "A circular storage medium for music, like CDs or vinyl", revealedIndex: 0 },
        { word: "TRACK", hint: "An individual song on an album or recording", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RECORD", hint: "A vinyl disc that plays music when spun on a turntable", revealedIndex: 3 },
        { word: "NAPSTER", hint: "Revolutionary file-sharing service that changed music distribution", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CASSETTE", hint: "Magnetic tape format popular in the 1980s and 90s", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 6 - AUTUMN
  {
    category: "AUTUMN",
    puzzleNumber: 6,
    amuseBouche: { word: "OAK", hint: "Tree known for dropping acorns", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LEAF", hint: "Tree foliage that changes color and falls in this season", revealedIndex: 0 },
        { word: "APPLE", hint: "Round fruit often picked at orchards in fall", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PUMPKIN", hint: "Large orange gourd carved for Halloween", revealedIndex: 3 },
        { word: "HARVEST", hint: "The gathering of crops at the end of the growing season", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SWEATER", hint: "Cozy knitted clothing worn when temperatures drop", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 7 - MUSICALS
  {
    category: "MUSICALS",
    puzzleNumber: 7,
    amuseBouche: { word: "WIZ", hint: "Broadway show featuring Dorothy and friends", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CATS", hint: "Andrew Lloyd Webber show about felines", revealedIndex: 0 },
        { word: "ANNIE", hint: "Red-haired orphan's Broadway story", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GREASE", hint: "Musical set in a 1950s high school", revealedIndex: 3 },
        { word: "CHICAGO", hint: "Jazz-age musical about crime and corruption", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HAMILTON", hint: "Hip-hop musical about a founding father", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 8 - COOL WEATHER CLOTHING
  {
    category: "COOL WEATHER CLOTHING",
    puzzleNumber: 8,
    amuseBouche: { word: "HAT", hint: "Head covering for warmth", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COAT", hint: "Outer garment worn for warmth", revealedIndex: 0 },
        { word: "SCARF", hint: "Fabric wrapped around the neck", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLEECE", hint: "Soft, warm synthetic fabric", revealedIndex: 3 },
        { word: "MITTENS", hint: "Hand coverings with one thumb compartment", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CARDIGAN", hint: "Button-front sweater named after a British earl", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 9 - HIKING
  {
    category: "HIKING",
    puzzleNumber: 9,
    amuseBouche: { word: "MAP", hint: "Paper guide showing trails and terrain", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BOOT", hint: "Sturdy footwear essential for trail walking", revealedIndex: 0 },
        { word: "TRAIL", hint: "A marked path through nature for walking", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUMMIT", hint: "The highest point of a mountain", revealedIndex: 3 },
        { word: "COMPASS", hint: "Navigation tool that points north", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BACKPACK", hint: "Bag worn on shoulders to carry supplies", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 10 - JIM HENSON'S MUPPETS
  {
    category: "JIM HENSON'S MUPPETS",
    puzzleNumber: 10,
    amuseBouche: { word: "JIM", hint: "First name of the Muppets creator", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ELMO", hint: "Furry red monster who loves being tickled", revealedIndex: 0 },
        { word: "OSCAR", hint: "Grouchy green monster who lives in a trash can", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "KERMIT", hint: "Famous green frog and Muppet leader", revealedIndex: 3 },
        { word: "GROVER", hint: "Blue monster known for Super Grover", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BIGBIRD", hint: "Tall yellow feathered friend on Sesame Street", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 11 - WHAT'S IN THE BAG?
  {
    category: "WHAT'S IN THE BAG?",
    puzzleNumber: 11,
    amuseBouche: { word: "GUM", hint: "Chewing item often found at the bottom", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "KEYS", hint: "Metal items that unlock doors", revealedIndex: 0 },
        { word: "PHONE", hint: "Device for calls and texts", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WALLET", hint: "Holds your cash and cards", revealedIndex: 3 },
        { word: "TISSUES", hint: "Soft paper for sneezes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LIPSTICK", hint: "Cosmetic for coloring lips", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 12 - FOOTBALL
  {
    category: "FOOTBALL",
    puzzleNumber: 12,
    amuseBouche: { word: "RUN", hint: "Carrying the ball down the field", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PASS", hint: "Throwing the ball to a teammate", revealedIndex: 0 },
        { word: "CATCH", hint: "Receiving a thrown ball", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TACKLE", hint: "Bringing down the ball carrier", revealedIndex: 3 },
        { word: "HUDDLE", hint: "Team gathering to plan the next play", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TOUCHDOWN", hint: "Scoring play worth six points", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 13 - FRUITS
  {
    category: "FRUITS",
    puzzleNumber: 13,
    amuseBouche: { word: "FIG", hint: "Sweet fruit often dried or in cookies", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PEAR", hint: "Bell-shaped fruit with sweet flesh", revealedIndex: 0 },
        { word: "GRAPE", hint: "Small round fruit that grows in clusters", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ORANGE", hint: "Citrus fruit with a peel", revealedIndex: 3 },
        { word: "BANANA", hint: "Yellow curved tropical fruit", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PINEAPPLE", hint: "Tropical fruit with spiky skin", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 14 - FAVORITE BOOKSHOP
  {
    category: "FAVORITE BOOKSHOP",
    puzzleNumber: 14,
    amuseBouche: { word: "INK", hint: "What fills the pages with words", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "READ", hint: "What you do with a good book", revealedIndex: 0 },
        { word: "NOVEL", hint: "A long fictional story", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "AUTHOR", hint: "The person who writes the book", revealedIndex: 3 },
        { word: "CHAPTER", hint: "A section of a book", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BOOKMARK", hint: "Saves your place in a book", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 15 - INTERNATIONAL FOODS
  {
    category: "INTERNATIONAL FOODS",
    puzzleNumber: 15,
    amuseBouche: { word: "PHO", hint: "Vietnamese noodle soup", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TACO", hint: "Mexican folded tortilla dish", revealedIndex: 0 },
        { word: "SUSHI", hint: "Japanese rice and fish dish", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PAELLA", hint: "Spanish saffron rice dish", revealedIndex: 3 },
        { word: "PIEROGI", hint: "Polish filled dumplings", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CROISSANT", hint: "Flaky French pastry", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 16 - IT'S A MYSTERY!
  {
    category: "IT'S A MYSTERY!",
    puzzleNumber: 16,
    amuseBouche: { word: "SPY", hint: "Secret agent gathering information", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CLUE", hint: "Evidence that helps solve the case", revealedIndex: 0 },
        { word: "ALIBI", hint: "Proof you were somewhere else", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SLEUTH", hint: "A detective or investigator", revealedIndex: 3 },
        { word: "SUSPECT", hint: "Person thought to have committed a crime", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DETECTIVE", hint: "Professional mystery solver", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 17 - SCHOOL DAYS
  {
    category: "SCHOOL DAYS",
    puzzleNumber: 17,
    amuseBouche: { word: "GYM", hint: "Class for physical education and exercise", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DESK", hint: "Furniture where students sit and work", revealedIndex: 0 },
        { word: "LUNCH", hint: "Midday meal eaten in the cafeteria", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RECESS", hint: "Break time for outdoor play", revealedIndex: 3 },
        { word: "SCIENCE", hint: "Subject exploring how the world works", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TEXTBOOK", hint: "Educational book used for studying", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 18 - GAMES
  {
    category: "GAMES",
    puzzleNumber: 18,
    amuseBouche: { word: "TAG", hint: "Chasing game where you're 'it'", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DICE", hint: "Cubes with dots rolled for luck", revealedIndex: 0 },
        { word: "CHESS", hint: "Strategy game with kings and queens", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PUZZLE", hint: "Pieces that fit together to make a picture", revealedIndex: 3 },
        { word: "CHECKERS", hint: "Game with red and black pieces", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MONOPOLY", hint: "Board game about buying property", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 19 - MOVIE TITLES
  {
    category: "MOVIE TITLES",
    puzzleNumber: 19,
    amuseBouche: { word: "HER", hint: "2013 Spike Jonze film about a man who falls in love with an AI", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JAWS", hint: "1975 Spielberg thriller about a great white shark", revealedIndex: 0 },
        { word: "ALIEN", hint: "1979 sci-fi horror with Sigourney Weaver", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FROZEN", hint: "Disney film featuring Elsa and Anna", revealedIndex: 3 },
        { word: "TITANIC", hint: "Epic romance on a doomed ship", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GLADIATOR", hint: "Russell Crowe fights in ancient Rome", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 20 - DESSERTS
  {
    category: "DESSERTS",
    puzzleNumber: 20,
    amuseBouche: { word: "PIE", hint: "Classic dessert with a crust", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TART", hint: "A pastry with fruit filling and no top crust", revealedIndex: 0 },
        { word: "FUDGE", hint: "Rich, creamy chocolate confection", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUNDAE", hint: "Ice cream topped with sauce and a cherry", revealedIndex: 3 },
        { word: "BROWNIE", hint: "Dense, chocolate baked square", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHEESECAKE", hint: "Creamy dessert with graham cracker crust", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 21 - CITIES AROUND THE WORLD
  {
    category: "CITIES AROUND THE WORLD",
    puzzleNumber: 21,
    amuseBouche: { word: "RIO", hint: "Brazilian city famous for Carnival", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ROME", hint: "Italian capital with ancient ruins", revealedIndex: 0 },
        { word: "TOKYO", hint: "Japan's bustling capital city", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LONDON", hint: "Home of Big Ben and Buckingham Palace", revealedIndex: 3 },
        { word: "SEATTLE", hint: "Pacific Northwest city with the Space Needle", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BARCELONA", hint: "Spanish city known for Gaudí architecture", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 22 - SPORTS
  {
    category: "SPORTS",
    puzzleNumber: 22,
    amuseBouche: { word: "SKI", hint: "Gliding down snowy mountains", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GOLF", hint: "Sport played on courses with clubs and balls", revealedIndex: 0 },
        { word: "TRACK", hint: "Running events on an oval course", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SOCCER", hint: "World's most popular sport with a round ball", revealedIndex: 3 },
        { word: "TENNIS", hint: "Racket sport played on a court with a net", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BASKETBALL", hint: "Sport where players shoot through a hoop", revealedIndex: 5 }
      ]}
    ]
  },
  /// Puzzle 23 - COLORS
  {
    category: "COLORS",
    puzzleNumber: 23,
    amuseBouche: { word: "RED", hint: "The color of fire trucks and stop signs", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BLUE", hint: "The color of a clear sky on a sunny day", revealedIndex: 0 },
        { word: "BEIGE", hint: "A neutral sandy or tan shade often used in interior design", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "INDIGO", hint: "A deep purple-blue color between blue and violet in the rainbow", revealedIndex: 3 },
        { word: "EMERALD", hint: "A rich green color named after a precious gemstone", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BURGUNDY", hint: "A deep reddish-purple wine color named after a French region", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 24 - GAME NIGHT
  {
    category: "GAME NIGHT",
    puzzleNumber: 24,
    amuseBouche: { word: "BET", hint: "Wager placed during a card game", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DEAL", hint: "Distribute cards to players", revealedIndex: 0 },
        { word: "BOARD", hint: "Flat surface for playing tabletop games", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TRIVIA", hint: "Game testing knowledge with questions", revealedIndex: 3 },
        { word: "CHARADES", hint: "Acting game without speaking", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SCRABBLE", hint: "Word game with letter tiles", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 25 - VIDEO GAMES
  {
    category: "VIDEO GAMES",
    puzzleNumber: 25,
    amuseBouche: { word: "WII", hint: "Nintendo console known for motion controls", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PONG", hint: "Classic table tennis video game from the 1970s", revealedIndex: 0 },
        { word: "ATARI", hint: "Iconic gaming company that pioneered home consoles", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ARCADE", hint: "Entertainment venue with coin-operated games", revealedIndex: 3 },
        { word: "CONSOLE", hint: "Home gaming device that connects to a TV", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "JOYSTICK", hint: "Hand-held controller for navigating games", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 26 - FIREPLACE (NEW)
  {
    category: "FIREPLACE",
    puzzleNumber: 26,
    amuseBouche: { word: "LOG", hint: "Wood fuel for the fire", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WARM", hint: "The cozy feeling you get sitting by a fire", revealedIndex: 0 },
        { word: "STORY", hint: "A tale shared aloud while gathered together", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TOASTY", hint: "Comfortably hot, like bread by the fire", revealedIndex: 2 },
        { word: "MANTLE", hint: "The shelf above a fireplace for displaying photos", revealedIndex: 3 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COMFORT", hint: "A feeling of ease and contentment at home", revealedIndex: 1 }
      ]}
    ]
  },
  // Puzzle 27 - GAMESHOW (NEW)
  {
    category: "GAMESHOW",
    puzzleNumber: 27,
    amuseBouche: { word: "WIN", hint: "What every contestant hopes to do", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CASH", hint: "Money in bills or coins, often a grand prize", revealedIndex: 0 },
        { word: "PRIZE", hint: "Something won in a game or competition", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ANSWER", hint: "What you give when a question is asked", revealedIndex: 3 },
        { word: "CONTEST", hint: "A competition where people try to win", revealedIndex: 3 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SHOWDOWN", hint: "A final face-off to determine the winner", revealedIndex: 2 }
      ]}
    ]
  },
  // Puzzle 28 - AIRTIME (NEW)
  {
    category: "AIRTIME",
    puzzleNumber: 28,
    amuseBouche: { word: "FLY", hint: "To move through the air", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOAR", hint: "To fly high without flapping wings", revealedIndex: 0 },
        { word: "GLIDE", hint: "To move smoothly through the air with little effort", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CRUISE", hint: "To travel at a steady, comfortable speed", revealedIndex: 2 },
        { word: "TAKEOFF", hint: "The moment a plane leaves the ground", revealedIndex: 3 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NAVIGATE", hint: "To find your way and steer a course", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 29 - AIRPORT (NEW)
  {
    category: "AIRPORT",
    puzzleNumber: 29,
    amuseBouche: { word: "JET", hint: "A fast airplane powered by turbine engines", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PASS", hint: "A boarding document that lets you on the plane", revealedIndex: 0 },
        { word: "PILOT", hint: "The person who flies the aircraft", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLIGHT", hint: "A journey through the air from one place to another", revealedIndex: 2 },
        { word: "AIRLINE", hint: "A company that operates commercial planes", revealedIndex: 3 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "AIRCRAFT", hint: "A vehicle designed to fly through the sky", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 30 - CHEESE (NEW)
  {
    category: "CHEESE",
    puzzleNumber: 30,
    amuseBouche: { word: "AGE", hint: "Process that develops flavor in fine cheeses", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BRIE", hint: "Soft French cheese with an edible white rind", revealedIndex: 0 },
        { word: "SWISS", hint: "Cheese known for its signature holes", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ASIAGO", hint: "Italian cheese often grated over pasta and salads", revealedIndex: 2 },
        { word: "CHEDDAR", hint: "Popular orange or white cheese originally from England", revealedIndex: 3 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MUENSTER", hint: "Mild cheese with an orange rind, great for melting", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 31 - LUNCH (NEW)
  {
    category: "LUNCH",
    puzzleNumber: 31,
    amuseBouche: { word: "BLT", hint: "Classic bacon, lettuce, and tomato sandwich", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOUP", hint: "A warm liquid dish often served in a bowl with a spoon", revealedIndex: 0 },
        { word: "SALAD", hint: "A mix of leafy greens and vegetables, often with dressing", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MIDDAY", hint: "The time of day when lunch is typically eaten", revealedIndex: 2 },
        { word: "POTLUCK", hint: "A meal where everyone brings a dish to share", revealedIndex: 3 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SANDWICH", hint: "Fillings placed between two slices of bread", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 32 - SPICES (NEW)
  {
    category: "SPICES",
    puzzleNumber: 32,
    amuseBouche: { word: "BAY", hint: "Aromatic leaf used in soups and stews", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SALT", hint: "Essential seasoning that enhances flavor in almost every dish", revealedIndex: 0 },
        { word: "THYME", hint: "Fragrant herb with tiny leaves, often used in soups and roasts", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PEPPER", hint: "Common table seasoning that adds a bit of heat and kick", revealedIndex: 3 },
        { word: "PAPRIKA", hint: "Red powder made from dried peppers, popular in Hungarian cuisine", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ROSEMARY", hint: "Aromatic herb with needle-like leaves, perfect with lamb and potatoes", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 33 - KITCHEN (NEW)
  {
    category: "KITCHEN",
    puzzleNumber: 33,
    amuseBouche: { word: "POT", hint: "Cooking vessel for boiling and simmering", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SINK", hint: "Basin with a faucet where you wash dishes and rinse food", revealedIndex: 0 },
        { word: "STOVE", hint: "Appliance with burners used for cooking food in pots and pans", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RECIPE", hint: "Written instructions that tell you how to prepare a dish", revealedIndex: 3 },
        { word: "CUPBOARD", hint: "Cabinet where you store dishes, glasses, and dry goods", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COOKWARE", hint: "Pots, pans, and other equipment used for preparing meals", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 34 - PANCAKES (NEW)
  {
    category: "PANCAKES",
    puzzleNumber: 34,
    amuseBouche: { word: "MIX", hint: "What you stir up to make batter", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "EGGS", hint: "Ingredient that helps bind the batter together", revealedIndex: 0 },
        { word: "FLOUR", hint: "The main dry ingredient that gives pancakes their structure", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SYRUP", hint: "Sweet, sticky topping poured generously over a stack", revealedIndex: 3 },
        { word: "GRIDDLE", hint: "Flat cooking surface used to make golden-brown pancakes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HOMEMADE", hint: "Made from scratch in your own kitchen, not from a box", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 35 - SOUP (NEW)
  {
    category: "SOUP",
    puzzleNumber: 35,
    amuseBouche: { word: "PHO", hint: "Vietnamese noodle soup with fragrant broth", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TACO", hint: "Tex-Mex soup topped with tortilla strips, cheese, and avocado", revealedIndex: 0 },
        { word: "BROTH", hint: "Clear, savory liquid made by simmering meat or vegetables", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BISQUE", hint: "Creamy, rich soup often made with shellfish like lobster or crab", revealedIndex: 3 },
        { word: "CHOWDER", hint: "Thick, chunky soup typically made with potatoes and clams", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BOUILLON", hint: "Concentrated stock used as a base for soups and sauces", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 36 - PASTA (NEW)
  {
    category: "PASTA",
    puzzleNumber: 36,
    amuseBouche: { word: "BOW", hint: "Tie-shaped pasta, also called farfalle", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ZITI", hint: "Tube-shaped pasta often baked with cheese and marinara sauce", revealedIndex: 0 },
        { word: "PENNE", hint: "Cylinder pasta cut at an angle, perfect for holding chunky sauces", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SKETTY", hint: "Playful nickname for spaghetti, often used by kids", revealedIndex: 3 },
        { word: "GNOCCHI", hint: "Soft, pillowy Italian dumplings made from potatoes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MACARONI", hint: "Curved elbow-shaped pasta famous in a cheesy American dish", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 37 - BREAKFAST (NEW)
  {
    category: "BREAKFAST",
    puzzleNumber: 37,
    amuseBouche: { word: "EGG", hint: "Versatile morning staple, scrambled or fried", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MEAL", hint: "The first food you eat to start your day", revealedIndex: 0 },
        { word: "BACON", hint: "Crispy strips of cured pork, a breakfast favorite", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CEREAL", hint: "Crunchy grains served in a bowl with milk", revealedIndex: 3 },
        { word: "PANCAKE", hint: "Flat, round cake cooked on a griddle and stacked high", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PORRIDGE", hint: "Warm, creamy dish made by boiling oats or grains", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 38 - COOKING (NEW)
  {
    category: "COOKING",
    puzzleNumber: 38,
    amuseBouche: { word: "FRY", hint: "To cook food in hot oil", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CHOP", hint: "To cut food into smaller pieces with a knife", revealedIndex: 0 },
        { word: "WHISK", hint: "To beat ingredients quickly with a wire tool to blend or add air", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SEARED", hint: "Cooked at high heat to create a flavorful brown crust", revealedIndex: 3 },
        { word: "PREHEAT", hint: "To warm up the oven to the right temperature before baking", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MEASURED", hint: "Carefully portioned out using cups or spoons for accuracy", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 39 - BUFFET (NEW)
  {
    category: "BUFFET",
    puzzleNumber: 39,
    amuseBouche: { word: "DIP", hint: "Creamy or chunky spread for chips and veggies", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FARE", hint: "Food or meals, especially the type served at an event", revealedIndex: 0 },
        { word: "FEAST", hint: "A large, celebratory meal shared with many people", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PICNIC", hint: "An outdoor meal where everyone brings food to share", revealedIndex: 3 },
        { word: "POTLUCK", hint: "A gathering where each guest contributes a dish", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FAVORITE", hint: "The dish everyone hopes someone will bring again", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 40 - BRUNCH (NEW)
  {
    category: "BRUNCH",
    puzzleNumber: 40,
    amuseBouche: { word: "JAM", hint: "Fruity spread for toast and scones", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COZY", hint: "A warm, comfortable feeling perfect for a lazy morning meal", revealedIndex: 0 },
        { word: "TOAST", hint: "Crispy browned bread, often topped with avocado or jam", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "QUICHE", hint: "Savory egg pie with cheese and fillings baked in a crust", revealedIndex: 3 },
        { word: "WEEKEND", hint: "The days when brunch is most popular, Saturday and Sunday", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PASTRIES", hint: "Flaky baked treats like croissants, danishes, and muffins", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 41 - DINNER (NEW)
  {
    category: "DINNER",
    puzzleNumber: 41,
    amuseBouche: { word: "EAT", hint: "What we gather to do at the evening table", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DINE", hint: "To eat a meal, especially in a formal or elegant setting", revealedIndex: 0 },
        { word: "FEAST", hint: "A large, elaborate meal celebrating a special occasion", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUPPER", hint: "An evening meal, often lighter or more casual than dinner", revealedIndex: 3 },
        { word: "DESSERT", hint: "The sweet course served at the end of a meal", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BEVERAGE", hint: "Any drink, from water to wine to coffee", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 42 - CEREAL (NEW)
  {
    category: "CEREAL",
    puzzleNumber: 42,
    amuseBouche: { word: "RYE", hint: "Hardy grain used in bread and whiskey", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OATS", hint: "A hearty grain often eaten as oatmeal or in granola", revealedIndex: 0 },
        { word: "WHEAT", hint: "A golden grain used to make bread and pasta", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BARLEY", hint: "An ancient grain used in soups, stews, and brewing beer", revealedIndex: 3 },
        { word: "FROSTED", hint: "Coated with a sweet, sugary glaze on breakfast flakes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CINNAMON", hint: "A warm, sweet spice that flavors many breakfast cereals", revealedIndex: 4 }
      ]}
    ]
  },
  // Puzzle 43 - WATER (NEW)
  {
    category: "WATER",
    puzzleNumber: 43,
    amuseBouche: { word: "DEW", hint: "Morning droplets that form on grass and leaves", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLOW", hint: "To move steadily and continuously in a current", revealedIndex: 0 },
        { word: "VAPOR", hint: "Water in its gaseous form, like steam or mist", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "STREAM", hint: "A small, narrow river flowing through the land", revealedIndex: 3 },
        { word: "TRICKLE", hint: "A thin, slow flow of liquid", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DOWNPOUR", hint: "A heavy, sudden rainfall", revealedIndex: 4 }
      ]}
    ]
  }
];

// Function to get today's puzzle based on EST time
export function getTodaysPuzzle() {
  // Get current time in EST
  const now = new Date();
  const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  
  // Puzzle changes at 8 PM EST
  const hour = estTime.getHours();
  const puzzleDate = new Date(estTime);
  
  // If before 8 PM today, show yesterday's puzzle
  // If after 8 PM today, show today's puzzle
  if (hour < 20) {
    puzzleDate.setDate(puzzleDate.getDate() - 1);
  }
  puzzleDate.setHours(20, 0, 0, 0);
  
  // Calculate days since launch (Dec 17, 2025 at 8 PM EST)
  const launchDate = new Date('2025-12-17T20:00:00-05:00');
  const daysSinceLaunch = Math.floor((puzzleDate - launchDate) / (1000 * 60 * 60 * 24));
  
  // Rotate through puzzles
  const puzzleIndex = ((daysSinceLaunch % puzzles.length) + puzzles.length) % puzzles.length;
  
  return puzzles[puzzleIndex];
}

export default puzzles;