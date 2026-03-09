// Letter Griddle Buffet - Fresh Daily Puzzles
// 42 puzzles in rotation - ALL NEW WORDS including Amuse-Bouche
// Puzzle changes at 8 PM EST daily

const puzzles = [
  // Puzzle 1 - FRIENDSHIP
  {
    category: "FRIENDSHIP",
    puzzleNumber: 1,
    amuseBouche: { word: "BFF", hint: "Best friends forever, in texting shorthand", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ALLY", hint: "Someone who stands by your side", revealedIndex: 0 },
        { word: "CHUM", hint: "A close friend, especially from childhood", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BESTIE", hint: "Your very best friend, in modern slang", revealedIndex: 3 },
        { word: "KINDRED", hint: "People who share similar feelings or interests", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CONFIDANT", hint: "A trusted friend you share secrets with", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 2 - ART
  {
    category: "ART",
    puzzleNumber: 2,
    amuseBouche: { word: "HUE", hint: "A shade or tint of color", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CLAY", hint: "Moldable material shaped by hands", revealedIndex: 0 },
        { word: "BRUSH", hint: "Tool with bristles used for painting", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CANVAS", hint: "Fabric surface for painting masterpieces", revealedIndex: 3 },
        { word: "PASTEL", hint: "Soft, chalky sticks of color", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WATERCOLOR", hint: "Paint that flows and blends with water", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 3 - CANDY
  {
    category: "CANDY",
    puzzleNumber: 3,
    amuseBouche: { word: "PEZ", hint: "Candy dispensed from character heads", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DROP", hint: "Small hard candy, like lemon or pear flavored", revealedIndex: 0 },
        { word: "SWEET", hint: "Another word for candy, especially in Britain", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TOFFEE", hint: "Buttery, crunchy candy made from sugar", revealedIndex: 3 },
        { word: "CARAMEL", hint: "Smooth, golden candy made by heating sugar", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BUTTERSCOTCH", hint: "Sweet, buttery brown sugar confection", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 4 - ALBUMS
  {
    category: "ALBUMS",
    puzzleNumber: 4,
    amuseBouche: { word: "HIT", hint: "A chart-topping popular song", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SONG", hint: "An individual musical piece with lyrics", revealedIndex: 0 },
        { word: "VINYL", hint: "Classic format making a comeback with collectors", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "STEREO", hint: "Sound system for playing your tunes", revealedIndex: 3 },
        { word: "PLAYLIST", hint: "A curated collection of songs in order", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "STREAMING", hint: "How most people listen to music today", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 5 - FALL
  {
    category: "FALL",
    puzzleNumber: 5,
    amuseBouche: { word: "HAY", hint: "Dried grass in autumn bales", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RAKE", hint: "Tool used to gather fallen leaves", revealedIndex: 0 },
        { word: "CIDER", hint: "Warm apple drink perfect for fall", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ACORNS", hint: "Nuts that fall from oak trees", revealedIndex: 3 },
        { word: "FOLIAGE", hint: "The colorful leaves on trees in fall", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SCARECROW", hint: "Stuffed figure standing guard in fields", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 6 - BROADWAY
  {
    category: "BROADWAY",
    puzzleNumber: 6,
    amuseBouche: { word: "ACT", hint: "One section of a stage play", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RENT", hint: "Rock musical about artists in New York City", revealedIndex: 0 },
        { word: "HAIR", hint: "1960s counterculture musical about the hippie movement", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WICKED", hint: "Story of the witches of Oz before Dorothy arrived", revealedIndex: 3 },
        { word: "PHANTOM", hint: "Masked figure haunting a Paris opera house", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BRIGADOON", hint: "Magical Scottish village that appears once every century", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 7 - OUTERWEAR
  {
    category: "OUTERWEAR",
    puzzleNumber: 7,
    amuseBouche: { word: "FUR", hint: "Warm material lining winter coats", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "VEST", hint: "Sleeveless layer worn over a shirt", revealedIndex: 0 },
        { word: "WRAP", hint: "Blanket-like covering draped over shoulders", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PARKA", hint: "Heavy hooded jacket for cold weather", revealedIndex: 3 },
        { word: "PONCHO", hint: "Pull-over garment, often waterproof", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TURTLENECK", hint: "Sweater with a high folded collar", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 8 - HIKE (keeping MAP)
  {
    category: "HIKE",
    puzzleNumber: 8,
    amuseBouche: { word: "MAP", hint: "Paper guide showing trails and terrain", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TREK", hint: "A long, challenging journey on foot", revealedIndex: 0 },
        { word: "PATH", hint: "A walkway through woods or fields", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RANGER", hint: "Park official who knows the trails", revealedIndex: 3 },
        { word: "CANTEEN", hint: "Container for carrying water on the trail", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WILDERNESS", hint: "Wild, untamed natural area to explore", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 9 - MUPPETS
  {
    category: "MUPPETS",
    puzzleNumber: 9,
    amuseBouche: { word: "PIG", hint: "Miss Piggy's species", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GONZO", hint: "Blue weirdo known for daring stunts", revealedIndex: 0 },
        { word: "PIGGY", hint: "Glamorous diva pig who loves Kermit", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FOZZIE", hint: "Comedian bear who tells terrible jokes", revealedIndex: 3 },
        { word: "SCOOTER", hint: "Young gofer who works backstage", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SWEETUMS", hint: "Giant, lovable monster with lots of fur", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 10 - HANDBAG
  {
    category: "HANDBAG",
    puzzleNumber: 10,
    amuseBouche: { word: "PEN", hint: "Writing tool tucked in a pocket", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COMB", hint: "Tool for tidying your hair on the go", revealedIndex: 0 },
        { word: "COINS", hint: "Loose change jingling at the bottom", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MIRROR", hint: "Small reflective item for quick touch-ups", revealedIndex: 3 },
        { word: "RECEIPT", hint: "Paper proof of purchase, often crumpled", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SUNGLASSES", hint: "Eye protection tucked away for sunny days", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 11 - FOOTBALL
  {
    category: "FOOTBALL",
    puzzleNumber: 11,
    amuseBouche: { word: "END", hint: "Zone where touchdowns are scored", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PUNT", hint: "Kicking the ball away to the other team", revealedIndex: 0 },
        { word: "SNAP", hint: "When the center hikes the ball", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FUMBLE", hint: "Accidentally dropping the ball during play", revealedIndex: 3 },
        { word: "KICKOFF", hint: "How each half of the game begins", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GRIDIRON", hint: "Nickname for the football field", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 12 - FRUITS
  {
    category: "FRUITS",
    puzzleNumber: 12,
    amuseBouche: { word: "DATE", hint: "Sweet, wrinkly fruit from palm trees", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "KIWI", hint: "Fuzzy brown fruit with green flesh inside", revealedIndex: 0 },
        { word: "PLUM", hint: "Small, round stone fruit with purple skin", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHERRY", hint: "Small red fruit often on top of sundaes", revealedIndex: 3 },
        { word: "PAPAYA", hint: "Tropical fruit with orange flesh and black seeds", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TANGERINE", hint: "Small, sweet citrus that's easy to peel", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 13 - BOOKSHOP
  {
    category: "BOOKSHOP",
    puzzleNumber: 13,
    amuseBouche: { word: "ROW", hint: "A line of books on a shelf", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NOOK", hint: "A cozy corner for reading", revealedIndex: 0 },
        { word: "SHELF", hint: "Where books stand in a row waiting to be chosen", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BROWSE", hint: "To look through books without a plan", revealedIndex: 3 },
        { word: "FICTION", hint: "Made-up stories from an author's imagination", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HARDCOVER", hint: "Book with a sturdy, rigid binding", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 14 - CUISINE
  {
    category: "CUISINE",
    puzzleNumber: 14,
    amuseBouche: { word: "WOK", hint: "Round-bottomed pan for stir-fry", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GYRO", hint: "Greek sandwich with meat on pita bread", revealedIndex: 0 },
        { word: "CURRY", hint: "Spiced dish popular in Indian cooking", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RAMEN", hint: "Japanese noodle soup with rich broth", revealedIndex: 3 },
        { word: "FALAFEL", hint: "Fried chickpea balls served in pita", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SCHNITZEL", hint: "Breaded and fried cutlet from Austria", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 15 - MYSTERY
  {
    category: "MYSTERY",
    puzzleNumber: 15,
    amuseBouche: { word: "RED", hint: "Herring that misleads investigators", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CASE", hint: "An investigation to be solved", revealedIndex: 0 },
        { word: "CLOAK", hint: "What secretive figures wear to hide", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CIPHER", hint: "A secret code to be cracked", revealedIndex: 3 },
        { word: "WITNESS", hint: "Someone who saw what happened", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WHODUNIT", hint: "A story focused on solving a crime", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 16 - SCHOOL
  {
    category: "SCHOOL",
    puzzleNumber: 16,
    amuseBouche: { word: "PEN", hint: "Writing tool in every student's bag", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BELL", hint: "Sound that signals class changes", revealedIndex: 0 },
        { word: "TEST", hint: "Assessment of what you've learned", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LOCKER", hint: "Metal storage space in the hallway", revealedIndex: 3 },
        { word: "ERASER", hint: "Tool for fixing pencil mistakes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CLASSROOM", hint: "Room where students learn together", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 17 - GAMES
  {
    category: "GAMES",
    puzzleNumber: 17,
    amuseBouche: { word: "WIN", hint: "The goal of every player", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TURN", hint: "Your chance to play next", revealedIndex: 0 },
        { word: "CARDS", hint: "Deck of 52 used for many games", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PLAYER", hint: "Someone participating in the game", revealedIndex: 3 },
        { word: "SPINNER", hint: "Arrow that whirls to determine moves", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HOPSCOTCH", hint: "Sidewalk game with numbered squares", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 18 - MOVIES
  {
    category: "MOVIES",
    puzzleNumber: 18,
    amuseBouche: { word: "ACT", hint: "To perform in front of the camera", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CAST", hint: "All the actors in a film", revealedIndex: 0 },
        { word: "SCENE", hint: "A single continuous shot in a movie", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SEQUEL", hint: "A follow-up film continuing the story", revealedIndex: 3 },
        { word: "TRAILER", hint: "Preview that shows exciting clips", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PROJECTOR", hint: "Machine that displays film on a screen", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 19 - DESSERTS
  {
    category: "DESSERTS",
    puzzleNumber: 19,
    amuseBouche: { word: "JAM", hint: "Fruity filling for pastries", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CAKE", hint: "Layered treat often served at birthdays", revealedIndex: 0 },
        { word: "CRISP", hint: "Baked fruit dessert with crumbly topping", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GELATO", hint: "Italian ice cream, denser and creamier", revealedIndex: 3 },
        { word: "MOUSSE", hint: "Light, airy chocolate dessert", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TIRAMISU", hint: "Italian dessert with coffee-soaked ladyfingers", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 20 - CITIES
  {
    category: "CITIES",
    puzzleNumber: 20,
    amuseBouche: { word: "NYC", hint: "Big Apple's abbreviation", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PARIS", hint: "French capital known for the Eiffel Tower", revealedIndex: 0 },
        { word: "CAIRO", hint: "Egyptian city near the pyramids", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "DUBLIN", hint: "Irish capital famous for pubs and culture", revealedIndex: 3 },
        { word: "VIENNA", hint: "Austrian city known for music and pastries", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SINGAPORE", hint: "Island city-state in Southeast Asia", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 21 - SPORTS
  {
    category: "SPORTS",
    puzzleNumber: 21,
    amuseBouche: { word: "BAT", hint: "Wooden stick for hitting baseballs", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SWIM", hint: "Racing through water in a pool or lake", revealedIndex: 0 },
        { word: "POLO", hint: "Sport played on horseback with mallets", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "HOCKEY", hint: "Fast ice sport with pucks and sticks", revealedIndex: 3 },
        { word: "BOXING", hint: "Combat sport with gloves in a ring", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BADMINTON", hint: "Racket sport with a feathered shuttlecock", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 22 - COLORS
  {
    category: "COLORS",
    puzzleNumber: 22,
    amuseBouche: { word: "TAN", hint: "Sun-kissed skin tone", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PINK", hint: "Soft color of cherry blossoms and flamingos", revealedIndex: 0 },
        { word: "GOLD", hint: "Metallic color of treasure and sunsets", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "VIOLET", hint: "Deep purple color like the flower", revealedIndex: 3 },
        { word: "SILVER", hint: "Shiny metallic color of moonlight", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MAGENTA", hint: "Vivid purplish-red color", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 23 - PARLOR
  {
    category: "PARLOR",
    puzzleNumber: 23,
    amuseBouche: { word: "ACE", hint: "Highest card in many games", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BINGO", hint: "Game where you mark numbers on a card", revealedIndex: 0 },
        { word: "RUMMY", hint: "Card game where you collect matching sets and runs", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "DOMINO", hint: "Rectangular tiles with dots matched end to end", revealedIndex: 3 },
        { word: "YAHTZEE", hint: "Dice game trying to roll five of a kind", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PICTIONARY", hint: "Drawing game where teammates guess the word", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 24 - GAMING
  {
    category: "GAMING",
    puzzleNumber: 24,
    amuseBouche: { word: "NES", hint: "Classic Nintendo console from the 80s", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SEGA", hint: "Company behind Sonic the Hedgehog", revealedIndex: 0 },
        { word: "MARIO", hint: "Famous plumber who rescues Princess Peach", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TETRIS", hint: "Puzzle game fitting falling blocks together", revealedIndex: 3 },
        { word: "ZELDA", hint: "Princess in Nintendo's legendary adventure series", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MINECRAFT", hint: "Block-building sandbox game for creators", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 25 - FIRESIDE
  {
    category: "FIRESIDE",
    puzzleNumber: 25,
    amuseBouche: { word: "ASH", hint: "Gray remains after the fire burns out", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GLOW", hint: "Soft light radiating from the flames", revealedIndex: 0 },
        { word: "TONGS", hint: "Metal tool for gripping and moving hot logs", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "HEARTH", hint: "The floor area in front of a fireplace", revealedIndex: 3 },
        { word: "KINDLE", hint: "To start a fire burning", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHESTNUTS", hint: "Nuts famously roasted by an open fire", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 26 - GAMESHOW
  {
    category: "GAMESHOW",
    puzzleNumber: 26,
    amuseBouche: { word: "BID", hint: "Guess the price on a famous show", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HOST", hint: "The person who runs the show", revealedIndex: 0 },
        { word: "WHEEL", hint: "Spinning circle of prizes on a famous show", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BUZZER", hint: "What you hit to answer first", revealedIndex: 3 },
        { word: "PODIUM", hint: "Stand where contestants wait their turn", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "JEOPARDY", hint: "Quiz show where answers come as questions", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 27 - FLYING
  {
    category: "FLYING",
    puzzleNumber: 27,
    amuseBouche: { word: "AIR", hint: "What fills the sky above us", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WING", hint: "The part that lifts a plane into the sky", revealedIndex: 0 },
        { word: "LAND", hint: "To bring an aircraft safely down", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ASCEND", hint: "To climb higher into the sky", revealedIndex: 3 },
        { word: "ALTITUDE", hint: "How high above the ground you are", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TURBULENCE", hint: "Bumpy air that shakes the plane", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 28 - TRAVEL
  {
    category: "TRAVEL",
    puzzleNumber: 28,
    amuseBouche: { word: "BAG", hint: "What you pack for a trip", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TRIP", hint: "A journey from one place to another", revealedIndex: 0 },
        { word: "GATE", hint: "Where you wait to board your plane", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TICKET", hint: "Paper or digital proof of your booking", revealedIndex: 3 },
        { word: "LUGGAGE", hint: "Bags and suitcases you bring along", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DEPARTURE", hint: "When your flight leaves the airport", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 29 - CHEESE (keeping AGE)
  {
    category: "CHEESE",
    puzzleNumber: 29,
    amuseBouche: { word: "AGE", hint: "Process that develops flavor in fine cheeses", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GOAT", hint: "Animal whose milk makes tangy cheese", revealedIndex: 0 },
        { word: "BLEU", hint: "French spelling for a moldy, pungent variety", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FONDUE", hint: "Melted cheese dish for dipping bread", revealedIndex: 3 },
        { word: "GRUYERE", hint: "Nutty Swiss cheese perfect for melting", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PARMESAN", hint: "Hard Italian cheese grated over pasta", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 30 - LUNCH
  {
    category: "LUNCH",
    puzzleNumber: 30,
    amuseBouche: { word: "SUB", hint: "Long sandwich on a hoagie roll", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WRAP", hint: "Fillings rolled up in a soft tortilla", revealedIndex: 0 },
        { word: "CHIPS", hint: "Crunchy snack often served alongside a sandwich", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PANINI", hint: "Pressed and grilled Italian sandwich", revealedIndex: 3 },
        { word: "THERMOS", hint: "Insulated container keeping soup warm", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LUNCHBOX", hint: "Container for carrying your midday meal", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 31 - SPICES
  {
    category: "SPICES",
    puzzleNumber: 31,
    amuseBouche: { word: "RUB", hint: "Spice blend massaged onto meat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SAGE", hint: "Earthy herb often used in stuffing", revealedIndex: 0 },
        { word: "CLOVE", hint: "Aromatic spice used in holiday baking", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GINGER", hint: "Spicy root used in cookies and stir-fry", revealedIndex: 3 },
        { word: "CUMIN", hint: "Warm, earthy spice essential in chili", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CORIANDER", hint: "Seed spice with citrusy notes, also called cilantro", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 32 - KITCHEN
  {
    category: "KITCHEN",
    puzzleNumber: 32,
    amuseBouche: { word: "PAN", hint: "Flat cookware for frying", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OVEN", hint: "Appliance for baking and roasting", revealedIndex: 0 },
        { word: "WHISK", hint: "Wire tool for beating eggs and cream", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PANTRY", hint: "Storage area for dry goods and cans", revealedIndex: 3 },
        { word: "SPATULA", hint: "Flat tool for flipping pancakes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MICROWAVE", hint: "Appliance for quick reheating", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 33 - PANCAKES
  {
    category: "PANCAKES",
    puzzleNumber: 33,
    amuseBouche: { word: "PAT", hint: "A small portion of butter", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLAT", hint: "The shape of each cake on the griddle", revealedIndex: 0 },
        { word: "STACK", hint: "How pancakes are served, one atop another", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BUTTER", hint: "Melty topping that pools in the middle", revealedIndex: 3 },
        { word: "BATTER", hint: "Pourable mixture before it hits the pan", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BLUEBERRY", hint: "Popular fruit folded into the batter", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 34 - SOUP
  {
    category: "SOUP",
    puzzleNumber: 34,
    amuseBouche: { word: "CUP", hint: "Small serving size, not a bowl", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STEW", hint: "Thick, hearty dish with chunks of meat and veggies", revealedIndex: 0 },
        { word: "LADLE", hint: "Deep spoon for serving from a pot", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SIMMER", hint: "To cook gently just below boiling", revealedIndex: 3 },
        { word: "MINESTRONE", hint: "Italian vegetable soup with pasta and beans", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GAZPACHO", hint: "Cold Spanish soup made from tomatoes", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 35 - PASTA
  {
    category: "PASTA",
    puzzleNumber: 35,
    amuseBouche: { word: "OIL", hint: "Drizzled to keep noodles from sticking", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ORZO", hint: "Tiny rice-shaped pasta for soups and salads", revealedIndex: 0 },
        { word: "ANGEL", hint: "Hair-thin delicate pasta strands", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ROTINI", hint: "Corkscrew-shaped pasta that holds sauce well", revealedIndex: 3 },
        { word: "LASAGNA", hint: "Wide, flat noodles layered in a baked dish", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FETTUCCINE", hint: "Long, flat ribbons often served with Alfredo", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 36 - BREAKFAST
  {
    category: "BREAKFAST",
    puzzleNumber: 36,
    amuseBouche: { word: "OAT", hint: "Grain in morning porridge", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HASH", hint: "Diced potatoes fried crispy on the griddle", revealedIndex: 0 },
        { word: "TOAST", hint: "Bread browned and ready for butter", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WAFFLE", hint: "Grid-patterned treat made in a special iron", revealedIndex: 3 },
        { word: "OMELET", hint: "Folded eggs filled with cheese and veggies", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CROISSANT", hint: "Flaky, buttery French pastry", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 37 - COOKING
  {
    category: "COOKING",
    puzzleNumber: 37,
    amuseBouche: { word: "OIL", hint: "Liquid fat for sautéing", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DICE", hint: "To cut food into small cubes", revealedIndex: 0 },
        { word: "BASTE", hint: "To spoon juices over meat while roasting", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SAUTÉ", hint: "To cook quickly in a little oil over high heat", revealedIndex: 3 },
        { word: "BRAISE", hint: "To cook slowly in liquid for tender results", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MARINATE", hint: "To soak food in flavorful liquid before cooking", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 38 - POTLUCK
  {
    category: "POTLUCK",
    puzzleNumber: 38,
    amuseBouche: { word: "POT", hint: "What each guest brings a dish in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DISH", hint: "A prepared food item brought to share", revealedIndex: 0 },
        { word: "GUEST", hint: "Someone invited to the gathering", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPREAD", hint: "An impressive array of food choices", revealedIndex: 3 },
        { word: "SERVING", hint: "A portion placed on your plate", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CASSEROLE", hint: "Baked dish often brought to gatherings", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 39 - BRUNCH
  {
    category: "BRUNCH",
    puzzleNumber: 39,
    amuseBouche: { word: "TEA", hint: "Hot beverage served with scones", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "EGGS", hint: "Morning staple, scrambled or poached", revealedIndex: 0 },
        { word: "LATTE", hint: "Espresso with steamed milk", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MIMOSA", hint: "Champagne and orange juice cocktail", revealedIndex: 3 },
        { word: "FRITTATA", hint: "Italian baked egg dish like an open omelet", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BENEDICTS", hint: "Eggs on muffins with hollandaise sauce", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 40 - DINNER
  {
    category: "DINNER",
    puzzleNumber: 40,
    amuseBouche: { word: "SIT", hint: "What you do at the table", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MEAL", hint: "Food prepared and served at the table", revealedIndex: 0 },
        { word: "WINE", hint: "Fermented grape drink often paired with dinner", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CANDLE", hint: "Flickering light for a romantic table setting", revealedIndex: 3 },
        { word: "ENTREE", hint: "The main dish of the evening", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "RESERVATIONS", hint: "Booking a table at a restaurant in advance", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 41 - CEREAL
  {
    category: "CEREAL",
    puzzleNumber: 41,
    amuseBouche: { word: "OAT", hint: "Grain in Cheerios", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CORN", hint: "Golden grain that becomes flakes", revealedIndex: 0 },
        { word: "BRAN", hint: "Fiber-rich outer layer of grain", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLAKES", hint: "Thin, crispy pieces floating in your bowl", revealedIndex: 3 },
        { word: "CRUNCH", hint: "The satisfying sound of each bite", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BREAKFAST", hint: "The meal when most cereal is enjoyed", revealedIndex: 5 }
      ]}
    ]
  },
  // Puzzle 42 - WATER
  {
    category: "WATER",
    puzzleNumber: 42,
    amuseBouche: { word: "ICE", hint: "Frozen form of water", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RAIN", hint: "Drops falling from clouds above", revealedIndex: 0 },
        { word: "POND", hint: "Small body of still water", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPLASH", hint: "The sound and spray when you jump in", revealedIndex: 3 },
        { word: "PUDDLE", hint: "Small pool left after a rainstorm", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WATERFALL", hint: "Cascading water plunging over a cliff", revealedIndex: 5 }
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
  
  // Launch date: December 17, 2025 at 8 PM (when index 0 started)
  const launchDate = new Date(2025, 11, 17, 20, 0, 0, 0); // Month is 0-indexed, so 11 = December
  
  // Calculate days since launch
  const daysSinceLaunch = Math.round((puzzleDate - launchDate) / (1000 * 60 * 60 * 24));
  
  // Rotate through puzzles
  const puzzleIndex = ((daysSinceLaunch % puzzles.length) + puzzles.length) % puzzles.length;
  
  return puzzles[puzzleIndex];
}

export default puzzles;