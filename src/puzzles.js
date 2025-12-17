// Letter Griddle Buffet - Daily Puzzles
// Each puzzle rotates based on the day
// Puzzle changes at 8 PM EST daily
// REORDERED to avoid same-day category conflicts with Little Letter Griddle

const puzzles = [
  // Puzzle 1 - VIDEO GAMES (Little has this on Day 29 of cycle)
  {
    category: "VIDEO GAMES",
    puzzleNumber: 1,
    amuseBouche: { word: "WII", hint: "Nintendo console known for motion controls", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PONG", hint: "Classic table tennis video game from the 1970s", revealedIndex: 0 },
        { word: "ATARI", hint: "Iconic gaming company that pioneered home video game consoles", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ARCADE", hint: "Entertainment venue filled with coin-operated game machines", revealedIndex: 3 },
        { word: "CONSOLE", hint: "Home gaming device that connects to a TV", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "JOYSTICK", hint: "Hand-held controller used to navigate games", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 2 - FRIENDSHIP
  {
    category: "FRIENDSHIP",
    puzzleNumber: 2,
    amuseBouche: { word: "PAL", hint: "A casual word for a good friend", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ALLY", hint: "A trusted friend who supports and stands by you", revealedIndex: 0 },
        { word: "LOYAL", hint: "Faithful and devoted through thick and thin", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TRUSTY", hint: "Reliable and dependable, someone you can count on", revealedIndex: 3 },
        { word: "SUPPORT", hint: "To give help, encouragement, and assistance to someone", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "KINDNESS", hint: "The quality of being friendly, generous, and considerate", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 3 - PIZZA, PIZZA!
  {
    category: "PIZZA, PIZZA!",
    puzzleNumber: 3,
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
  // Puzzle 4 - ART PROJECTS
  {
    category: "ART PROJECTS",
    puzzleNumber: 4,
    amuseBouche: { word: "INK", hint: "Liquid used in pens and for printing", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LINE", hint: "A mark made by a pencil, pen, or brush across a surface", revealedIndex: 0 },
        { word: "SHADE", hint: "The use of darkness to create depth and dimension in artwork", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CANVAS", hint: "A piece of cloth stretched over a frame for painting", revealedIndex: 3 },
        { word: "DRAWING", hint: "The art of creating images with pencils, pens, or charcoal", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COLLAGE", hint: "Artwork made by gluing paper, photos, and other materials together", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 5 - CANDY
  {
    category: "CANDY",
    puzzleNumber: 5,
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
  // Puzzle 6 - MUSIC STORAGE
  {
    category: "MUSIC STORAGE",
    puzzleNumber: 6,
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
  // Puzzle 7 - AUTUMN
  {
    category: "AUTUMN",
    puzzleNumber: 7,
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
  // Puzzle 8 - MUSICALS
  {
    category: "MUSICALS",
    puzzleNumber: 8,
    amuseBouche: { word: "WIZ", hint: "The ___, 1978 musical adaptation of The Wizard of Oz", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RENT", hint: "Jonathan Larson's rock musical about struggling artists in New York City", revealedIndex: 0 },
        { word: "EVITA", hint: "Andrew Lloyd Webber musical about Argentina's first lady Eva Perón", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WICKED", hint: "Musical telling the untold story of the witches of Oz", revealedIndex: 3 },
        { word: "COMPANY", hint: "Stephen Sondheim musical about a bachelor and his married friends in New York", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HAMILTON", hint: "Lin-Manuel Miranda's hip-hop musical about a founding father", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 9 - COOL WEATHER CLOTHING
  {
    category: "COOL WEATHER CLOTHING",
    puzzleNumber: 9,
    amuseBouche: { word: "HAT", hint: "Headwear that keeps you warm in winter", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COAT", hint: "A long outer garment worn over other clothes for warmth", revealedIndex: 0 },
        { word: "SCARF", hint: "A piece of fabric worn around the neck for warmth or style", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "JACKET", hint: "A shorter outer garment that covers the upper body and arms", revealedIndex: 3 },
        { word: "SWEATER", hint: "A knitted garment worn on the upper body, often made of wool", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CASHMERE", hint: "A luxuriously soft wool fabric from the Kashmir goat", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 10 - HIKING
  {
    category: "HIKING",
    puzzleNumber: 10,
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
  // Puzzle 11 - JIM HENSON'S MUPPETS
  {
    category: "JIM HENSON'S MUPPETS",
    puzzleNumber: 11,
    amuseBouche: { word: "JIM", hint: "First name of the Muppets creator, ___ Henson", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BIRD", hint: "Big yellow character who lives on Sesame Street", revealedIndex: 0 },
        { word: "PIGGY", hint: "Miss ___, glamorous diva and Kermit's love interest", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "KERMIT", hint: "The famous green frog who sings 'Rainbow Connection'", revealedIndex: 3 },
        { word: "SNUFFLE", hint: "___ upagus, the woolly mammoth-like creature on Sesame Street", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PUPPETRY", hint: "The art of bringing characters to life with hand movements", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 12 - WHAT'S IN THE BAG?
  {
    category: "WHAT'S IN THE BAG?",
    puzzleNumber: 12,
    amuseBouche: { word: "GUM", hint: "Minty freshener found at the bottom of purses", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "KEYS", hint: "Metal items that unlock doors and start cars", revealedIndex: 0 },
        { word: "PHONE", hint: "Mobile device for calls, texts, and apps", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WALLET", hint: "Folding case for money and cards", revealedIndex: 3 },
        { word: "LIPSTICK", hint: "Cosmetic applied to add color to lips", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SUNGLASSES", hint: "Eyewear that protects from bright light", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 13 - FOOTBALL
  {
    category: "FOOTBALL",
    puzzleNumber: 13,
    amuseBouche: { word: "RUN", hint: "A play where the ball carrier advances on foot", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DOWN", hint: "A play in football; teams get four tries to advance 10 yards", revealedIndex: 0 },
        { word: "BLITZ", hint: "A defensive play where extra players rush the quarterback", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CENTER", hint: "The offensive lineman who snaps the ball to the quarterback", revealedIndex: 3 },
        { word: "DEFENSE", hint: "The team trying to stop the other team from scoring", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GRIDIRON", hint: "Another name for a football field, named for its yard lines", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 14 - FRUITS
  {
    category: "FRUITS",
    puzzleNumber: 14,
    amuseBouche: { word: "FIG", hint: "Small purple fruit often dried or in cookies", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PEAR", hint: "A sweet fruit with a narrow top and rounded bottom", revealedIndex: 0 },
        { word: "MANGO", hint: "Tropical stone fruit with orange flesh", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ORANGE", hint: "Citrus fruit known for its vitamin C content", revealedIndex: 3 },
        { word: "APRICOT", hint: "Small orange stone fruit related to peaches", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PINEAPPLE", hint: "Tropical fruit with spiky skin and sweet yellow interior", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 15 - FAVORITE BOOKSHOP
  {
    category: "FAVORITE BOOKSHOP",
    puzzleNumber: 15,
    amuseBouche: { word: "INK", hint: "What fills the pages of printed books", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CAFE", hint: "A cozy spot in a bookstore serving coffee and treats", revealedIndex: 0 },
        { word: "MERCH", hint: "Merchandise like bookmarks, tote bags, and literary-themed gifts", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "AUTHOR", hint: "A writer who may visit to discuss and promote their books", revealedIndex: 3 },
        { word: "SIGNING", hint: "An event where a writer autographs copies of their book", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "AMBIANCE", hint: "The welcoming atmosphere and character of a beloved bookshop", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 16 - INTERNATIONAL FOODS
  {
    category: "INTERNATIONAL FOODS",
    puzzleNumber: 16,
    amuseBouche: { word: "PHO", hint: "Vietnamese noodle soup with fragrant broth", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TACO", hint: "A Mexican dish with a folded tortilla and various fillings", revealedIndex: 0 },
        { word: "SUSHI", hint: "Japanese dish of vinegared rice with raw fish or vegetables", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PAELLA", hint: "A Spanish rice dish from Valencia with seafood and saffron", revealedIndex: 3 },
        { word: "RAVIOLI", hint: "Italian pasta pillows filled with cheese, meat, or vegetables", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CROISSANT", hint: "A flaky, buttery French pastry shaped like a crescent", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 17 - IT'S A MYSTERY!
  {
    category: "IT'S A MYSTERY!",
    puzzleNumber: 17,
    amuseBouche: { word: "SPY", hint: "A secret agent who gathers information", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CLUE", hint: "A piece of evidence that helps solve a puzzle or crime", revealedIndex: 0 },
        { word: "CRIME", hint: "An illegal act that breaks the law", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ARREST", hint: "When police take someone into custody for breaking the law", revealedIndex: 3 },
        { word: "SUSPECT", hint: "A person believed to have committed a crime", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SOLUTION", hint: "The answer or resolution to a mystery or problem", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 18 - SCHOOL DAYS
  {
    category: "SCHOOL DAYS",
    puzzleNumber: 18,
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
  // Puzzle 19 - GAMES
  {
    category: "GAMES",
    puzzleNumber: 19,
    amuseBouche: { word: "TAG", hint: "Playground chase game where you're 'it'", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RISK", hint: "Strategic board game of world domination with armies and dice", revealedIndex: 0 },
        { word: "CHESS", hint: "Ancient strategy game with kings, queens, and checkmate", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "DOMINO", hint: "Tile game with numbered dots played by matching ends", revealedIndex: 3 },
        { word: "YAHTZEE", hint: "Dice game where players try to score combinations and get five of a kind", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SCRABBLE", hint: "Word-building board game where letter tiles score points on a grid", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 20 - MOVIE TITLES
  {
    category: "MOVIE TITLES",
    puzzleNumber: 20,
    amuseBouche: { word: "HER", hint: "2013 Spike Jonze film about a man who falls in love with an AI", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JAWS", hint: "1975 Spielberg thriller about a great white shark terrorizing a beach town", revealedIndex: 0 },
        { word: "ALIEN", hint: "1979 sci-fi horror classic with Sigourney Weaver fighting extraterrestrials", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FROZEN", hint: "Disney animated film featuring Elsa, Anna, and the song 'Let It Go'", revealedIndex: 3 },
        { word: "TITANIC", hint: "1997 epic romance about the doomed ocean liner starring DiCaprio and Winslet", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INCEPTION", hint: "Christopher Nolan mind-bending thriller about dreams within dreams", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 21 - DESSERTS
  {
    category: "DESSERTS",
    puzzleNumber: 21,
    amuseBouche: { word: "PIE", hint: "Classic dessert with a crust", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TART", hint: "A pastry with fruit filling and no top crust", revealedIndex: 0 },
        { word: "FUDGE", hint: "Rich, creamy chocolate confection", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUNDAE", hint: "Ice cream topped with sauce, whipped cream, and a cherry", revealedIndex: 3 },
        { word: "BROWNIE", hint: "Dense, chocolate baked square dessert", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHEESECAKE", hint: "Creamy dessert with a graham cracker crust", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 22 - CITIES AROUND THE WORLD
  {
    category: "CITIES AROUND THE WORLD",
    puzzleNumber: 22,
    amuseBouche: { word: "RIO", hint: "Brazilian city famous for Carnival and Christ the Redeemer", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ROME", hint: "Ancient Italian city known as the Eternal City, home to the Colosseum", revealedIndex: 0 },
        { word: "PARIS", hint: "French capital famous for the Eiffel Tower and the Louvre Museum", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LONDON", hint: "UK capital on the Thames River with Big Ben and Buckingham Palace", revealedIndex: 3 },
        { word: "TORONTO", hint: "Canada's largest city, known for the CN Tower and multicultural neighborhoods", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BARCELONA", hint: "Spanish coastal city famous for Gaudí's architecture and La Rambla", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 23 - SPORTS
  {
    category: "SPORTS",
    puzzleNumber: 23,
    amuseBouche: { word: "SKI", hint: "Winter sport on snowy slopes", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GOLF", hint: "Sport played with clubs and a small white ball", revealedIndex: 0 },
        { word: "RUGBY", hint: "Contact team sport played with an oval ball", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TENNIS", hint: "Racquet sport played on a court with a net", revealedIndex: 3 },
        { word: "SWIMMING", hint: "Water sport involving moving through water", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BASKETBALL", hint: "Team sport where players shoot a ball through a hoop", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 24 - COLORS
  {
    category: "COLORS",
    puzzleNumber: 24,
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
  // Puzzle 25 - GAME NIGHT
  {
    category: "GAME NIGHT",
    puzzleNumber: 25,
    amuseBouche: { word: "BET", hint: "A wager made during a game of chance", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "UNO", hint: "Popular card game where players match colors and numbers", revealedIndex: 0 },
        { word: "CLUE", hint: "Classic murder mystery board game with suspects and weapons", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TWISTER", hint: "Physical game with colored circles where players contort their bodies", revealedIndex: 3 },
        { word: "CHECKERS", hint: "Strategy board game where pieces jump to capture opponents", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MONOPOLY", hint: "Real estate trading game where players buy properties and collect rent", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 26 - TREES AND SHRUBS
  {
    category: "TREES AND SHRUBS",
    puzzleNumber: 26,
    amuseBouche: { word: "ELM", hint: "Shade tree common in parks and streets", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PALM", hint: "Tropical tree with large fan-shaped or feathery leaves", revealedIndex: 0 },
        { word: "MAPLE", hint: "Deciduous tree known for its colorful fall foliage and sweet sap", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BANYAN", hint: "Fig tree with aerial roots that grow down to form additional trunks", revealedIndex: 3 },
        { word: "JASMINE", hint: "Fragrant flowering shrub often used in perfumes and teas", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CINNAMON", hint: "Aromatic evergreen tree whose inner bark is used as a spice", revealedIndex: 5 }
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
  
  // Calculate days since a reference date (Dec 17, 2025 = launch day)
  const launchDate = new Date('2025-12-17T20:00:00-05:00');
  const daysSinceLaunch = Math.floor((puzzleDate - launchDate) / (1000 * 60 * 60 * 24));
  
  // Rotate through puzzles
  const puzzleIndex = ((daysSinceLaunch % puzzles.length) + puzzles.length) % puzzles.length;
  
  return puzzles[puzzleIndex];
}

export default puzzles;
