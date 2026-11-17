// Letter Griddle Buffet - Puzzles
// 55 puzzles - All new non-holiday content
// Updated: April 5, 2026
// Launch Date: March 10, 2026 at 8 PM EST

const puzzles = [
  // =============================================
  // Puzzle 1 - PLANT A FLOWER
  // =============================================
  {
    category: "PLANT A FLOWER",
    puzzleNumber: 1,
    amuseBouche: { word: "SOW", hint: "To plant seeds in soil", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SEED", hint: "The tiny beginning of a plant", revealedIndex: 0 },
        { word: "PETAL", hint: "A colorful part of a bloom", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPROUT", hint: "A young plant just starting to grow", revealedIndex: 3 },
        { word: "CONTAIN", hint: "To hold or keep within a pot", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EMERGING", hint: "Coming out or appearing from the soil", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 2 - COFFEE BREAK
  // =============================================
  {
    category: "COFFEE BREAK",
    puzzleNumber: 2,
    amuseBouche: { word: "MUG", hint: "A sturdy cup for hot drinks", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JAVA", hint: "Slang term for coffee", revealedIndex: 0 },
        { word: "RELAX", hint: "To rest and unwind", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PUZZLE", hint: "A brain game to enjoy during downtime", revealedIndex: 3 },
        { word: "BREATHER", hint: "A short pause to catch your breath", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "REFRESHES", hint: "Revives and re-energizes you", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 3 - PIE
  // =============================================
  {
    category: "PIE",
    puzzleNumber: 3,
    amuseBouche: { word: "TIN", hint: "Metal pan for baking", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LIME", hint: "Key ___ pie is a Florida favorite", revealedIndex: 0 },
        { word: "PEACH", hint: "A sweet summer fruit pie", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHERRY", hint: "A classic red fruit filling", revealedIndex: 3 },
        { word: "COCONUT", hint: "A tropical pie flavor with cream", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MERINGUE", hint: "A fluffy, toasted topping made from egg whites", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 4 - LAMB
  // =============================================
  {
    category: "LAMB",
    puzzleNumber: 4,
    amuseBouche: { word: "BAA", hint: "The sound a sheep makes", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WALK", hint: "Lambs can do this within minutes of birth", revealedIndex: 0 },
        { word: "BLEAT", hint: "The sound a lamb makes", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "VISION", hint: "Lambs have nearly 360 degrees of this", revealedIndex: 3 },
        { word: "PLAYFUL", hint: "Frisky and full of fun", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SHEARING", hint: "The process of removing wool", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 5 - PUPPY
  // =============================================
  {
    category: "PUPPY",
    puzzleNumber: 5,
    amuseBouche: { word: "PUP", hint: "Short for puppy", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BARK", hint: "The sound a dog makes", revealedIndex: 0 },
        { word: "FETCH", hint: "A game of throwing and retrieving", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TREAT", hint: "A tasty reward for good behavior", revealedIndex: 3 },
        { word: "COLLAR", hint: "Worn around the neck with tags", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CUDDLING", hint: "Snuggling up close for warmth", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 6 - THEATRE
  // =============================================
  {
    category: "THEATRE",
    puzzleNumber: 6,
    amuseBouche: { word: "ACT", hint: "A division of a play", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ROLE", hint: "A part played by an actor", revealedIndex: 0 },
        { word: "DRAMA", hint: "A serious or emotional performance", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SCRIPT", hint: "The written dialogue for a play", revealedIndex: 3 },
        { word: "CURTAIN", hint: "It rises at the start and falls at the end", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BROADWAY", hint: "New York City's famous theatre district", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 7 - WAFFLE
  // =============================================
  {
    category: "WAFFLE",
    puzzleNumber: 7,
    amuseBouche: { word: "YUM", hint: "Expression of deliciousness", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "IRON", hint: "The tool used to cook waffles", revealedIndex: 0 },
        { word: "CRISP", hint: "Crunchy on the outside", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GOLDEN", hint: "The perfect color when done", revealedIndex: 3 },
        { word: "BELGIAN", hint: "A style known for deep pockets", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TOPPINGS", hint: "Fruit, syrup, or whipped cream", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 8 - BUTTERFLY
  // =============================================
  {
    category: "BUTTERFLY",
    puzzleNumber: 8,
    amuseBouche: { word: "FLY", hint: "What butterflies do gracefully", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LIFE", hint: "The stages from egg to adult", revealedIndex: 0 },
        { word: "CYCLE", hint: "A repeating pattern of changes", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WINGED", hint: "Having colorful flight appendages", revealedIndex: 3 },
        { word: "MONARCH", hint: "An orange and black migratory species", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ANTENNAE", hint: "Sensory organs on the head", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 9 - POPCORN
  // =============================================
  {
    category: "POPCORN",
    puzzleNumber: 9,
    amuseBouche: { word: "POP", hint: "The sound kernels make when heated", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SALT", hint: "A classic seasoning", revealedIndex: 0 },
        { word: "WHITE", hint: "The color of plain popped kernels", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CRUNCH", hint: "The satisfying sound when you bite", revealedIndex: 3 },
        { word: "BUTTERY", hint: "Rich and golden-coated", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "UNPOPPED", hint: "The kernels left at the bottom of the bowl", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 10 - PUZZLES
  // =============================================
  {
    category: "PUZZLES",
    puzzleNumber: 10,
    amuseBouche: { word: "FIT", hint: "When pieces connect perfectly", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CLUE", hint: "A helpful hint to solve", revealedIndex: 0 },
        { word: "PIECE", hint: "One part of the whole", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TEASER", hint: "A brain ___ challenges the mind", revealedIndex: 3 },
        { word: "JIGSAW", hint: "A puzzle with interlocking pieces", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SOLUTION", hint: "The answer you're looking for", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 11 - PENCIL
  // =============================================
  {
    category: "PENCIL",
    puzzleNumber: 11,
    amuseBouche: { word: "TIP", hint: "The pointed end used for writing", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LEAD", hint: "What the writing core is mistakenly called", revealedIndex: 0 },
        { word: "WRITE", hint: "To put words on paper", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WOODEN", hint: "Made from timber", revealedIndex: 3 },
        { word: "SHARPEN", hint: "To restore the point", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GRAPHITE", hint: "The actual material in the core", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 12 - PAELLA
  // =============================================
  {
    category: "PAELLA",
    puzzleNumber: 12,
    amuseBouche: { word: "PAN", hint: "The wide, shallow cooking vessel", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RICE", hint: "The base grain of this dish", revealedIndex: 0 },
        { word: "SPAIN", hint: "Country where it originated", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHICKEN", hint: "A common protein topping", revealedIndex: 3 },
        { word: "SAFFRON", hint: "The expensive spice that gives it color", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "VALENCIA", hint: "The Spanish region famous for this dish", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 13 - SELFIE
  // =============================================
  {
    category: "SELFIE",
    puzzleNumber: 13,
    amuseBouche: { word: "SAY", hint: "_____ cheese!", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SNAP", hint: "To take a quick photo", revealedIndex: 0 },
        { word: "PHONE", hint: "The device most often used", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CAMERA", hint: "What captures the image", revealedIndex: 3 },
        { word: "SHARING", hint: "Posting for others to see", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PORTRAIT", hint: "A photo of a person", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 14 - CARAMEL
  // =============================================
  {
    category: "CARAMEL",
    puzzleNumber: 14,
    amuseBouche: { word: "YUM", hint: "Expression of deliciousness", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOFT", hint: "Tender and easy to chew", revealedIndex: 0 },
        { word: "APPLE", hint: "A fruit often dipped in this treat", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "STICKY", hint: "Tends to cling to your teeth", revealedIndex: 3 },
        { word: "POPCORN", hint: "A snack often coated with this", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LUSCIOUS", hint: "Richly appealing and delicious", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 15 - PERFUME
  // =============================================
  {
    category: "PERFUME",
    puzzleNumber: 15,
    amuseBouche: { word: "DAB", hint: "To apply lightly", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MUSK", hint: "A warm, earthy base note", revealedIndex: 0 },
        { word: "SCENT", hint: "A distinctive smell", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLORAL", hint: "Smelling like flowers", revealedIndex: 3 },
        { word: "POWDERY", hint: "A soft, delicate fragrance type", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ESSENCE", hint: "The concentrated extract", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 16 - READING
  // =============================================
  {
    category: "READING",
    puzzleNumber: 16,
    amuseBouche: { word: "EYE", hint: "What you use to read", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SKIM", hint: "To read quickly for main points", revealedIndex: 0 },
        { word: "BROWSE", hint: "To look through casually", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PERUSE", hint: "To read thoroughly", revealedIndex: 3 },
        { word: "INFORMED", hint: "Having knowledge from learning", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BOOKMARK", hint: "Saves your place in a book", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 17 - PARTY
  // =============================================
  {
    category: "PARTY",
    puzzleNumber: 17,
    amuseBouche: { word: "FUN", hint: "What parties are all about", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BASH", hint: "A lively celebration", revealedIndex: 0 },
        { word: "MIXER", hint: "A social gathering to meet people", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SOIRÉE", hint: "An elegant evening party", revealedIndex: 3 },
        { word: "SHINDIG", hint: "A fun, festive event", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WINGDING", hint: "A wild, lavish party", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 18 - EIFFEL TOWER
  // =============================================
  {
    category: "EIFFEL TOWER",
    puzzleNumber: 18,
    amuseBouche: { word: "TOP", hint: "The highest point", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "VIEW", hint: "What you see from the top", revealedIndex: 0 },
        { word: "PARIS", hint: "The city where it stands", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ICONIC", hint: "Widely recognized and symbolic", revealedIndex: 3 },
        { word: "TOURIST", hint: "A visitor to a famous site", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LANDMARK", hint: "A famous, recognizable structure", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 19 - ANTIQUE
  // =============================================
  {
    category: "ANTIQUE",
    puzzleNumber: 19,
    amuseBouche: { word: "OLD", hint: "From long ago", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RARE", hint: "Uncommon and hard to find", revealedIndex: 0 },
        { word: "RELIC", hint: "An object from the past", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RUSTIC", hint: "Having a simple, aged charm", revealedIndex: 3 },
        { word: "COLLECT", hint: "To gather items as a hobby", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HEIRLOOM", hint: "A treasured family possession", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 20 - GOLF
  // =============================================
  {
    category: "GOLF",
    puzzleNumber: 20,
    amuseBouche: { word: "TEE", hint: "Where the ball sits to start", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "IRON", hint: "A type of club for mid-range shots", revealedIndex: 0 },
        { word: "WEDGE", hint: "A club for short, high shots", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BIRDIE", hint: "One stroke under par", revealedIndex: 3 },
        { word: "FAIRWAY", hint: "The mowed path between tee and green", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SANDTRAP", hint: "A bunker filled with sand", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 21 - STARS
  // =============================================
  {
    category: "STARS",
    puzzleNumber: 21,
    amuseBouche: { word: "SKY", hint: "Where stars appear", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TINY", hint: "Very small in appearance from Earth", revealedIndex: 0 },
        { word: "DWARF", hint: "A small, dim type of star", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "DAZZLE", hint: "To impress with brightness", revealedIndex: 3 },
        { word: "SPARKLE", hint: "To twinkle with light", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CELESTIAL", hint: "Relating to the sky or heavens", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 22 - DANCE
  // =============================================
  {
    category: "DANCE",
    puzzleNumber: 22,
    amuseBouche: { word: "BOB", hint: "To move up and down", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FOLK", hint: "Traditional cultural style", revealedIndex: 0 },
        { word: "MUSIC", hint: "What dancers move to", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BALLET", hint: "A classical form with pointe shoes", revealedIndex: 3 },
        { word: "PERFORM", hint: "To present before an audience", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BALLROOM", hint: "Elegant partner dancing", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 23 - SCRABBLE
  // =============================================
  {
    category: "SCRABBLE",
    puzzleNumber: 23,
    amuseBouche: { word: "Q10", hint: "A high-value letter", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TILE", hint: "A small piece with a letter", revealedIndex: 0 },
        { word: "POINT", hint: "The value of each letter", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SQUARE", hint: "A space on the board", revealedIndex: 3 },
        { word: "SCORING", hint: "Adding up your word value", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INVENTOR", hint: "Alfred Mosher Butts created it", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 24 - LAUGHTER
  // =============================================
  {
    category: "LAUGHTER",
    puzzleNumber: 24,
    amuseBouche: { word: "HA!", hint: "Expression of amusement", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GLEE", hint: "Great delight and joy", revealedIndex: 0 },
        { word: "AMUSE", hint: "To make someone smile", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GIGGLE", hint: "A light, silly laugh", revealedIndex: 3 },
        { word: "CHUCKLE", hint: "A quiet, soft laugh", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHEERFUL", hint: "Happy and in good spirits", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 25 - JELLY BEANS
  // =============================================
  {
    category: "JELLY BEANS",
    puzzleNumber: 25,
    amuseBouche: { word: "JAR", hint: "Container for sweet treats", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JARS", hint: "Containers often filled with them", revealedIndex: 0 },
        { word: "FRUIT", hint: "A common flavor category", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLAVOR", hint: "The taste of each bean", revealedIndex: 3 },
        { word: "GUMDROP", hint: "A similar sugar-coated candy", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COLORFUL", hint: "Bright and varied in hue", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 26 - TAKEOUT
  // =============================================
  {
    category: "TAKEOUT",
    puzzleNumber: 26,
    amuseBouche: { word: "BOX", hint: "Container for food to go", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FAST", hint: "Quick and convenient", revealedIndex: 0 },
        { word: "READY", hint: "Prepared and waiting", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PICKUP", hint: "To collect your order", revealedIndex: 3 },
        { word: "PACKAGE", hint: "How the food is wrapped", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CURBSIDE", hint: "Delivered to your car", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 27 - FRIDAY
  // =============================================
  {
    category: "FRIDAY",
    puzzleNumber: 27,
    amuseBouche: { word: "END", hint: "The ___ of the workweek", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TGIF", hint: "Thank Goodness It's ___", revealedIndex: 0 },
        { word: "JEANS", hint: "Casual pants often worn this day", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CASUAL", hint: "Relaxed and informal", revealedIndex: 3 },
        { word: "COMFORT", hint: "A feeling of ease", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INFORMAL", hint: "Not following strict rules", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 28 - KICKBALL
  // =============================================
  {
    category: "KICKBALL",
    puzzleNumber: 28,
    amuseBouche: { word: "RUN", hint: "What you do after kicking", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TEAM", hint: "A group playing together", revealedIndex: 0 },
        { word: "FIELD", hint: "The outdoor playing area", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "KICKER", hint: "The person who boots the ball", revealedIndex: 3 },
        { word: "PITCHER", hint: "The person who rolls the ball", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HOMEBASE", hint: "Where you score a run", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 29 - GARLIC
  // =============================================
  {
    category: "GARLIC",
    puzzleNumber: 29,
    amuseBouche: { word: "YUM", hint: "Expression of deliciousness", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BULB", hint: "The whole head of cloves", revealedIndex: 0 },
        { word: "CLOVE", hint: "One segment of the bulb", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MINCED", hint: "Finely chopped", revealedIndex: 3 },
        { word: "ROASTED", hint: "Cooked until soft and sweet", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "AROMATIC", hint: "Having a strong, pleasant smell", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 30 - VOLUNTEERS
  // =============================================
  {
    category: "VOLUNTEERS",
    puzzleNumber: 30,
    amuseBouche: { word: "AID", hint: "To assist or help", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HELP", hint: "To assist others", revealedIndex: 0 },
        { word: "SERVE", hint: "To give your time and effort", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "DONATE", hint: "To give freely", revealedIndex: 3 },
        { word: "INVOLVE", hint: "To participate actively", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "OUTREACH", hint: "Efforts to connect with communities", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 31 - HOT TEA
  // =============================================
  {
    category: "HOT TEA",
    puzzleNumber: 31,
    amuseBouche: { word: "CUP", hint: "Vessel for drinking", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BOIL", hint: "To heat water to bubbling", revealedIndex: 0 },
        { word: "SPOON", hint: "Used to stir in honey", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TEAPOT", hint: "A vessel for steeping", revealedIndex: 3 },
        { word: "SIPPING", hint: "Drinking slowly", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "STEAMING", hint: "Giving off hot vapor", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 32 - SHAKESPEARE
  // =============================================
  {
    category: "SHAKESPEARE",
    puzzleNumber: 32,
    amuseBouche: { word: "ACT", hint: "A division of a play", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PLAY", hint: "A theatrical performance", revealedIndex: 0 },
        { word: "STAGE", hint: "Where actors perform", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FAMOUS", hint: "Widely known and celebrated", revealedIndex: 3 },
        { word: "THEATER", hint: "A venue for dramatic arts", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EVERYONE", hint: "His works are for all people", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 33 - PENGUINS
  // =============================================
  {
    category: "PENGUINS",
    puzzleNumber: 33,
    amuseBouche: { word: "EGG", hint: "What penguins incubate", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DIVE", hint: "To plunge into the water", revealedIndex: 0 },
        { word: "PREEN", hint: "To groom feathers", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WADDLE", hint: "A side-to-side walk", revealedIndex: 3 },
        { word: "ROOKERY", hint: "A penguin nesting colony", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FEATHERS", hint: "Waterproof covering", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 34 - GETTING ORGANIZED
  // =============================================
  {
    category: "GETTING ORGANIZED",
    puzzleNumber: 34,
    amuseBouche: { word: "FIX", hint: "To arrange properly", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FIND", hint: "To locate something", revealedIndex: 0 },
        { word: "PLACE", hint: "A spot for everything", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "REDUCE", hint: "To minimize clutter", revealedIndex: 3 },
        { word: "CLUTTER", hint: "Messy, disorganized items", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PLANNING", hint: "Thinking ahead systematically", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 35 - SUPERHERO
  // =============================================
  {
    category: "SUPERHERO",
    puzzleNumber: 35,
    amuseBouche: { word: "POW", hint: "Comic book fight sound", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CAPE", hint: "A flowing garment worn on the back", revealedIndex: 0 },
        { word: "POWER", hint: "A special ability", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SECRET", hint: "A hidden identity", revealedIndex: 3 },
        { word: "COSTUME", hint: "A distinctive outfit", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DISGUISE", hint: "A way to hide who you are", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 36 - POETRY
  // =============================================
  {
    category: "POETRY",
    puzzleNumber: 36,
    amuseBouche: { word: "ODE", hint: "A type of lyric poem", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LOVE", hint: "A common poetic theme", revealedIndex: 0 },
        { word: "VERSE", hint: "A line or stanza", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RECITE", hint: "To speak aloud from memory", revealedIndex: 3 },
        { word: "RHYMING", hint: "Words that sound alike", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "METAPHOR", hint: "A comparison without like or as", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 37 - ANIMAL CRACKERS
  // =============================================
  {
    category: "ANIMAL CRACKERS",
    puzzleNumber: 37,
    amuseBouche: { word: "ZOO", hint: "Where you see wild animals", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LION", hint: "The king of the jungle", revealedIndex: 0 },
        { word: "TIGER", hint: "A striped big cat", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CIRCUS", hint: "Where these animals once performed", revealedIndex: 3 },
        { word: "CRUNCHY", hint: "Crisp and noisy to eat", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ELEPHANT", hint: "The largest land animal", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 38 - BARBECUE
  // =============================================
  {
    category: "BARBECUE",
    puzzleNumber: 38,
    amuseBouche: { word: "RUB", hint: "Spice mixture for meat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SLOW", hint: "Low and ___ cooking method", revealedIndex: 0 },
        { word: "GRILL", hint: "To cook over open flames", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SMOKER", hint: "Equipment for adding wood flavor", revealedIndex: 3 },
        { word: "COOKOUT", hint: "An outdoor gathering with food", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHARCOAL", hint: "Black briquettes for grilling", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 39 - APRIL SHOWERS
  // =============================================
  {
    category: "APRIL SHOWERS",
    puzzleNumber: 39,
    amuseBouche: { word: "WET", hint: "Covered with water", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RAIN", hint: "Water falling from clouds", revealedIndex: 0 },
        { word: "STORM", hint: "A weather disturbance", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GROWTH", hint: "What rain helps plants do", revealedIndex: 3 },
        { word: "FLOWERS", hint: "What May brings", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MOISTURE", hint: "Wetness in the air or soil", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 40 - HOAGIE
  // =============================================
  {
    category: "HOAGIE",
    puzzleNumber: 40,
    amuseBouche: { word: "SUB", hint: "Another name for this sandwich", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LONG", hint: "The shape of the roll", revealedIndex: 0 },
        { word: "BREAD", hint: "The base of any sandwich", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SALAMI", hint: "A popular Italian cold cut", revealedIndex: 3 },
        { word: "VEGGIES", hint: "Lettuce, tomato, onion", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "REGIONAL", hint: "Varies by location", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 41 - IRIS
  // =============================================
  {
    category: "IRIS",
    puzzleNumber: 41,
    amuseBouche: { word: "EYE", hint: "Part of the body named after this flower", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NEWS", hint: "Symbolic of good ----", revealedIndex: 0 },
        { word: "GREEK", hint: "Named after a goddess from this culture", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GARDEN", hint: "Where flowers grow", revealedIndex: 3 },
        { word: "BELGIUM", hint: "Yellow-iris is the symbol of Brussels-Capital Region of _______ ", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BLOOMING", hint: "In the process of flowering", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 42 - SHRIMP
  // =============================================
  {
    category: "SHRIMP",
    puzzleNumber: 42,
    amuseBouche: { word: "FRY", hint: "A cooking method", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LEGS", hint: "Shrimp have ten of these", revealedIndex: 0 },
        { word: "OCEAN", hint: "Where most shrimp live", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MANTIS", hint: "A type with powerful claws", revealedIndex: 3 },
        { word: "SEAFOOD", hint: "A category of ocean cuisine", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GRILLING", hint: "A popular cooking method", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 43 - INDULGE
  // =============================================
  {
    category: "INDULGE",
    puzzleNumber: 43,
    amuseBouche: { word: "SPA", hint: "A place to pamper yourself", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FEED", hint: "To satisfy a craving", revealedIndex: 0 },
        { word: "ALLOW", hint: "To permit yourself", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PAMPER", hint: "To treat yourself luxuriously", revealedIndex: 3 },
        { word: "IMPULSE", hint: "A sudden urge", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GENEROUS", hint: "Giving freely to yourself", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 44 - NURSE
  // =============================================
  {
    category: "NURSE",
    puzzleNumber: 44,
    amuseBouche: { word: "RN", hint: "Registered nurse abbreviation", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CARE", hint: "Compassionate attention", revealedIndex: 0 },
        { word: "TREAT", hint: "To provide medical help", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "HEALTH", hint: "Physical well-being", revealedIndex: 3 },
        { word: "MEDICAL", hint: "Related to medicine", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HOSPITAL", hint: "Where patients receive care", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 45 - CHICKEN DANCE
  // =============================================
  {
    category: "CHICKEN DANCE",
    puzzleNumber: 45,
    amuseBouche: { word: "BOP", hint: "To move to the beat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CLAP", hint: "To bring hands together", revealedIndex: 0 },
        { word: "POLKA", hint: "A lively European dance style", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WIGGLE", hint: "To move side to side", revealedIndex: 3 },
        { word: "WEDDING", hint: "Where this dance is often performed", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FEATHERS", hint: "What chickens are covered in", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 46 - HAT
  // =============================================
  {
    category: "HAT",
    puzzleNumber: 46,
    amuseBouche: { word: "CAP", hint: "A simple head covering", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BRIM", hint: "The edge that shades your face", revealedIndex: 0 },
        { word: "BERET", hint: "A soft, round French cap", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "COWBOY", hint: "A Western style with a wide brim", revealedIndex: 3 },
        { word: "HATBAND", hint: "A decorative strip around the crown", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SOMBRERO", hint: "A Mexican hat with a very wide brim", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 47 - MUSEUM
  // =============================================
  {
    category: "MUSEUM",
    puzzleNumber: 47,
    amuseBouche: { word: "ART", hint: "What's displayed on walls", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TOUR", hint: "A guided walk through exhibits", revealedIndex: 0 },
        { word: "GUIDE", hint: "Someone who explains the displays", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TICKET", hint: "Your pass for entry", revealedIndex: 3 },
        { word: "GALLERY", hint: "A room for displaying art", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ARTIFACT", hint: "A historical object on display", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 48 - MONEY TIPS
  // =============================================
  {
    category: "MONEY TIPS",
    puzzleNumber: 48,
    amuseBouche: { word: "PAY", hint: "To give money for something", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PLAN", hint: "A strategy for your finances", revealedIndex: 0 },
        { word: "ASSET", hint: "Something of value you own", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FRUGAL", hint: "Careful with spending", revealedIndex: 3 },
        { word: "INTEREST", hint: "What your savings can earn", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SAVINGS", hint: "Money set aside for later", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 49 - NOTEBOOK
  // =============================================
  {
    category: "NOTEBOOK",
    puzzleNumber: 49,
    amuseBouche: { word: "PEN", hint: "Writing tool", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MEMO", hint: "A short written note", revealedIndex: 0 },
        { word: "DIARY", hint: "A personal daily record", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LEDGER", hint: "A book for financial records", revealedIndex: 3 },
        { word: "JOURNAL", hint: "A place to write thoughts", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PORTABLE", hint: "Easy to carry around", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 50 - TURTLES
  // =============================================
  {
    category: "TURTLES",
    puzzleNumber: 50,
    amuseBouche: { word: "SEA", hint: "Where many turtles live", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BASK", hint: "To warm in the sun", revealedIndex: 0 },
        { word: "SHELL", hint: "The protective outer covering", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WISDOM", hint: "Often symbolized by these creatures", revealedIndex: 3 },
        { word: "ANCIENT", hint: "Very old, from long ago", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TORTOISE", hint: "A land-dwelling relative", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 51 - TAP DANCE
  // =============================================
  {
    category: "TAP DANCE",
    puzzleNumber: 51,
    amuseBouche: { word: "TAP", hint: "The sound shoes make", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLAP", hint: "A basic tap step", revealedIndex: 0 },
        { word: "BRUSH", hint: "A sweeping foot movement", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHANGE", hint: "A weight shift step", revealedIndex: 3 },
        { word: "HOOFING", hint: "Slang for tap dancing", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "RHYTHMIC", hint: "Having a regular beat", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 52 - COFFEE BREAK (duplicate - using different words)
  // =============================================
  {
    category: "NAPTIME",
    puzzleNumber: 52,
    amuseBouche: { word: "ZZZ", hint: "Sound of sleeping", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "REST", hint: "To relax and recover", revealedIndex: 0 },
        { word: "SLEEP", hint: "To close your eyes and doze", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PILLOW", hint: "Soft support for your head", revealedIndex: 3 },
        { word: "SNOOZE", hint: "A short, light sleep", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PEACEFUL", hint: "Calm and quiet", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 53 - GARDEN
  // =============================================
  {
    category: "GARDEN",
    puzzleNumber: 53,
    amuseBouche: { word: "DIG", hint: "To turn soil with a tool", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOIL", hint: "The ground where plants grow", revealedIndex: 0 },
        { word: "WATER", hint: "Essential for plant growth", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SHOVEL", hint: "A tool for digging", revealedIndex: 3 },
        { word: "HARVEST", hint: "To gather ripe crops", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FLOURISH", hint: "To grow vigorously", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 54 - BAKERY
  // =============================================
  {
    category: "BAKERY",
    puzzleNumber: 54,
    amuseBouche: { word: "BUN", hint: "A small bread roll", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OVEN", hint: "Where baked goods are cooked", revealedIndex: 0 },
        { word: "FLOUR", hint: "Ground grain used in baking", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PASTRY", hint: "A sweet or savory baked item", revealedIndex: 3 },
        { word: "FROSTED", hint: "Covered with sweet icing", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DELICIOUS", hint: "Extremely tasty", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 55 - PICNIC
  // =============================================
  {
    category: "PICNIC",
    puzzleNumber: 55,
    amuseBouche: { word: "ANT", hint: "Tiny insect at outdoor meals", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PARK", hint: "A common picnic location", revealedIndex: 0 },
        { word: "GRASS", hint: "What you sit on outdoors", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BASKET", hint: "Container for carrying food", revealedIndex: 3 },
        { word: "BLANKET", hint: "Something to sit on", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "OUTDOORS", hint: "In the open air", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 56 - COMPOST
  // =============================================
  {
    category: "COMPOST",
    puzzleNumber: 56,
    amuseBouche: { word: "ROT", hint: "What organic matter does over time", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOIL", hint: "What compost enriches", revealedIndex: 0 },
        { word: "MULCH", hint: "Material spread around plants", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MATTER", hint: "Organic ___ breaks down", revealedIndex: 3 },
        { word: "ORGANIC", hint: "Natural, from living things", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NUTRIENT", hint: "Food for plants", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 57 - BLUEBERRY
  // =============================================
  {
    category: "BLUEBERRY",
    puzzleNumber: 57,
    amuseBouche: { word: "JAM", hint: "A sweet fruit spread", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TART", hint: "Slightly sour taste", revealedIndex: 0 },
        { word: "BLOOM", hint: "The dusty coating on fresh ones", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BAKING", hint: "Used in muffins and pies", revealedIndex: 3 },
        { word: "AMERICA", hint: "Native to North ___", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SMOOTHIE", hint: "A blended drink", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 58 - TEACHER
  // =============================================
  {
    category: "TEACHER",
    puzzleNumber: 58,
    amuseBouche: { word: "ABC", hint: "Basics taught in school", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PLAN", hint: "To prepare lessons", revealedIndex: 0 },
        { word: "REACH", hint: "To connect with students", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LEADER", hint: "Someone who guides others", revealedIndex: 3 },
        { word: "INSPIRE", hint: "To motivate and encourage", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INSTRUCT", hint: "To teach or educate", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 59 - AUSTRALIA
  // =============================================
  {
    category: "AUSTRALIA",
    puzzleNumber: 59,
    amuseBouche: { word: "AUS", hint: "Common abbreviation for this country", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MATE", hint: "A friendly Aussie greeting", revealedIndex: 0 },
        { word: "KOALA", hint: "A tree-dwelling marsupial", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WOMBAT", hint: "A burrowing marsupial", revealedIndex: 3 },
        { word: "BARRIER", hint: "The Great ___ Reef", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "KANGAROO", hint: "A hopping marsupial", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 60 - BRACELET
  // =============================================
  {
    category: "BRACELET",
    puzzleNumber: 60,
    amuseBouche: { word: "ARM", hint: "Where a bracelet is worn", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LINK", hint: "A chain connection", revealedIndex: 0 },
        { word: "CHARM", hint: "A small decorative pendant", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TRENDY", hint: "Fashionable and popular", revealedIndex: 3 },
        { word: "TIFFANY", hint: "A famous jewelry brand", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "KEEPSAKE", hint: "A sentimental memento", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 61 - LADYBUG
  // =============================================
  {
    category: "LADYBUG",
    puzzleNumber: 61,
    amuseBouche: { word: "BUG", hint: "General term for this insect", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SPOT", hint: "A dot on the wings", revealedIndex: 0 },
        { word: "APHID", hint: "A pest that ladybugs eat", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BEETLE", hint: "The insect family", revealedIndex: 3 },
        { word: "BENEFIT", hint: "A helpful advantage", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LADYBIRD", hint: "British name for this insect", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 62 - GOTH
  // =============================================
  {
    category: "GOTH",
    puzzleNumber: 62,
    amuseBouche: { word: "EMO", hint: "A related music and style subculture", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PUNK", hint: "A rebellious music style", revealedIndex: 0 },
        { word: "MUSIC", hint: "Dark, atmospheric sound", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GOTHIC", hint: "Relating to dark aesthetics", revealedIndex: 3 },
        { word: "FASHION", hint: "Black clothing and makeup", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DRAMATIC", hint: "Theatrical and intense", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 63 - PACK RAT
  // =============================================
  {
    category: "PACK RAT",
    puzzleNumber: 63,
    amuseBouche: { word: "BOX", hint: "Where a pack rat stores the stash", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SAVE", hint: "To keep for later", revealedIndex: 0 },
        { word: "STOCK", hint: "To accumulate supplies", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GATHER", hint: "To collect together", revealedIndex: 3 },
        { word: "COLLECT", hint: "To acquire and keep", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ORGANIZE", hint: "To arrange systematically", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 64 - MEMORIAL
  // =============================================
  {
    category: "MEMORIAL",
    puzzleNumber: 64,
    amuseBouche: { word: "USA", hint: "A country honors this day", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLAG", hint: "Stars and stripes", revealedIndex: 0 },
        { word: "HONOR", hint: "To show respect", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WREATH", hint: "A circular flower arrangement", revealedIndex: 3 },
        { word: "SERVICE", hint: "Military duty", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "REMEMBER", hint: "To keep in memory", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 65 - TREES
  // =============================================
  {
    category: "TREES",
    puzzleNumber: 65,
    amuseBouche: { word: "OAK", hint: "A common, sturdy tree type", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ROOT", hint: "Underground support system", revealedIndex: 0 },
        { word: "SHADE", hint: "Cool relief from sun", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CANOPY", hint: "The leafy top layer", revealedIndex: 3 },
        { word: "CONIFER", hint: "A cone-bearing evergreen", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HARDWOOD", hint: "Dense timber from deciduous trees", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 66 - SUNSCREEN
  // =============================================
  {
    category: "SUNSCREEN",
    puzzleNumber: 66,
    amuseBouche: { word: "SPF", hint: "Sun Protection Factor label", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ZINC", hint: "A white mineral blocker", revealedIndex: 0 },
        { word: "CREAM", hint: "A thick lotion", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LOTION", hint: "A liquid skin protector", revealedIndex: 3 },
        { word: "REAPPLY", hint: "To put on again", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SUNBLOCK", hint: "Another term for SPF protection", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 67 - MINT
  // =============================================
  {
    category: "MINT",
    puzzleNumber: 67,
    amuseBouche: { word: "GUM", hint: "A chewy treat often mint-flavored", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COOL", hint: "A refreshing sensation", revealedIndex: 0 },
        { word: "BRISK", hint: "Sharp and invigorating", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "HERBAL", hint: "Made from plants", revealedIndex: 3 },
        { word: "REFRESH", hint: "To revive and renew", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TINGLING", hint: "A prickling sensation", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 68 - OUTDOORS
  // =============================================
  {
    category: "OUTDOORS",
    puzzleNumber: 68,
    amuseBouche: { word: "AIR", hint: "What's fresh outside", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OPEN", hint: "Exposed to the sky", revealedIndex: 0 },
        { word: "FRESH", hint: "Clean, unpolluted air", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "NATURE", hint: "The natural world", revealedIndex: 3 },
        { word: "COUNTRY", hint: "Rural landscapes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WILDLIFE", hint: "Animals in their habitat", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 69 - OUT
  // =============================================
  {
    category: "OUT",
    puzzleNumber: 69,
    amuseBouche: { word: "FUN", hint: "What summer break is all about", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PLAY", hint: "Time for fun", revealedIndex: 0 },
        { word: "BREAK", hint: "Time off from studies", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUMMER", hint: "The warm season vacation", revealedIndex: 3 },
        { word: "FREEDOM", hint: "Liberation from schedules", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GRADUATE", hint: "To complete school", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 70 - VACATIONS
  // =============================================
  {
    category: "VACATIONS",
    puzzleNumber: 70,
    amuseBouche: { word: "SUN", hint: "What you'll see plenty of", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HIKE", hint: "A nature walk", revealedIndex: 0 },
        { word: "CABIN", hint: "A rustic retreat", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CRUISE", hint: "A ship vacation", revealedIndex: 3 },
        { word: "FISHING", hint: "Catching aquatic life", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ROADTRIP", hint: "Driving adventure", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 71 - COCONUT
  // =============================================
  {
    category: "COCONUT",
    puzzleNumber: 71,
    amuseBouche: { word: "NUT", hint: "What a coconut technically is", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MILK", hint: "A creamy liquid", revealedIndex: 0 },
        { word: "SHELL", hint: "The hard outer layer", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BUTTER", hint: "A smooth spread", revealedIndex: 3 },
        { word: "DESSERT", hint: "Sweet treats like macaroons", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TROPICAL", hint: "From warm climates", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 72 - DINOSAUR
  // =============================================
  {
    category: "DINOSAUR",
    puzzleNumber: 72,
    amuseBouche: { word: "REX", hint: "Short for a famous dino", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BONE", hint: "Fossilized skeletal remains", revealedIndex: 0 },
        { word: "STUDY", hint: "Paleontology research", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FOSSIL", hint: "Preserved ancient remains", revealedIndex: 3 },
        { word: "EXTINCT", hint: "No longer existing", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SKELETON", hint: "Framework of bones", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 73 - ROTISSERIE
  // =============================================
  {
    category: "ROTISSERIE",
    puzzleNumber: 73,
    amuseBouche: { word: "HOT", hint: "Fresh off the spit", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FIRE", hint: "Cooking heat source", revealedIndex: 0 },
        { word: "SPICY", hint: "Flavorful seasoning", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TENDER", hint: "Soft and juicy", revealedIndex: 3 },
        { word: "ROASTED", hint: "Cooked on a spit", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SEASONED", hint: "Flavored with spices", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 74 - GRADUATION
  // =============================================
  {
    category: "GRADUATION",
    puzzleNumber: 74,
    amuseBouche: { word: "CAP", hint: "Worn with a tassel", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GOWN", hint: "Academic robe", revealedIndex: 0 },
        { word: "MARCH", hint: "Walk in ceremony", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CONFER", hint: "Grant a degree", revealedIndex: 3 },
        { word: "DIPLOMA", hint: "Certificate of completion", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CEREMONY", hint: "Formal celebration", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 75 - HUG YOUR CAT
  // =============================================
  {
    category: "HUG YOUR CAT",
    puzzleNumber: 75,
    amuseBouche: { word: "PET", hint: "What you do to a cat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PURR", hint: "Contented vibration", revealedIndex: 0 },
        { word: "BLINK", hint: "Slow eye gesture of trust", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CUDDLE", hint: "Snuggle close", revealedIndex: 3 },
        { word: "SNUGGLE", hint: "Cozy embrace", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BISCUITS", hint: "Kneading paws motion", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 76 - BALLOON
  // =============================================
  {
    category: "BALLOON",
    puzzleNumber: 76,
    amuseBouche: { word: "SKY", hint: "Where a balloon floats", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FUEL", hint: "Propane heat source", revealedIndex: 0 },
        { word: "NYLON", hint: "Envelope fabric", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BASKET", hint: "Wicker passenger container", revealedIndex: 3 },
        { word: "SUNRISE", hint: "Best flying time", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BUOYANCY", hint: "Floating force", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 77 - DRIVE IN
  // =============================================
  {
    category: "DRIVE IN",
    puzzleNumber: 77,
    amuseBouche: { word: "CAR", hint: "Where you watch from", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FOOD", hint: "Snacks and concessions", revealedIndex: 0 },
        { word: "RETRO", hint: "Vintage nostalgia", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CINEMA", hint: "Movie theater", revealedIndex: 3 },
        { word: "SPEAKER", hint: "Audio device", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TAILGATE", hint: "Back of truck viewing", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 78 - VCR
  // =============================================
  {
    category: "VCR",
    puzzleNumber: 78,
    amuseBouche: { word: "REC", hint: "Button to start recording", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STOP", hint: "End playback", revealedIndex: 0 },
        { word: "PAUSE", hint: "Temporary halt", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "REWIND", hint: "Go backwards", revealedIndex: 3 },
        { word: "FORWARD", hint: "Skip ahead", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PLAYBACK", hint: "Watch recorded content", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 79 - FRIENDS
  // =============================================
  {
    category: "FRIENDS",
    puzzleNumber: 79,
    amuseBouche: { word: "PAL", hint: "Another word for buddy", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEST", hint: "Closest companion", revealedIndex: 0 },
        { word: "BUDDY", hint: "Informal pal", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPIRIT", hint: "Kindred soul", revealedIndex: 3 },
        { word: "KINDRED", hint: "Similar nature", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SIDEKICK", hint: "Loyal partner", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 80 - DUCKS
  // =============================================
  {
    category: "DUCKS",
    puzzleNumber: 80,
    amuseBouche: { word: "WEB", hint: "Feature between duck toes", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TEAL", hint: "A blue-green duck species", revealedIndex: 0 },
        { word: "DRAKE", hint: "A male duck", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WADDLE", hint: "Walking motion", revealedIndex: 3 },
        { word: "MALLARD", hint: "Common duck species", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DUCKLING", hint: "Baby duck", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 81 - ICED TEA
  // =============================================
  {
    category: "ICED TEA",
    puzzleNumber: 81,
    amuseBouche: { word: "ICE", hint: "What makes this tea cold", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COLD", hint: "Chilled beverage", revealedIndex: 0 },
        { word: "SWEET", hint: "Sugary Southern style", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUMMER", hint: "Peak season drink", revealedIndex: 3 },
        { word: "PITCHER", hint: "Large serving container", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GARNISH", hint: "Lemon or mint decoration", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 82 - CORN
  // =============================================
  {
    category: "CORN",
    puzzleNumber: 82,
    amuseBouche: { word: "COB", hint: "The core corn grows on", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HUSK", hint: "Outer protective layer", revealedIndex: 0 },
        { word: "SWEET", hint: "Sugary variety", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "KERNEL", hint: "Individual corn seed", revealedIndex: 3 },
        { word: "PLATTER", hint: "Serving dish", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BUTTERED", hint: "Topped with spread", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 83 - RED ROSES
  // =============================================
  {
    category: "RED ROSES",
    puzzleNumber: 83,
    amuseBouche: { word: "RED", hint: "The classic rose color", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RUBY", hint: "Deep red gemstone color", revealedIndex: 0 },
        { word: "SCENT", hint: "Fragrant aroma", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "VELVET", hint: "Soft petal texture", revealedIndex: 3 },
        { word: "BOUQUET", hint: "Flower arrangement", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DEVOTION", hint: "Symbolic meaning", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 84 - SEWING MACHINE
  // =============================================
  {
    category: "SEWING MACHINE",
    puzzleNumber: 84,
    amuseBouche: { word: "HEM", hint: "A folded and sewn edge", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FEED", hint: "Fabric movement mechanism", revealedIndex: 0 },
        { word: "WHEEL", hint: "Hand control dial", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "THREAD", hint: "Stitching material", revealedIndex: 3 },
        { word: "TENSION", hint: "Thread tightness control", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BACKTACK", hint: "Reverse stitch to secure", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 85 - FLAGS
  // =============================================
  {
    category: "FLAGS",
    puzzleNumber: 85,
    amuseBouche: { word: "FLY", hint: "What flags do in the wind", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JACK", hint: "Naval or national flag", revealedIndex: 0 },
        { word: "HOIST", hint: "Raise up a flagpole", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BANNER", hint: "Large decorative flag", revealedIndex: 3 },
        { word: "PENNANT", hint: "Triangular flag", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TRICOLOR", hint: "Three-color flag design", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 86 - FLY A KITE
  // =============================================
  {
    category: "FLY A KITE",
    puzzleNumber: 86,
    amuseBouche: { word: "ARC", hint: "The curved path a kite can make", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GUST", hint: "Strong wind burst", revealedIndex: 0 },
        { word: "GLIDE", hint: "Smooth air movement", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "STRING", hint: "Control line", revealedIndex: 3 },
        { word: "CONTROL", hint: "Directional steering", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DOWNWIND", hint: "With the breeze", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 87 - VEGETABLES
  // =============================================
  {
    category: "VEGETABLES",
    puzzleNumber: 87,
    amuseBouche: { word: "RAW", hint: "Uncooked and fresh", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FARM", hint: "Growing location", revealedIndex: 0 },
        { word: "CRISP", hint: "Crunchy texture", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GARDEN", hint: "Home growing plot", revealedIndex: 3 },
        { word: "ORGANIC", hint: "Pesticide-free produce", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COLORFUL", hint: "Rainbow of hues", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 88 - APPLE STRUDEL
  // =============================================
  {
    category: "APPLE STRUDEL",
    puzzleNumber: 88,
    amuseBouche: { word: "PIE", hint: "A cousin dessert of strudel", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WARM", hint: "Fresh from the oven", revealedIndex: 0 },
        { word: "FLAKY", hint: "Crispy layered pastry", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PASTRY", hint: "Dough dessert", revealedIndex: 3 },
        { word: "RAISINS", hint: "Dried fruit filling", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TURNOVER", hint: "Folded pastry type", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 89 - TREAT YOURSELF
  // =============================================
  {
    category: "TREAT YOURSELF",
    puzzleNumber: 89,
    amuseBouche: { word: "SPA", hint: "A place to pamper yourself", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "REST", hint: "Take a break", revealedIndex: 0 },
        { word: "ALLOW", hint: "Give yourself permission", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PAMPER", hint: "Indulge in self-care", revealedIndex: 3 },
        { word: "INDULGE", hint: "Enjoy without guilt", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SPLURGES", hint: "Small luxuries", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 90 - JUNETEENTH
  // =============================================
  {
    category: "JUNETEENTH",
    puzzleNumber: 90,
    amuseBouche: { word: "JOY", hint: "What celebrations bring", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FREE", hint: "Liberation from slavery", revealedIndex: 0 },
        { word: "UNITY", hint: "Coming together", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PARADE", hint: "Celebratory march", revealedIndex: 3 },
        { word: "JUBILEE", hint: "Joyful celebration", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HERITAGE", hint: "Cultural legacy", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 91 - MILKSHAKES
  // =============================================
  {
    category: "MILKSHAKES",
    puzzleNumber: 91,
    amuseBouche: { word: "ICY", hint: "Frosty and cold", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COLD", hint: "Icy temperature", revealedIndex: 0 },
        { word: "DENSE", hint: "Thick consistency", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FROTHY", hint: "Foamy texture", revealedIndex: 3 },
        { word: "COMFORT", hint: "Nostalgic treat", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CLASSICS", hint: "Traditional flavors", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 92 - SKATEBOARDING
  // =============================================
  {
    category: "SKATEBOARDING",
    puzzleNumber: 92,
    amuseBouche: { word: "SK8", hint: "Common shorthand for this sport", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GEAR", hint: "Protective equipment", revealedIndex: 0 },
        { word: "WHEEL", hint: "Rolling component", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TRICKS", hint: "Skilled maneuvers", revealedIndex: 3 },
        { word: "BALANCE", hint: "Staying upright", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SIDEWALK", hint: "Urban riding surface", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 93 - ONION RINGS
  // =============================================
  {
    category: "ONION RINGS",
    puzzleNumber: 93,
    amuseBouche: { word: "FRY", hint: "How onion rings are cooked", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "AIRY", hint: "Light and crispy", revealedIndex: 0 },
        { word: "SALTY", hint: "Savory seasoning", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GOLDEN", hint: "Fried color", revealedIndex: 3 },
        { word: "BREADED", hint: "Coated in batter", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "VIDALIA", hint: "Sweet onion variety", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 94 - PUBLIC SERVICE
  // =============================================
  {
    category: "PUBLIC SERVICE",
    puzzleNumber: 94,
    amuseBouche: { word: "JOB", hint: "What public servants do", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HERO", hint: "Community champion", revealedIndex: 0 },
        { word: "TRUST", hint: "Public confidence", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "IMPACT", hint: "Positive influence", revealedIndex: 3 },
        { word: "SERVICE", hint: "Helping others", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DEDICATE", hint: "Commit to a cause", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 95 - SWIMMING
  // =============================================
  {
    category: "SWIMMING",
    puzzleNumber: 95,
    amuseBouche: { word: "LAP", hint: "One trip across the pool", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PACE", hint: "Speed control", revealedIndex: 0 },
        { word: "BUDDY", hint: "Safety partner", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LENGTH", hint: "Pool distance", revealedIndex: 3 },
        { word: "GOGGLES", hint: "Eye protection", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TRAINING", hint: "Skill development", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 96 - BEATLES
  // =============================================
  {
    category: "BEATLES",
    puzzleNumber: 96,
    amuseBouche: { word: "FAB", hint: "The ___ Four", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FOUR", hint: "Number of members", revealedIndex: 0 },
        { word: "ABBEY", hint: "___ Road studio", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TALENT", hint: "Musical genius", revealedIndex: 3 },
        { word: "PIONEER", hint: "Innovative leaders", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TIMELESS", hint: "Forever relevant", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 97 - CANOE
  // =============================================
  {
    category: "CANOE",
    puzzleNumber: 97,
    amuseBouche: { word: "OAR", hint: "A paddle's cousin", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CREW", hint: "Paddling team", revealedIndex: 0 },
        { word: "KAYAK", hint: "Similar watercraft", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PADDLE", hint: "Propulsion tool", revealedIndex: 3 },
        { word: "ROWBOAT", hint: "Another small boat", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CURRENTS", hint: "Water flow patterns", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 98 - PINEAPPLE
  // =============================================
  {
    category: "PINEAPPLE",
    puzzleNumber: 98,
    amuseBouche: { word: "TOP", hint: "The spiky crown of this fruit", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RING", hint: "Sliced circle shape", revealedIndex: 0 },
        { word: "CHUNK", hint: "Cut pieces", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "HAWAII", hint: "Associated location", revealedIndex: 3 },
        { word: "SMOOTHIE", hint: "Blended drink", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TROPICAL", hint: "Warm climate fruit", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 99 - LOG CABIN
  // =============================================
  {
    category: "LOG CABIN",
    puzzleNumber: 99,
    amuseBouche: { word: "LOG", hint: "What the cabin is built from", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CAMP", hint: "Rustic retreat", revealedIndex: 0 },
        { word: "LODGE", hint: "Wilderness shelter", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RUSTIC", hint: "Simple, natural style", revealedIndex: 3 },
        { word: "COTTAGE", hint: "Small dwelling", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SECLUDED", hint: "Isolated location", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 100 - CAMERA
  // =============================================
  {
    category: "CAMERA",
    puzzleNumber: 100,
    amuseBouche: { word: "PIC", hint: "Slang for a photograph", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LENS", hint: "Focus element", revealedIndex: 0 },
        { word: "FOCUS", hint: "Sharpness adjustment", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TRIPOD", hint: "Stabilizing stand", revealedIndex: 3 },
        { word: "SHUTTER", hint: "Exposure control", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EXPOSURE", hint: "Light measurement", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 101 - METEOR
  // =============================================
  {
    category: "METEOR",
    puzzleNumber: 101,
    amuseBouche: { word: "ZAP", hint: "The flash of a meteor burning up", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STAR", hint: "Shooting ___", revealedIndex: 0 },
        { word: "COMET", hint: "Similar space object", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SHOWER", hint: "Multiple meteors", revealedIndex: 3 },
        { word: "RADIANT", hint: "Apparent origin point; very bright", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FIREBALL", hint: "Extremely bright orb; flaming meteor", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 102 - COLD TREATS
  // =============================================
  {
    category: "COLD TREATS",
    puzzleNumber: 102,
    amuseBouche: { word: "TUB", hint: "Container ice cream comes in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CONE", hint: "Waffle or sugar holder", revealedIndex: 0 },
        { word: "SCOOP", hint: "Round serving portion", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUNDAE", hint: "Ice cream with toppings", revealedIndex: 3 },
        { word: "POPSICLE", hint: "Frozen treat on a stick", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SANDWICH", hint: "Ice cream between cookies", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 103 - UFO
  // =============================================
  {
    category: "UFO",
    puzzleNumber: 103,
    amuseBouche: { word: "UFO", hint: "Common abbreviation for the unexplained", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "AREA", hint: "Nevada's mysterious Zone 51", revealedIndex: 0 },
        { word: "DRONE", hint: "Unmanned aerial vehicle", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CIRCLE", hint: "Crop formation shape", revealedIndex: 3 },
        { word: "LANDING", hint: "Touching down", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SIGHTING", hint: "Reported observation", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 104 - COMPLIMENT
  // =============================================
  {
    category: "COMPLIMENT",
    puzzleNumber: 104,
    amuseBouche: { word: "YOU", hint: "Who deserves the compliment", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "KIND", hint: "Gentle and caring", revealedIndex: 0 },
        { word: "BOOST", hint: "Lift your confidence", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ENOUGH", hint: "You are more than ___", revealedIndex: 3 },
        { word: "CAPABLE", hint: "Able and competent", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "STRENGTH", hint: "Inner power", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 105 - BARBECUE
  // =============================================
  {
    category: "BARBECUE",
    puzzleNumber: 105,
    amuseBouche: { word: "BBQ", hint: "Common abbreviation for this cooking style", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RACK", hint: "Full slab of ribs", revealedIndex: 0 },
        { word: "TANGY", hint: "Sharp, zesty flavor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GLAZED", hint: "Coated in sticky sauce", revealedIndex: 3 },
        { word: "SMOKING", hint: "Low and slow cooking method", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MARINADE", hint: "Flavor-soaking liquid", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 106 - TURNOVER
  // =============================================
  {
    category: "TURNOVER",
    puzzleNumber: 106,
    amuseBouche: { word: "PIE", hint: "A cousin dessert of the turnover", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PUFF", hint: "Flaky pastry type", revealedIndex: 0 },
        { word: "BAKED", hint: "Oven cooked", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FOLDED", hint: "Pastry technique", revealedIndex: 3 },
        { word: "BUTTERY", hint: "Rich, smooth flavor", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PORTABLE", hint: "Easy to carry and eat", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 107 - CHOCOLATE KISSES
  // =============================================
  {
    category: "CHOCOLATE KISSES",
    puzzleNumber: 107,
    amuseBouche: { word: "HUG", hint: "A kiss's affectionate cousin", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FOIL", hint: "Shiny wrapper", revealedIndex: 0 },
        { word: "COCOA", hint: "Chocolate base ingredient", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "NUGGET", hint: "Small bite-sized piece", revealedIndex: 3 },
        { word: "TEARDROP", hint: "Classic shape", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HERSHEY", hint: "Famous chocolate brand", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 108 - TRUTH
  // =============================================
  {
    category: "TRUTH",
    puzzleNumber: 108,
    amuseBouche: { word: "FIB", hint: "What you should NOT tell", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WITH", hint: "Level ___ me", revealedIndex: 0 },
        { word: "FRANK", hint: "Open and honest", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CANDOR", hint: "Honest, direct speech", revealedIndex: 3 },
        { word: "STRAIGHT", hint: "Give it to me ___", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ACCURATE", hint: "Correct and truthful", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 109 - ALMONDS
  // =============================================
  {
    category: "ALMONDS",
    puzzleNumber: 109,
    amuseBouche: { word: "RAW", hint: "One way almonds are sold", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BARK", hint: "Chocolate almond treat", revealedIndex: 0 },
        { word: "WHOLE", hint: "Unsliced nut", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SALTED", hint: "Classic seasoning", revealedIndex: 3 },
        { word: "SLIVERED", hint: "Thinly sliced pieces", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BLANCHED", hint: "Skin-removed almonds", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 110 - SUGAR COOKIE
  // =============================================
  {
    category: "SUGAR COOKIE",
    puzzleNumber: 110,
    amuseBouche: { word: "PIN", hint: "Rolling ___", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ROLL", hint: "Flatten the dough", revealedIndex: 2 },
        { word: "DOUGH", hint: "Unbaked mixture", revealedIndex: 3 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CUTTER", hint: "Shape-making tool", revealedIndex: 0 },
        { word: "CRUMBLY", hint: "Delicate texture", revealedIndex: 4 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CRUMBLY", hint: "Delicate texture", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 111 - FRENCH FRIES
  // =============================================
  {
    category: "FRENCH FRIES",
    puzzleNumber: 111,
    amuseBouche: { word: "FRY", hint: "How French fries are cooked", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CHIPS", hint: "British name for fries", revealedIndex: 0 },
        { word: "WEDGE", hint: "Thick-cut potato style", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WAFFLE", hint: "Grid-patterned fry cut", revealedIndex: 3 },
        { word: "CRUNCHY", hint: "Crispy texture", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SEASONED", hint: "Flavored with spices", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 112 - BLUEBERRY MUFFIN
  // =============================================
  {
    category: "BLUEBERRY MUFFIN",
    puzzleNumber: 112,
    amuseBouche: { word: "CUP", hint: "Muffin ___ liner", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WARM", hint: "Fresh from the oven", revealedIndex: 0 },
        { word: "BAKED", hint: "Oven cooked", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RECIPE", hint: "Baking instructions", revealedIndex: 3 },
        { word: "TEATIME", hint: "Afternoon snack time", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HOMEMADE", hint: "Made from scratch", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 113 - MALALA
  // =============================================
  {
    category: "MALALA",
    puzzleNumber: 113,
    amuseBouche: { word: "ACT", hint: "Standing up for a cause", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GIRL", hint: "Champion for g _ _ _ s' rights", revealedIndex: 0 },
        { word: "NOBEL", hint: "___ Peace Prize winner", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RIGHTS", hint: "Human equality", revealedIndex: 3 },
        { word: "ADVOCATE", hint: "Passionate supporter", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EQUALITY", hint: "Fair treatment for all", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 114 - HEAT WAVE
  // =============================================
  {
    category: "HEAT WAVE",
    puzzleNumber: 114,
    amuseBouche: { word: "SUN", hint: "Source of the heat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BOIL", hint: "Reach maximum heat", revealedIndex: 0 },
        { word: "SWEAT", hint: "Body's cooling system", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SCORCH", hint: "Burn from intense heat", revealedIndex: 3 },
        { word: "SWELTER", hint: "Suffer in the heat", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BLISTERS", hint: "Skin reaction to heat", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 115 - POPSICLES
  // =============================================
  {
    category: "POPSICLES",
    puzzleNumber: 115,
    amuseBouche: { word: "ICE", hint: "What a popsicle is made of", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COLD", hint: "Icy temperature", revealedIndex: 0 },
        { word: "STICKY", hint: "Melting residue", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FROZEN", hint: "Solid from cold", revealedIndex: 3 },
        { word: "MELTING", hint: "Dripping on a hot day", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NONDAIRY", hint: "No milk ingredients", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 116 - HUSHPUPPIES
  // =============================================
  {
    category: "HUSHPUPPIES",
    puzzleNumber: 116,
    amuseBouche: { word: "OIL", hint: "What they're fried in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SIDE", hint: "Accompaniment dish", revealedIndex: 0 },
        { word: "FRIED", hint: "Deep-cooked in oil", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CRISPY", hint: "Crunchy exterior", revealedIndex: 3 },
        { word: "FRITTER", hint: "Fried batter cake", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CORNMEAL", hint: "Main ingredient", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 117 - CHERRIES
  // =============================================
  {
    category: "CHERRIES",
    puzzleNumber: 117,
    amuseBouche: { word: "PIT", hint: "The hard center of a cherry", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BING", hint: "Popular dark variety", revealedIndex: 0 },
        { word: "BLACK", hint: "Dark sweet variety", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CANNED", hint: "Preserved in syrup", revealedIndex: 3 },
        { word: "ORCHARD", hint: "Where they are grown", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BURGUNDY", hint: "Deep red wine color", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 118 - EMOJI
  // =============================================
  {
    category: "EMOJI",
    puzzleNumber: 118,
    amuseBouche: { word: "LOL", hint: "A popular text reaction", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FIRE", hint: "🔥 popular reaction", revealedIndex: 0 },
        { word: "HEART", hint: "❤️ universal symbol", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SMILEY", hint: "😊 classic expression", revealedIndex: 3 },
        { word: "PANCAKE", hint: "🥞 our favorite!", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SPARKLES", hint: "✨ magical shimmer", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 119 - NELSON MANDELA
  // =============================================
  {
    category: "NELSON MANDELA",
    puzzleNumber: 119,
    amuseBouche: { word: "ANC", hint: "The political party he led", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FREE", hint: "Liberation from apartheid", revealedIndex: 0 },
        { word: "UNITY", hint: "Bringing people together", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LEGACY", hint: "Lasting impact", revealedIndex: 3 },
        { word: "JUSTICE", hint: "Fairness and equality", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EQUALITY", hint: "Equal rights for all", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 120 - ICE CREAM
  // =============================================
  {
    category: "ICE CREAM",
    puzzleNumber: 120,
    amuseBouche: { word: "COW", hint: "Source of the cream", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MELT", hint: "What happens in the sun", revealedIndex: 0 },
        { word: "SCOOP", hint: "Round serving portion", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLAVOR", hint: "Taste variety", revealedIndex: 3 },
        { word: "REFRESH", hint: "Cool and revive", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "VANILLA", hint: "Most popular flavor", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 121 - MOON DAY
  // =============================================
  {
    category: "MOON DAY",
    puzzleNumber: 121,
    amuseBouche: { word: "SKY", hint: "Where the moon shines", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STEP", hint: "One giant leap", revealedIndex: 0 },
        { word: "LUNAR", hint: "Relating to the moon", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "APOLLO", hint: "Historic space program", revealedIndex: 3 },
        { word: "MISSION", hint: "Space journey goal", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COLUMBIA", hint: "Apollo 11 command module", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 122 - JUNK FOOD
  // =============================================
  {
    category: "JUNK FOOD",
    puzzleNumber: 122,
    amuseBouche: { word: "FAT", hint: "What junk food is high in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CHIP", hint: "Crispy snack", revealedIndex: 0 },
        { word: "CANDY", hint: "Sweet treat", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GREASY", hint: "Oily texture", revealedIndex: 3 },
        { word: "INDULGE", hint: "Give in to cravings", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DECADENT", hint: "Luxuriously rich", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 123 - HAMMOCK
  // =============================================
  {
    category: "HAMMOCK",
    puzzleNumber: 123,
    amuseBouche: { word: "TIE", hint: "How a hammock is secured", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HANG", hint: "Suspend between two points", revealedIndex: 0 },
        { word: "SWING", hint: "Gentle back and forth motion", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SNOOZE", hint: "Take a light nap", revealedIndex: 3 },
        { word: "COMFORT", hint: "Cozy relaxation", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHILLING", hint: "Laid-back lounging", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 124 - VANILLA ICE CREAM
  // =============================================
  {
    category: "VANILLA ICE CREAM",
    puzzleNumber: 124,
    amuseBouche: { word: "ICY", hint: "Cold and frosty", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEAN", hint: "Source of vanilla flavor", revealedIndex: 0 },
        { word: "SCOOP", hint: "Round serving portion", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FRENCH", hint: "Custard-based style", revealedIndex: 3 },
        { word: "CLASSIC", hint: "Timeless favorite", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SANDWICH", hint: "Ice cream between cookies", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 125 - JOKE
  // =============================================
  {
    category: "JOKE",
    puzzleNumber: 125,
    amuseBouche: { word: "FUN", hint: "What a good joke brings", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "QUIP", hint: "Clever witty remark", revealedIndex: 0 },
        { word: "CRACK", hint: "Tell a joke", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "COMEDY", hint: "Humor genre", revealedIndex: 3 },
        { word: "COMICAL", hint: "Amusingly funny", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CORNBALL", hint: "Cheesy, corny humor", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 126 - CAROUSEL
  // =============================================
  {
    category: "CAROUSEL",
    puzzleNumber: 126,
    amuseBouche: { word: "TOP", hint: "Another spinning toy", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FAIR", hint: "Amusement event", revealedIndex: 0 },
        { word: "MUSIC", hint: "Calliope sounds", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ANIMAL", hint: "Horse or other ride figure", revealedIndex: 3 },
        { word: "CHARIOT", hint: "Carriage-style ride", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CARNIVAL", hint: "Traveling amusement show", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 127 - BAGELS
  // =============================================
  {
    category: "BAGELS",
    puzzleNumber: 127,
    amuseBouche: { word: "LOX", hint: "Classic bagel topping (smoked salmon)", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOFT", hint: "Fresh-baked texture", revealedIndex: 0 },
        { word: "CHEWY", hint: "Dense satisfying bite", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GARLIC", hint: "Savory popular variety", revealedIndex: 3 },
        { word: "BOILING", hint: "Key step before baking", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CINNAMON", hint: "Sweet spiced variety", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 128 - BAGPIPES
  // =============================================
  {
    category: "BAGPIPES",
    puzzleNumber: 128,
    amuseBouche: { word: "AIR", hint: "What powers the pipes", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WIND", hint: "Air-powered instrument", revealedIndex: 0 },
        { word: "PIPER", hint: "Bagpipe player", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SCOTCH", hint: "Scottish heritage", revealedIndex: 3 },
        { word: "MUSICAL", hint: "Relating to music", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HIGHLAND", hint: "Scottish region", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 129 - MILK CHOCOLATE
  // =============================================
  {
    category: "MILK CHOCOLATE",
    puzzleNumber: 129,
    amuseBouche: { word: "BAR", hint: "A solid piece of chocolate", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MELT", hint: "Dissolves on your tongue", revealedIndex: 0 },
        { word: "COCOA", hint: "Chocolate base ingredient", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SMOOTH", hint: "Silky texture", revealedIndex: 3 },
        { word: "TEXTURE", hint: "Creamy mouthfeel", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DECADENT", hint: "Luxuriously rich", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 130 - TIGERS
  // =============================================
  {
    category: "TIGERS",
    puzzleNumber: 130,
    amuseBouche: { word: "CUB", hint: "A baby tiger", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CLAW", hint: "Sharp retractable nail", revealedIndex: 0 },
        { word: "TEETH", hint: "Powerful fangs", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BENGAL", hint: "Most common tiger subspecies", revealedIndex: 3 },
        { word: "STRIPED", hint: "Unique coat pattern", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SOLITARY", hint: "Prefers to live alone", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 131 - PAPERBACK BOOKS
  // =============================================
  {
    category: "PAPERBACK BOOKS",
    puzzleNumber: 131,
    amuseBouche: { word: "LIT", hint: "Short for literature", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOFT", hint: "Flexible cover material", revealedIndex: 0 },
        { word: "BEACH", hint: "Perfect summer reading location", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CLASSIC", hint: "Timeless literary work", revealedIndex: 3 },
        { word: "PENGUIN", hint: "Large and famous paperback publisher", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PORTABLE", hint: "Easy to carry anywhere", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 132 - AVOCADO
  // =============================================
  {
    category: "AVOCADO",
    puzzleNumber: 132,
    amuseBouche: { word: "DIP", hint: "Guacamole is a popular ___", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HASS", hint: "Most popular variety", revealedIndex: 0 },
        { word: "TOAST", hint: "Trendy breakfast topping", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SLICED", hint: "Cut into pieces", revealedIndex: 3 },
        { word: "CHOPPED", hint: "Diced for salsa or salad", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CILANTRO", hint: "Common fresh herb pairing; some say tastes soapy", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 133 - MTV
  // =============================================
  {
    category: "MTV",
    puzzleNumber: 133,
    amuseBouche: { word: "MTV", hint: "The channel's own abbreviation", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WANT", hint: "I ___ my MTV!", revealedIndex: 0 },
        { word: "VIDEO", hint: "___ Killed the Radio Star song", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CONCERT", hint: "Live music performance", revealedIndex: 3 },
        { word: "POPULAR", hint: "Mainstream, well-liked, and trendy", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CULTURE", hint: "Pop ___ influence", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 134 - COLORING BOOK
  // =============================================
  {
    category: "COLORING BOOK",
    puzzleNumber: 134,
    amuseBouche: { word: "ART", hint: "What coloring is a form of", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PAGE", hint: "Single sheet to color", revealedIndex: 0 },
        { word: "RELAX", hint: "Calming activity helps you ______", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CRAYON", hint: "Waxy coloring tool", revealedIndex: 3 },
        { word: "PIGMENT", hint: "Color-giving substance", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BLENDING", hint: "Mixing colors together", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 135 - WATERMELON
  // =============================================
  {
    category: "WATERMELON",
    puzzleNumber: 135,
    amuseBouche: { word: "RED", hint: "The color of ripe watermelon flesh", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RIND", hint: "Green striped outer layer", revealedIndex: 0 },
        { word: "CHILL", hint: "Serve it cold", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PICNIC", hint: "Outdoor summer meal", revealedIndex: 3 },
        { word: "REFRESH", hint: "Cool and reviving", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "OUTDOORS", hint: "Perfect summer setting", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 136 - CHOCOLATE CHIP COOKIES
  // =============================================
  {
    category: "CHOCOLATE CHIP COOKIES",
    puzzleNumber: 136,
    amuseBouche: { word: "JAR", hint: "Where cookies are kept", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BAKE", hint: "Cook in the oven", revealedIndex: 0 },
        { word: "GOOEY", hint: "Soft and melty center", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RECIPE", hint: "Baking instructions", revealedIndex: 3 },
        { word: "CRUMBLY", hint: "Messy delicate texture", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BAKEWARE", hint: "Pans and sheets", revealedIndex: 2 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 137 - TRAFFIC LIGHT
  // =============================================
  {
    category: "TRAFFIC LIGHT",
    puzzleNumber: 137,
    amuseBouche: { word: "RED", hint: "Stop color", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLOW", hint: "Smooth movement of vehicles", revealedIndex: 0 },
        { word: "SAFER", hint: "More protected", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SIGNAL", hint: "Visual indicator", revealedIndex: 3 },
        { word: "CONTROL", hint: "Manage the intersection", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FLASHING", hint: "Blinking warning light", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 138 - FARMWORKER APPRECIATION
  // =============================================
  {
    category: "FARMWORKER APPRECIATION",
    puzzleNumber: 138,
    amuseBouche: { word: "JOB", hint: "What farmworkers do every day", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HERO", hint: "Champion", revealedIndex: 0 },
        { word: "EXERT", hint: "Apply great effort", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "UNSUNG", hint: "Not given enough credit", revealedIndex: 3 },
        { word: "HARVEST", hint: "Gathering of crops", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ECONOMIC", hint: "Relating to the economy", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 139 - LIGHTHOUSES
  // =============================================
  {
    category: "LIGHTHOUSES",
    puzzleNumber: 139,
    amuseBouche: { word: "SEA", hint: "Where lighthouses stand guard", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LENS", hint: "Light-focusing element", revealedIndex: 0 },
        { word: "GUIDE", hint: "Lead or direct safely", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BEACON", hint: "Guiding light signal", revealedIndex: 3 },
        { word: "LANTERN", hint: "Top light chamber", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NAVIGATE", hint: "Find your way at sea", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 140 - HAPPINESS
  // =============================================
  {
    category: "HAPPINESS",
    puzzleNumber: 140,
    amuseBouche: { word: "JOY", hint: "A simple word for happiness", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GLEE", hint: "Joyful delight", revealedIndex: 0 },
        { word: "BLISS", hint: "Perfect happiness", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "THRILL", hint: "Exciting pleasure", revealedIndex: 3 },
        { word: "DELIGHT", hint: "Great pleasure", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "JUBILANT", hint: "Feeling great joy", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 141 - RICE PUDDING
  // =============================================
  {
    category: "RICE PUDDING",
    puzzleNumber: 141,
    amuseBouche: { word: "POT", hint: "Where rice pudding simmers", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MILK", hint: "Creamy base liquid", revealedIndex: 0 },
        { word: "SUGAR", hint: "Sweetening ingredient", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPICES", hint: "Cinnamon or nutmeg additions", revealedIndex: 3 },
        { word: "ROYALTY", hint: "Kings and queens", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CARDAMOM", hint: "Aromatic spice often used", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 142 - S'MORES
  // =============================================
  {
    category: "S'MORES",
    puzzleNumber: 142,
    amuseBouche: { word: "HOT", hint: "Fresh off the campfire", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOME", hint: "Short for '____ more'", revealedIndex: 0 },
        { word: "ROAST", hint: "Cook over open flame", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GRAHAM", hint: "___ cracker base", revealedIndex: 3 },
        { word: "MELTING", hint: "Chocolate becoming gooey", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CAMPFIRE", hint: "Outdoor cooking fire", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 143 - HIP HOP
  // =============================================
  {
    category: "HIP HOP",
    puzzleNumber: 143,
    amuseBouche: { word: "MIC", hint: "What an emcee raps into", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEAT", hint: "Musical rhythm foundation", revealedIndex: 0 },
        { word: "DANCE", hint: "Movement to the music", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GROOVE", hint: "Rhythmic feel", revealedIndex: 3 },
        { word: "DEEJAY", hint: "One who spins records", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BREAKING", hint: "Breakdancing style", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 144 - MIDDLE CHILD
  // =============================================
  {
    category: "MIDDLE CHILD",
    puzzleNumber: 144,
    amuseBouche: { word: "MID", hint: "Short for middle", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TEAM", hint: "Group player", revealedIndex: 0 },
        { word: "PEACE", hint: "Keeping harmony", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "UNIQUE", hint: "One of a kind", revealedIndex: 3 },
        { word: "SQUEEZE", hint: "Tight middle spot", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SANDWICH", hint: "Between; in the middle", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 145 - CALLIGRAPHY
  // =============================================
  {
    category: "CALLIGRAPHY",
    puzzleNumber: 145,
    amuseBouche: { word: "INK", hint: "What flows through the pen", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NIBS", hint: "Pen tips for ink writing", revealedIndex: 0 },
        { word: "BRUSH", hint: "Painting tool for lettering", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "STYLED", hint: "Decoratively formed", revealedIndex: 3 },
        { word: "FOUNTAIN", hint: "___ pen writing tool", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FLOURISH", hint: "Decorative pen stroke", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 146 - CHAMELEON
  // =============================================
  {
    category: "CHAMELEON",
    puzzleNumber: 146,
    amuseBouche: { word: "HUE", hint: "A shade of color", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COLD", hint: "Temperature they sense", revealedIndex: 0 },
        { word: "COLOR", hint: "What they change", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LIZARD", hint: "Reptile family", revealedIndex: 3 },
        { word: "REPTILE", hint: "Cold-blooded animal class", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BLENDING", hint: "Camouflage technique", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 147 - RELAXATION
  // =============================================
  {
    category: "RELAXATION",
    puzzleNumber: 147,
    amuseBouche: { word: "SPA", hint: "A place to unwind", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SLOW", hint: "Take it easy", revealedIndex: 0 },
        { word: "CHILL", hint: "Relax and unwind", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "UNWIND", hint: "Let go of tension", revealedIndex: 3 },
        { word: "ROUTINE", hint: "A daily practice or usual schedule", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MEDITATE", hint: "Mindful stillness practice", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 148 - ROLLER COASTER
  // =============================================
  {
    category: "ROLLER COASTER",
    puzzleNumber: 148,
    amuseBouche: { word: "CAR", hint: "What you ride in on the track", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WILD", hint: "Thrilling and unpredictable", revealedIndex: 0 },
        { word: "BUMPY", hint: "Rough and jolting ride", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SCREAM", hint: "Reaction to the drop", revealedIndex: 3 },
        { word: "DESCENT", hint: "The thrilling downhill plunge", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WHIPLASH", hint: "Neck-snapping speed effect", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 149 - THRIFT SHOP
  // =============================================
  {
    category: "THRIFT SHOP",
    puzzleNumber: 149,
    amuseBouche: { word: "BOX", hint: "Where donated items get sorted", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DEAL", hint: "A bargain find", revealedIndex: 0 },
        { word: "RETRO", hint: "Vintage style", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RESALE", hint: "Selling secondhand", revealedIndex: 3 },
        { word: "UPCYCLE", hint: "Transform old into new", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "RUMMAGE", hint: "Search through items", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 150 - FAJITAS
  // =============================================
  {
    category: "FAJITAS",
    puzzleNumber: 150,
    amuseBouche: { word: "PAN", hint: "What fajitas sizzle in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEEF", hint: "Classic protein filling", revealedIndex: 0 },
        { word: "ONION", hint: "Caramelized veggie topping", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PEPPER", hint: "Colorful sautéed veggie", revealedIndex: 3 },
        { word: "SKILLET", hint: "Cast iron cooking pan", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SIZZLING", hint: "Hot and crackling sound", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 151 - AVIATION
  // =============================================
  {
    category: "AVIATION",
    puzzleNumber: 151,
    amuseBouche: { word: "JET", hint: "A fast type of aircraft", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HAWK", hint: "Kitty ____", revealedIndex: 0 },
        { word: "PLANE", hint: "Flying machine", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GLIDER", hint: "Engineless aircraft", revealedIndex: 3 },
        { word: "WRIGHT", hint: "Famous flying brothers", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BROTHERS", hint: "Orville and Wilbur", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 152 - BACON
  // =============================================
  {
    category: "BACON",
    puzzleNumber: 152,
    amuseBouche: { word: "PIG", hint: "The animal bacon comes from", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PORK", hint: "Pig-derived meat", revealedIndex: 0 },
        { word: "SALTY", hint: "Savory cured flavor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SMOKED", hint: "Slow-cooked with wood", revealedIndex: 3 },
        { word: "STREAKY", hint: "Fatty strip variety", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PANCAKES", hint: "Classic breakfast pairing", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 153 - HAWAIIAN SHIRT
  // =============================================
  {
    category: "HAWAIIAN SHIRT",
    puzzleNumber: 153,
    amuseBouche: { word: "LEI", hint: "A floral necklace worn with the shirt", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LUAU", hint: "Island party", revealedIndex: 0 },
        { word: "ALOHA", hint: "Hawaiian greeting on the shirt tag", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLORAL", hint: "Flower-printed pattern", revealedIndex: 2 },
        { word: "BRIGHT", hint: "Bold vivid colors", revealedIndex: 3 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TROPICAL", hint: "Island-inspired style", revealedIndex: 0 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 154 - TOOTH FAIRY
  // =============================================
  {
    category: "TOOTH FAIRY",
    puzzleNumber: 154,
    amuseBouche: { word: "GUM", hint: "Where your teeth are rooted", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COIN", hint: "Reward left under pillow", revealedIndex: 0 },
        { word: "MAGIC", hint: "Enchanting fairy power", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PILLOW", hint: "Where the tooth is hidden", revealedIndex: 3 },
        { word: "QUARTER", hint: "Common coin reward", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SLEEPING", hint: "Child must be doing this", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 155 - CUBAN SANDWICH
  // =============================================
  {
    category: "CUBAN SANDWICH",
    puzzleNumber: 155,
    amuseBouche: { word: "HAM", hint: "A classic filling meat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PORK", hint: "Primary protein filling", revealedIndex: 0 },
        { word: "BREAD", hint: "Cuban roll base", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHEESE", hint: "Melted Swiss layer", revealedIndex: 3 },
        { word: "PICKLES", hint: "Tangy essential ingredient", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PRESSED", hint: "Flattened and grilled", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 156 - AMELIA EARHART
  // =============================================
  {
    category: "AMELIA EARHART",
    puzzleNumber: 156,
    amuseBouche: { word: "FLY", hint: "What she loved to do", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOLO", hint: "Flying alone", revealedIndex: 0 },
        { word: "COAST", hint: "_____-to-coast journey", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "DEPART", hint: "Leave from Los Angeles, CA", revealedIndex: 3 },
        { word: "ARRIVAL", hint: "Landing at Newark, NJ", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LOCKHEED", hint: "Aircraft manufacturer she flew", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 157 - UNITED STATES NATIONAL PARKS
  // =============================================
  {
    category: "UNITED STATES NATIONAL PARKS",
    puzzleNumber: 157,
    amuseBouche: { word: "USA", hint: "Home to these protected lands", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MESA", hint: "Flat-topped rock formation", revealedIndex: 0 },
        { word: "GORGE", hint: "Deep narrow canyon", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GEYSER", hint: "Yellowstone's hot spring", revealedIndex: 3 },
        { word: "GLACIER", hint: "Slow-moving ice mass", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MONUMENT", hint: "Protected landmark", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 158 - EQUALITY
  // =============================================
  {
    category: "EQUALITY",
    puzzleNumber: 158,
    amuseBouche: { word: "ALL", hint: "Equal rights for ___", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "VOTE", hint: "The right to cast a ballot", revealedIndex: 0 },
        { word: "WOMEN", hint: "Who gained voting rights", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RIGHTS", hint: "Freedoms and liberties", revealedIndex: 3 },
        { word: "GRANTED", hint: "Officially given", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SUFFRAGE", hint: "The right to vote", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 159 - BANANAS
  // =============================================
  {
    category: "BANANAS",
    puzzleNumber: 159,
    amuseBouche: { word: "APE", hint: "An animal fond of bananas", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PEEL", hint: "Remove the outer skin", revealedIndex: 0 },
        { word: "BREAD", hint: "Baked banana loaf", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "YELLOW", hint: "Ripe color", revealedIndex: 3 },
        { word: "PUDDING", hint: "Creamy banana dessert", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PLANTAIN", hint: "Cooking banana variety", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 160 - ST. AUGUSTINE, FLORIDA
  // =============================================
  {
    category: "ST. AUGUSTINE, FLORIDA",
    puzzleNumber: 160,
    amuseBouche: { word: "OLD", hint: "America's ___est city", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FORT", hint: "Historic Castillo de San Marcos", revealedIndex: 0 },
        { word: "GHOST", hint: "Famous haunted tours", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BRIDGE", hint: "Lions guard this landmark", revealedIndex: 3 },
        { word: "SPANISH", hint: "Colonial heritage", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FOUNTAIN", hint: "Of Youth attraction", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 161 - CHOP SUEY
  // =============================================
  {
    category: "CHOP SUEY",
    puzzleNumber: 161,
    amuseBouche: { word: "WOK", hint: "The pan it's cooked in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STIR", hint: "____ Fry", revealedIndex: 0 },
        { word: "SAUCE", hint: "Soy _____", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SAVORY", hint: "Rich, satisfying flavor", revealedIndex: 3 },
        { word: "VARIETY", hint: "Mix of many ingredients", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LEFTOVER", hint: "What the dish is made from", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 162 - WHALE SHARKS
  // =============================================
  {
    category: "WHALE SHARKS",
    puzzleNumber: 162,
    amuseBouche: { word: "FIN", hint: "A shark's distinctive feature", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FISH", hint: "Their true animal class", revealedIndex: 0 },
        { word: "GIANT", hint: "Enormous in size", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GENTLE", hint: "Peaceful despite their size", revealedIndex: 3 },
        { word: "LARGEST", hint: "Biggest fish in the ocean", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LIFESPAN", hint: "How long they live", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 163 - TRAIL MIX
  // =============================================
  {
    category: "TRAIL MIX",
    puzzleNumber: 163,
    amuseBouche: { word: "NUT", hint: "A common ingredient", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NUTS", hint: "Almonds, cashews, peanuts", revealedIndex: 0 },
        { word: "SEEDS", hint: "Sunflower or pumpkin additions", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RAISINS", hint: "Dried grape sweetener", revealedIndex: 3 },
        { word: "ANCIENT", hint: "Very old origins", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "OUTDOORS", hint: "Where it's enjoyed most", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 164 - NO RHYME AND NO REASON
  // =============================================
  {
    category: "NO RHYME AND NO REASON",
    puzzleNumber: 164,
    amuseBouche: { word: "ODD", hint: "Strange and illogical", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PINT", hint: "A unit of liquid measure", revealedIndex: 0 },
        { word: "MONTH", hint: "30 or 31 days", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ORANGE", hint: "A citrus fruit", revealedIndex: 3 },
        { word: "CHIMNEY", hint: "Smoke rises through this", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MARATHON", hint: "A 26.2 mile race", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 165 - EARRINGS
  // =============================================
  {
    category: "EARRINGS",
    puzzleNumber: 165,
    amuseBouche: { word: "EAR", hint: "Where earrings are worn", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LOBE", hint: "Lower part of the ear", revealedIndex: 0 },
        { word: "PEARL", hint: "Classic elegant gem", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PIERCE", hint: "Make a hole for jewelry", revealedIndex: 3 },
        { word: "JEWELRY", hint: "Decorative accessories", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GEMSTONE", hint: "Precious stone in a setting", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 166 - SKYSCRAPER
  // =============================================
  {
    category: "SKYSCRAPER",
    puzzleNumber: 166,
    amuseBouche: { word: "SKY", hint: "What a skyscraper reaches toward", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SWAY", hint: "What tall buildings do in wind", revealedIndex: 0 },
        { word: "TOWER", hint: "Tall structure", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FACADE", hint: "Exterior face of a building", revealedIndex: 3 },
        { word: "SKYLINE", hint: "City's silhouette", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DOWNTOWN", hint: "City center location", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 167 - MACADAMIA NUTS
  // =============================================
  {
    category: "MACADAMIA NUTS",
    puzzleNumber: 167,
    amuseBouche: { word: "NUT", hint: "A general term for this treat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OILY", hint: "Rich fatty texture", revealedIndex: 0 },
        { word: "SALTY", hint: "Common seasoning", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CREAMY", hint: "Smooth buttery flavor", revealedIndex: 3 },
        { word: "ROASTED", hint: "Oven or dry-pan cooked", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TROPICAL", hint: "Warm climate origin", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 168 - BACON
  // =============================================
  {
    category: "BACON",
    puzzleNumber: 168,
    amuseBouche: { word: "FAT", hint: "What gives bacon its flavor", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "EGGS", hint: "Classic breakfast pairing", revealedIndex: 0 },
        { word: "CRISP", hint: "Perfectly cooked texture", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHEESE", hint: "Melted topping", revealedIndex: 3 },
        { word: "SAUSAGE", hint: "Another breakfast meat", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PANCAKES", hint: "Letter Griddle's favorite!", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 169 - READ A BOOK
  // =============================================
  {
    category: "READ A BOOK",
    puzzleNumber: 169,
    amuseBouche: { word: "INK", hint: "What words are printed with", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PAGE", hint: "Turn to the next one", revealedIndex: 0 },
        { word: "NOVEL", hint: "Long-form fiction", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "AUTHOR", hint: "The writer", revealedIndex: 3 },
        { word: "FICTION", hint: "Imaginary storytelling", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHAPTERS", hint: "Divided sections of a book", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 170 - GOOGLE
  // =============================================
  {
    category: "GOOGLE",
    puzzleNumber: 170,
    amuseBouche: { word: "WEB", hint: "Short for World Wide Web", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DATA", hint: "Information stored online", revealedIndex: 0 },
        { word: "CLOUD", hint: "Online storage system", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SEARCH", hint: "Look something up", revealedIndex: 3 },
        { word: "BROWSER", hint: "Chrome or Safari", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INTERNET", hint: "World Wide Web", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 171 - STAR TREK
  // =============================================
  {
    category: "STAR TREK",
    puzzleNumber: 171,
    amuseBouche: { word: "USS", hint: "Prefix for the Enterprise", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEAM", hint: "____ up!", revealedIndex: 0 },
        { word: "SPOCK", hint: "Logical Vulcan officer", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "VULCAN", hint: "Spock's home planet", revealedIndex: 3 },
        { word: "PROSPER", hint: "Live long and ___", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FRONTIER", hint: "The final ___", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 172 - SUDOKU
  // =============================================
  {
    category: "SUDOKU",
    puzzleNumber: 172,
    amuseBouche: { word: "SET", hint: "A completed sudoku row or column", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BOX", hint: "One of nine sections", revealedIndex: 0 },
        { word: "GRID", hint: "9x9 playing field", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BLOCK", hint: "3x3 mini section", revealedIndex: 3 },
        { word: "COLUMN", hint: "Vertical line of numbers", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "POSSIBLE", hint: "Which numbers can go here?", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 173 - TV DINNER
  // =============================================
  {
    category: "TV DINNER",
    puzzleNumber: 173,
    amuseBouche: { word: "TIN", hint: "Material of the classic tray", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TRAY", hint: "Divided meal container", revealedIndex: 0 },
        { word: "QUICK", hint: "Fast and convenient", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FROZEN", hint: "Kept in the freezer", revealedIndex: 3 },
        { word: "SEASON", hint: "Add flavoring", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ALUMINUM", hint: "Original tray material", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 174 - MAKE A HAT
  // =============================================
  {
    category: "MAKE A HAT",
    puzzleNumber: 174,
    amuseBouche: { word: "CAP", hint: "A simple type of hat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WEAR", hint: "Put it on your head", revealedIndex: 0 },
        { word: "DESIGN", hint: "Create the look", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FEDORA", hint: "Classic wide-brimmed style", revealedIndex: 3 },
        { word: "STYLISH", hint: "Fashionable and chic", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CREATIVE", hint: "Imaginative and original", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 175 - VIDEO GAMES
  // =============================================
  {
    category: "VIDEO GAMES",
    puzzleNumber: 175,
    amuseBouche: { word: "JOY", hint: "Short for the classic joystick", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COIN", hint: "Insert ___ to play", revealedIndex: 0 },
        { word: "SCORE", hint: "Track your points", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PACMAN", hint: "Classic arcade chomper", revealedIndex: 3 },
        { word: "ACTION", hint: "Fast-paced game genre", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "GRAPHICS", hint: "Visual game design", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 176 - FORTUNE COOKIES
  // =============================================
  {
    category: "FORTUNE COOKIES",
    puzzleNumber: 176,
    amuseBouche: { word: "TEA", hint: "Often served after a meal with this drink", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WISE", hint: "Sage advice inside", revealedIndex: 0 },
        { word: "LUCKY", hint: "Numbers on the slip", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "NUMBER", hint: "Lucky ___ on the fortune", revealedIndex: 3 },
        { word: "MESSAGE", hint: "The fortune inside", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "JAPANESE", hint: "Origin of the concept", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 177 - THE GOLDEN GIRLS
  // =============================================
  {
    category: "THE GOLDEN GIRLS",
    puzzleNumber: 177,
    amuseBouche: { word: "GAL", hint: "A term for a golden girl", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OLAF", hint: "St. ___, hometown of Rose", revealedIndex: 0 },
        { word: "MIAMI", hint: "Florida city setting", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHEESE", hint: "_____cake at midnight!", revealedIndex: 3 },
        { word: "PICTURE", hint: "___ it, a town in Sicily", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ENSEMBLE", hint: "Group cast", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 178 - PEANUT
  // =============================================
  {
    category: "PEANUT",
    puzzleNumber: 178,
    amuseBouche: { word: "PBJ", hint: "Classic sandwich made with peanut butter", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MATH", hint: "It takes about 540 peanuts to make a 12-ounce jar of peanut butter", revealedIndex: 0 },
        { word: "SPACE", hint: "An astronaut took a peanut to the moon", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CARVER", hint: "George Washington ___, peanut pioneer", revealedIndex: 3 },
        { word: "LEGUMES", hint: "Plant family they belong to", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SANDWICH", hint: "PB&J classic", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 179 - PLAY-DOH
  // =============================================
  {
    category: "PLAY-DOH",
    puzzleNumber: 179,
    amuseBouche: { word: "TUB", hint: "What the dough comes packaged in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MOLD", hint: "Shape it into anything", revealedIndex: 0 },
        { word: "AROMA", hint: "Distinctive nostalgic smell", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SQUISH", hint: "Satisfying tactile action", revealedIndex: 3 },
        { word: "PLIABLE", hint: "Soft and easy to shape", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NONTOXIC", hint: "Safe for children", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 180 - BOSTON
  // =============================================
  {
    category: "BOSTON",
    puzzleNumber: 180,
    amuseBouche: { word: "SOX", hint: "Boston's baseball team nickname", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEAN", hint: "Baked ___, city nickname food", revealedIndex: 0 },
        { word: "CREAM", hint: "Boston ___ pie", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ACCENT", hint: "Distinctive way of speaking", revealedIndex: 3 },
        { word: "HISTORY", hint: "Rich colonial past", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EDUCATED", hint: "Harvard and MIT city", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 181 - RICE KRISPIES TREATS
  // =============================================
  {
    category: "RICE KRISPIES TREATS",
    puzzleNumber: 181,
    amuseBouche: { word: "POP", hint: "One of the three mascot sounds", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SNAP", hint: "____, Crackle, Pop", revealedIndex: 0 },
        { word: "FIRST", hint: "The recipe was ___ printed on Kellogg's boxes in 1941", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GLOBAL", hint: "Worldwide favorite treat", revealedIndex: 3 },
        { word: "SQUARES", hint: "Classic cut shape", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HOMEMADE", hint: "Made from scratch", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 182 - PIRATES
  // =============================================
  {
    category: "PIRATES",
    puzzleNumber: 182,
    amuseBouche: { word: "ARR", hint: "Classic pirate exclamation", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "AHOY", hint: "Sailor's greeting", revealedIndex: 0 },
        { word: "MATEY", hint: "Friendly pirate address", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SHIVER", hint: "___ me timbers!", revealedIndex: 3 },
        { word: "TREASURE", hint: "X marks the spot", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SCHOONER", hint: "Two-masted sailing vessel", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 183 - FRIED RICE
  // =============================================
  {
    category: "FRIED RICE",
    puzzleNumber: 183,
    amuseBouche: { word: "WOK", hint: "The pan it's cooked in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STIR", hint: "Toss in the wok", revealedIndex: 0 },
        { word: "SAUCE", hint: "Soy ___ for flavor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GARLIC", hint: "Aromatic essential ingredient", revealedIndex: 3 },
        { word: "CHICKEN", hint: "Popular protein addition", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "LEFTOVER", hint: "Best made with day-old rice", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 184 - EARTH, WIND, AND FIRE
  // =============================================
  {
    category: "EARTH, WIND, AND FIRE",
    puzzleNumber: 184,
    amuseBouche: { word: "EWF", hint: "Common abbreviation for the band", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SONG", hint: "Musical composition", revealedIndex: 0 },
        { word: "NIGHT", hint: "21st ___ of September", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUMMER", hint: "Season in the song", revealedIndex: 3 },
        { word: "MEANING", hint: "What does it all mean?", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "REMEMBER", hint: "Do you ___ the 21st night?", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 185 - AUTUMN
  // =============================================
  {
    category: "AUTUMN",
    puzzleNumber: 185,
    amuseBouche: { word: "OAK", hint: "A tree that sheds its leaves now", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FALL", hint: "The season it begins", revealedIndex: 0 },
        { word: "COLOR", hint: "Leaves change to brilliant hues", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SEASON", hint: "One of four annual periods", revealedIndex: 3 },
        { word: "WEATHER", hint: "Cooling temperatures arrive", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FESTIVAL", hint: "Harvest celebration", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 186 - POT PIE
  // =============================================
  {
    category: "POT PIE",
    puzzleNumber: 186,
    amuseBouche: { word: "PIE", hint: "What a pot pie technically is", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "VENT", hint: "Steam hole in the crust", revealedIndex: 0 },
        { word: "GRAVY", hint: "Rich savory sauce filling", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CARROT", hint: "Orange veggie inside", revealedIndex: 3 },
        { word: "CHICKEN", hint: "Most popular variety", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CRIMPING", hint: "Sealing the pastry edges", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 187 - PUNCTUATION
  // =============================================
  {
    category: "PUNCTUATION",
    puzzleNumber: 187,
    amuseBouche: { word: "DOT", hint: "What a period looks like", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MARK", hint: "Written symbol", revealedIndex: 0 },
        { word: "SPACE", hint: "Gap between words", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PERIOD", hint: "End of sentence dot", revealedIndex: 3 },
        { word: "HASHTAG", hint: "# symbol", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SEPARATE", hint: "To divide or distinguish", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 188 - LOBSTER
  // =============================================
  {
    category: "LOBSTER",
    puzzleNumber: 188,
    amuseBouche: { word: "SEA", hint: "Where lobsters live", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CLAW", hint: "Powerful pinching appendage", revealedIndex: 0 },
        { word: "OCEAN", hint: "Where they live", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PINCER", hint: "Gripping claw tool", revealedIndex: 3 },
        { word: "CRUSHER", hint: "Larger dominant claw", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MOLTING", hint: "Shedding the shell to grow", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 189 - PANCAKES!
  // =============================================
  {
    category: "PANCAKES!",
    puzzleNumber: 189,
    amuseBouche: { word: "OIL", hint: "What greases the griddle", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HEAT", hint: "Griddle temperature", revealedIndex: 0 },
        { word: "SYRUP", hint: "Sweet topping", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BATTER", hint: "Pourable mix", revealedIndex: 3 },
        { word: "GRIDDLE", hint: "Flat cooking surface", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FLAPJACK", hint: "Another name for pancakes", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 190 - CHOCOLATE MILK
  // =============================================
  {
    category: "CHOCOLATE MILK",
    puzzleNumber: 190,
    amuseBouche: { word: "COW", hint: "Source of the milk", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COLD", hint: "Best served chilled", revealedIndex: 0 },
        { word: "COCOA", hint: "Chocolate base ingredient", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "POWDER", hint: "Mix-in form", revealedIndex: 3 },
        { word: "COMBINE", hint: "Mix together", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PREMIXED", hint: "Ready to drink carton", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 191 - GOOD NEIGHBOR
  // =============================================
  {
    category: "GOOD NEIGHBOR",
    puzzleNumber: 191,
    amuseBouche: { word: "HEY", hint: "A friendly greeting", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TIDY", hint: "Neat and well-kept", revealedIndex: 0 },
        { word: "QUIET", hint: "Respectful of others", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FENCES", hint: "Good ones make good neighbors", revealedIndex: 3 },
        { word: "HELPFUL", hint: "Lending a hand", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "RELIABLE", hint: "Dependable and trustworthy", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 192 - COFFEE
  // =============================================
  {
    category: "COFFEE",
    puzzleNumber: 192,
    amuseBouche: { word: "CUP", hint: "What coffee is served in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEAN", hint: "Raw coffee seed", revealedIndex: 0 },
        { word: "SUGAR", hint: "Common sweetener", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LINGER", hint: "Savor slowly", revealedIndex: 3 },
        { word: "BREWING", hint: "Making the perfect cup", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ROASTING", hint: "Heating the beans", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 193 - CHEWING GUM
  // =============================================
  {
    category: "CHEWING GUM",
    puzzleNumber: 193,
    amuseBouche: { word: "JAW", hint: "What works hard while chewing", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MINT", hint: "Popular fresh flavor", revealedIndex: 0 },
        { word: "BIRCH", hint: "Ancient tree bark variety", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RESINS", hint: "Natural sticky substances", revealedIndex: 3 },
        { word: "PLASTIC", hint: "Modern synthetic base", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WRIGLEYS", hint: "Famous gum brand", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 194 - BALLOONS
  // =============================================
  {
    category: "BALLOONS",
    puzzleNumber: 194,
    amuseBouche: { word: "AIR", hint: "What fills a balloon", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FOIL", hint: "Shiny metallic material", revealedIndex: 0 },
        { word: "PARTY", hint: "Celebratory occasion", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "COLORS", hint: "Bright festive hues", revealedIndex: 3 },
        { word: "INFLATE", hint: "Fill with air or helium", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FLOATING", hint: "Rising in the air", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 195 - PEANUTS
  // =============================================
  {
    category: "PEANUTS",
    puzzleNumber: 195,
    amuseBouche: { word: "DOG", hint: "Snoopy's species", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LUCY", hint: "She always pulls the football away", revealedIndex: 0 },
        { word: "LINUS", hint: "He carries a security blanket", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SNOOPY", hint: "The beagle on his doghouse", revealedIndex: 3 },
        { word: "CHARLIE", hint: "___ Brown, good grief!", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CARTOONS", hint: "Comic strip and TV specials", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 196 - FRUGAL FUN
  // =============================================
  {
    category: "FRUGAL FUN",
    puzzleNumber: 196,
    amuseBouche: { word: "DIY", hint: "Do it yourself, frugal style", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STAY", hint: "____-cation at home", revealedIndex: 0 },
        { word: "LOCAL", hint: "Close to home activities", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CREATE", hint: "Make your own fun", revealedIndex: 3 },
        { word: "THRIFTY", hint: "Careful with spending", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CURRENCY", hint: "Money in circulation to exhange", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 197 - CINNAMON BUNS
  // =============================================
  {
    category: "CINNAMON BUNS",
    puzzleNumber: 197,
    amuseBouche: { word: "BUN", hint: "Short for the treat itself", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BAKE", hint: "Cook in the oven", revealedIndex: 0 },
        { word: "SCENT", hint: "Warm spiced aroma", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "COMFORT", hint: "Cozy feeling food", revealedIndex: 3 },
        { word: "FROSTED", hint: "Topped with icing", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BUTTERED", hint: "Spread with richness", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 198 - TEACHERS
  // =============================================
  {
    category: "TEACHERS",
    puzzleNumber: 198,
    amuseBouche: { word: "ABC", hint: "Basics taught in school", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PLAN", hint: "Lesson preparation", revealedIndex: 0 },
        { word: "CLASS", hint: "Group of students", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LEADER", hint: "Guide and mentor", revealedIndex: 3 },
        { word: "STUDENT", hint: "Who they teach", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INSTRUCT", hint: "Teach and guide", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 199 - INSTAGRAM
  // =============================================
  {
    category: "INSTAGRAM",
    puzzleNumber: 199,
    amuseBouche: { word: "APP", hint: "What kind of program Instagram is", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "POST", hint: "Share content online", revealedIndex: 0 },
        { word: "PHOTO", hint: "Image shared on the app", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MOBILE", hint: "Phone-based platform", revealedIndex: 3 },
        { word: "HASHTAG", hint: "# for discovery", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FOLLOWER", hint: "Someone who subscribes", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 200 - PUMPKIN SEEDS
  // =============================================
  {
    category: "PUMPKIN SEEDS",
    puzzleNumber: 200,
    amuseBouche: { word: "TAN", hint: "Color of a roasted pumpkin seed", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JACK", hint: "____ o'lantern", revealedIndex: 0 },
        { word: "CARVE", hint: "Cut a pumpkin design", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "INSIDE", hint: "Found within the pumpkin", revealedIndex: 3 },
        { word: "PROTEIN", hint: "Nutrient they're rich in", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MINERALS", hint: "Magnesium and zinc content", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 201 - OCTOPUS
  // =============================================
  {
    category: "OCTOPUS",
    puzzleNumber: 201,
    amuseBouche: { word: "ARM", hint: "One of eight on an octopus", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BLUE", hint: "Color of their blood", revealedIndex: 0 },
        { word: "ZERO", hint: "Number of bones they have", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "NINE", hint: "Number of brains they have", revealedIndex: 3 },
        { word: "THREE", hint: "Number of hearts", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EIGHT", hint: "Number of arms", revealedIndex: 2 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 202 - JOHN LENNON
  // =============================================
  {
    category: "JOHN LENNON",
    puzzleNumber: 202,
    amuseBouche: { word: "FAB", hint: "___ Four nickname", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOLO", hint: "His post-Beatles career", revealedIndex: 0 },
        { word: "PEACE", hint: "Give ___ a chance", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BEATLE", hint: "Famous band member", revealedIndex: 3 },
        { word: "PLASTIC", hint: "___ Ono Band", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "IMAGINE", hint: "His most famous song", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 203 - ANGEL FOOD CAKE
  // =============================================
  {
    category: "ANGEL FOOD CAKE",
    puzzleNumber: 203,
    amuseBouche: { word: "EGG", hint: "Key whipped ingredient", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "AIRY", hint: "Light cloud-like texture", revealedIndex: 0 },
        { word: "LAYER", hint: "Stack of cake tiers", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLUFFY", hint: "Soft and whipped", revealedIndex: 3 },
        { word: "TOPPING", hint: "Fruit or whipped cream on top", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HEAVENLY", hint: "Angelic description", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 204 - MARATHON
  // =============================================
  {
    category: "MARATHON",
    puzzleNumber: 204,
    amuseBouche: { word: "RUN", hint: "What a marathon requires", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PACE", hint: "Running speed strategy", revealedIndex: 0 },
        { word: "WATER", hint: "Essential hydration station", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ENERGY", hint: "Fuel for the long run", revealedIndex: 3 },
        { word: "TRAINED", hint: "Prepared through practice", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DISTANCE", hint: "26.2 miles total", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 205 - SAVINGS
  // =============================================
  {
    category: "SAVINGS",
    puzzleNumber: 205,
    amuseBouche: { word: "JAR", hint: "A classic place to stash coins", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FUND", hint: "Money set aside", revealedIndex: 0 },
        { word: "HABIT", hint: "Regular saving practice", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BUDGET", hint: "Spending plan", revealedIndex: 3 },
        { word: "COMPOUND", hint: "___ interest grows over time", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INTEREST", hint: "Money earned on savings", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 206 - YORKSHIRE PUDDING
  // =============================================
  {
    category: "YORKSHIRE PUDDING",
    puzzleNumber: 206,
    amuseBouche: { word: "PAN", hint: "What it's baked in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEEF", hint: "Traditionally served with this roast", revealedIndex: 0 },
        { word: "ROAST", hint: "Sunday ___ dinner", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUNDAY", hint: "Traditional serving day", revealedIndex: 3 },
        { word: "POPOVER", hint: "American cousin dish", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DRIPPING", hint: "Beef fat used in the pan", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 207 - WINNIE-THE-POOH
  // =============================================
  {
    category: "WINNIE-THE-POOH",
    puzzleNumber: 207,
    amuseBouche: { word: "BEE", hint: "What Pooh chases for honey", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OWL", hint: "The wise bird of the Hundred Acre Wood", revealedIndex: 0 },
        { word: "BEAR", hint: "What Pooh is", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ROBIN", hint: "Christopher ___, Pooh's best friend", revealedIndex: 3 },
        { word: "PIGLET", hint: "Pooh's small pink friend", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ANIMALS", hint: "The characters are stuffed ___", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 208 - I LOVE LUCY
  // =============================================
  {
    category: "I LOVE LUCY",
    puzzleNumber: 208,
    amuseBouche: { word: "CBS", hint: "The network that aired it", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SHOW", hint: "Classic TV program", revealedIndex: 0 },
        { word: "ETHEL", hint: "Lucy's best friend and neighbor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RERUNS", hint: "Classic episodes still airing today", revealedIndex: 3 },
        { word: "RICARDO", hint: "Lucy's last name", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NEIGHBOR", hint: "Ethel's role in Lucy's life", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 209 - THE BOSS
  // =============================================
  {
    category: "THE BOSS",
    puzzleNumber: 209,
    amuseBouche: { word: "CEO", hint: "Short for Chief Executive Officer", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HEAD", hint: "At the top of the organization", revealedIndex: 0 },
        { word: "HONCHO", hint: "Head ___, the person in charge", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BIGWIG", hint: "Important person of authority", revealedIndex: 3 },
        { word: "KINGPIN", hint: "The most powerful person", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DIRECTOR", hint: "Executive title", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 210 - SLOTH
  // =============================================
  {
    category: "SLOTH",
    puzzleNumber: 210,
    amuseBouche: { word: "NAP", hint: "What a sloth does most of the day", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LAZY", hint: "Slow and idle", revealedIndex: 0 },
        { word: "SLEEP", hint: "They do this up to 20 hours a day", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "DROWSY", hint: "Sleepy and sluggish", revealedIndex: 3 },
        { word: "RELAXED", hint: "Totally at ease", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SLUGGISH", hint: "Moving very slowly", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 211 - ALASKA
  // =============================================
  {
    category: "ALASKA",
    puzzleNumber: 211,
    amuseBouche: { word: "ICE", hint: "What covers much of Alaska", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NOME", hint: "Famous Iditarod finish city", revealedIndex: 0 },
        { word: "MOOSE", hint: "Largest member of the deer family", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TUNDRA", hint: "Vast frozen landscape", revealedIndex: 3 },
        { word: "MUSHING", hint: "Dog ___, sled racing sport", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MIDNIGHT", hint: "___ sun, summer phenomenon", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 212 - SEAFOOD BISQUE
  // =============================================
  {
    category: "SEAFOOD BISQUE",
    puzzleNumber: 212,
    amuseBouche: { word: "POT", hint: "Where the bisque simmers", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CRAB", hint: "Popular shellfish ingredient", revealedIndex: 0 },
        { word: "BROTH", hint: "Flavorful liquid base", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SHRIMP", hint: "Small pink shellfish", revealedIndex: 3 },
        { word: "LOBSTER", hint: "Luxury bisque ingredient", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SAUTEING", hint: "Quick pan cooking method", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 213 - CHICKEN AND WAFFLES
  // =============================================
  {
    category: "CHICKEN AND WAFFLES",
    puzzleNumber: 213,
    amuseBouche: { word: "HOT", hint: "Freshly cooked and steaming", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOUL", hint: "___ food tradition", revealedIndex: 0 },
        { word: "SWEET", hint: "The waffle side of the pairing", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SAVORY", hint: "The chicken side of the pairing", revealedIndex: 3 },
        { word: "PAIRING", hint: "Two foods combined together", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "UNLIKELY", hint: "An unexpected combination", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 214 - BACK TO THE FUTURE
  // =============================================
  {
    category: "BACK TO THE FUTURE",
    puzzleNumber: 214,
    amuseBouche: { word: "DMC", hint: "Abbreviation on the famous car's badge", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLUX", hint: "The ___ Capacitor makes time travel possible", revealedIndex: 0 },
        { word: "CLOCK", hint: "One word of the Hill Valley landmark struck by lightning", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TOWER", hint: "The other word of the Hill Valley landmark", revealedIndex: 3 },
        { word: "SLACKER", hint: "Principal Strickland's favorite insult for Marty", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DELOREAN", hint: "The iconic stainless-steel time machine car", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 215 - VIBRANT COLOR
  // =============================================
  {
    category: "VIBRANT COLOR",
    puzzleNumber: 215,
    amuseBouche: { word: "HUE", hint: "A general term for color", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GLOW", hint: "Radiant shining light", revealedIndex: 0 },
        { word: "VIVID", hint: "Intensely bright", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BRIGHT", hint: "Full of light and color", revealedIndex: 3 },
        { word: "INTENSE", hint: "Extreme and powerful hue", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DAZZLING", hint: "Brilliantly impressive", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 216 - WORLD SERIES
  // =============================================
  {
    category: "WORLD SERIES",
    puzzleNumber: 216,
    amuseBouche: { word: "MLB", hint: "The league that crowns this champion", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FALL", hint: "___ Classic, nickname for the championship", revealedIndex: 0 },
        { word: "PINCH", hint: "___ hit, batting in for another player", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TROPHY", hint: "Commissioner's ___, the gold-and-silver award", revealedIndex: 3 },
        { word: "PENNANT", hint: "Flag won by the league champion", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CHAMPION", hint: "The ultimate winner of the season", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 217 - NIAGARA FALLS
  // =============================================
  {
    category: "NIAGARA FALLS",
    puzzleNumber: 217,
    amuseBouche: { word: "WET", hint: "What you'll get standing nearby", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MIST", hint: "Heavy cloud of water droplets from the falls", revealedIndex: 0 },
        { word: "GORGE", hint: "Deep canyon carved by the Niagara River", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BRIDAL", hint: "___ Veil Falls, one of three waterfalls", revealedIndex: 3 },
        { word: "EMERALD", hint: "Bright green color of the water", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ROMANTIC", hint: "Honeymoon Capital of the World", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 218 - CHUCKY
  // =============================================
  {
    category: "CHUCKY",
    puzzleNumber: 218,
    amuseBouche: { word: "TOY", hint: "What kind of doll Chucky is", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DOLL", hint: "What Chucky is", revealedIndex: 0 },
        { word: "MOVIE", hint: "Child's Play film franchise", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "HORROR", hint: "Scary film genre", revealedIndex: 3 },
        { word: "FRIENDS", hint: "_____ till the end", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FRIGHTEN", hint: "To scare someone", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 219 - PUMPKINS
  // =============================================
  {
    category: "PUMPKINS",
    puzzleNumber: 219,
    amuseBouche: { word: "PIE", hint: "A classic pumpkin dessert", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "VINE", hint: "Plant it grows on", revealedIndex: 0 },
        { word: "CARVE", hint: "Cut a design into it", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPICE", hint: "Pumpkin ___ latte flavor", revealedIndex: 3 },
        { word: "LANTERN", hint: "Jack o'_____", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FLAVORFUL", hint: "Tasty and delicious", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 220 - BLACK CAT
  // =============================================
  {
    category: "BLACK CAT",
    puzzleNumber: 220,
    amuseBouche: { word: "CAT", hint: "What this animal is", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LUCK", hint: "Good or bad depending on the culture", revealedIndex: 0 },
        { word: "ADOPT", hint: "Give one a forever home", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FELINE", hint: "Cat family member", revealedIndex: 3 },
        { word: "SHADOWS", hint: "They blend into the dark", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MIDNIGHT", hint: "Dark as the night sky", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 221 - STUFFED ANIMALS
  // =============================================
  {
    category: "STUFFED ANIMALS",
    puzzleNumber: 221,
    amuseBouche: { word: "HUG", hint: "What you do with a stuffed animal", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BEAR", hint: "Classic stuffed animal", revealedIndex: 0 },
        { word: "PLUSH", hint: "Soft fabric material", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CUDDLY", hint: "Soft and huggable", revealedIndex: 3 },
        { word: "SNUGGLY", hint: "Warm and cozy to hold", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COMFORTS", hint: "What a stuffed animal provides", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 222 - INTERNET
  // =============================================
  {
    category: "INTERNET",
    puzzleNumber: 222,
    amuseBouche: { word: "WEB", hint: "A network, spun like a spider's", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SURF", hint: "Browse the web", revealedIndex: 0 },
        { word: "EMAIL", hint: "Electronic message", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SEARCH", hint: "Look something up online", revealedIndex: 3 },
        { word: "CONNECT", hint: "Link devices together", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WIRELESS", hint: "WiFi connection type", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 223 - CANDY CORN
  // =============================================
  {
    category: "CANDY CORN",
    puzzleNumber: 223,
    amuseBouche: { word: "COB", hint: "What corn naturally grows on", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CONE", hint: "Its triangular shape", revealedIndex: 0 },
        { word: "WHITE", hint: "Top color of the candy", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ORANGE", hint: "Middle color of the candy", revealedIndex: 3 },
        { word: "YELLOW", hint: "Bottom color of the candy", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "KERNELS", hint: "Corn-shaped pieces", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 224 - HALLOWEEN
  // =============================================
  {
    category: "HALLOWEEN",
    puzzleNumber: 224,
    amuseBouche: { word: "BOO", hint: "A classic ghostly exclamation", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JACK", hint: "____ o'lantern", revealedIndex: 0 },
        { word: "TRICK", hint: "___ or treat!", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TREATS", hint: "Candy collected door to door", revealedIndex: 3 },
        { word: "HAUNTED", hint: "___ house attraction", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "COSTUMES", hint: "Dress up disguises", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 225 - VEGAN
  // =============================================
  {
    category: "VEGAN",
    puzzleNumber: 225,
    amuseBouche: { word: "SOY", hint: "A common plant-based protein source", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TOFU", hint: "Plant-based protein", revealedIndex: 0 },
        { word: "PLANT", hint: "___ based diet", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CARBON", hint: "Lower ___ footprint", revealedIndex: 3 },
        { word: "CRUELTY", hint: "___ free lifestyle", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "VEGANISM", hint: "The lifestyle and philosophy", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 226 - OHIO
  // =============================================
  {
    category: "OHIO",
    puzzleNumber: 226,
    amuseBouche: { word: "OSU", hint: "Short for the state's flagship university", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLAG", hint: "State banner and symbol", revealedIndex: 0 },
        { word: "RIVER", hint: "Ohio ___, southern border", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SIGNAL", hint: "World's first electric traffic ___ in 1914", revealedIndex: 3 },
        { word: "CONCRETE", hint: "World's first ___ street in 1891", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "AVIATION", hint: "Wright Brothers' home state legacy", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 227 - HOW CLICHE!
  // =============================================
  {
    category: "HOW CLICHE!",
    puzzleNumber: 227,
    amuseBouche: { word: "OLD", hint: "What an overused phrase feels", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TIME", hint: "This flies when you're having fun", revealedIndex: 0 },
        { word: "NEVER", hint: "Better late than this", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SILVER", hint: "Every cloud has this color lining", revealedIndex: 3 },
        { word: "OUTSIDE", hint: "Think here in relation to the box", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "OPPOSITE", hint: "This attracts something unlike itself", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 228 - EASY-BAKE OVEN
  // =============================================
  {
    category: "EASY-BAKE OVEN",
    puzzleNumber: 228,
    amuseBouche: { word: "MIX", hint: "What comes in the little boxed packets", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BULB", hint: "Light ___, the original heat source", revealedIndex: 0 },
        { word: "TREAT", hint: "Sweet baked reward", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "KENNER", hint: "Original toy company maker", revealedIndex: 3 },
        { word: "CROCKER", hint: "Betty ___ provided miniature boxed mixes", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INSTANT", hint: "All 500,000 sold out when it debuted in 1963", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 229 - MONOPOLY
  // =============================================
  {
    category: "MONOPOLY",
    puzzleNumber: 229,
    amuseBouche: { word: "DIE", hint: "What you roll to move", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PARK", hint: "___ Place, most expensive property", revealedIndex: 0 },
        { word: "TOKEN", hint: "Metal playing piece", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "TITLE", hint: "___ Deed card", revealedIndex: 3 },
        { word: "CHANCE", hint: "Take a ___ card", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MILBURN", hint: "___ Pennybags, aka Rich Uncle Moneybags", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 230 - SAXOPHONE
  // =============================================
  {
    category: "SAXOPHONE",
    puzzleNumber: 230,
    amuseBouche: { word: "SAX", hint: "Common short name for the instrument", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "REED", hint: "Vibrating thin piece that makes sound", revealedIndex: 0 },
        { word: "SINGLE", hint: "Created by one lone inventor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BALANCE", hint: "Designed to fill a gap between brass and woodwinds", revealedIndex: 3 },
        { word: "OCTAVE", hint: "Key to jump to a higher register", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "WOODWIND", hint: "Its instrument family", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 231 - GETTING OUTSIDE
  // =============================================
  {
    category: "GETTING OUTSIDE",
    puzzleNumber: 231,
    amuseBouche: { word: "SUN", hint: "A source of vitamin D outdoors", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PLAY", hint: "Fun outdoor activity", revealedIndex: 0 },
        { word: "GREEN", hint: "Color found outdoors that makes it easier to get moving", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BOOSTER", hint: "Spending time outside is a brain ___", revealedIndex: 3 },
        { word: "IMMUNE", hint: "This system gets a spark from playing in the dirt", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "EXERCISE", hint: "Walking outside makes this feel easier", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 232 - CAPPUCCINO
  // =============================================
  {
    category: "CAPPUCCINO",
    puzzleNumber: 232,
    amuseBouche: { word: "SIP", hint: "How you drink it slowly", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "MILK", hint: "Creamy dairy component", revealedIndex: 0 },
        { word: "THICK", hint: "Rich and dense foam texture", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LAYER", hint: "Espresso, steamed milk, then foam", revealedIndex: 3 },
        { word: "STEAMED", hint: "Heated with a wand", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ESPRESSO", hint: "Strong coffee base", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 233 - LOUISIANA
  // =============================================
  {
    category: "LOUISIANA",
    puzzleNumber: 233,
    amuseBouche: { word: "BIG", hint: "Louisiana's ___ Easy nickname", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "JAZZ", hint: "Music born in New Orleans", revealedIndex: 0 },
        { word: "CAJUN", hint: "Spicy Acadian cuisine style", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CREOLE", hint: "Blend of French, Spanish, and African traditions", revealedIndex: 3 },
        { word: "TABASCO", hint: "Famous hot sauce from Avery Island", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CRAWFISH", hint: "Small freshwater shellfish, boiled with spices", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 234 - SESAME STREET
  // =============================================
  {
    category: "SESAME STREET",
    puzzleNumber: 234,
    amuseBouche: { word: "PBS", hint: "The public broadcaster that airs it", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BIRD", hint: "Big ___, the tall yellow friend", revealedIndex: 0 },
        { word: "COUNT", hint: "Vampire who loves numbers", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GROUCH", hint: "Oscar the ___ lives in a trash can", revealedIndex: 3 },
        { word: "LESSONS", hint: "ABCs and 123s", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TEACHING", hint: "Educating young minds", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 235 - VETERANS
  // =============================================
  {
    category: "VETERANS",
    puzzleNumber: 235,
    amuseBouche: { word: "VET", hint: "Short for veteran", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "AIR", hint: "____ Force", revealedIndex: 0 },
        { word: "ARMY", hint: "Largest U.S. military branch", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "NAVY", hint: "Sea-going military branch", revealedIndex: 3 },
        { word: "COAST", hint: "___ Guard", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MARINE", hint: "Corps member known as 'the few and the proud'", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 236 - CHICKEN SOUP FOR THE SOUL
  // =============================================
  {
    category: "CHICKEN SOUP FOR THE SOUL",
    puzzleNumber: 236,
    amuseBouche: { word: "HUG", hint: "A comforting embrace", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HOPE", hint: "Optimistic expectation", revealedIndex: 0 },
        { word: "TRUST", hint: "Confidence in another", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "WARMTH", hint: "Cozy, comforting feeling", revealedIndex: 3 },
        { word: "COMFORT", hint: "Soothing relief", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INSPIRES", hint: "Uplifts and motivates", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 237 - THE LION KING
  // =============================================
  {
    category: "THE LION KING",
    puzzleNumber: 237,
    amuseBouche: { word: "CUB", hint: "A young lion", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NALA", hint: "Simba's childhood friend and queen", revealedIndex: 0 },
        { word: "SIMBA", hint: "The lion cub who would be king", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "HAKUNA", hint: "___ Matata, no worries!", revealedIndex: 3 },
        { word: "MUSICAL", hint: "Broadway adaptation type", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ENSEMBLE", hint: "Full cast performing together", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 238 - GUACAMOLE
  // =============================================
  {
    category: "GUACAMOLE",
    puzzleNumber: 238,
    amuseBouche: { word: "DIP", hint: "What you scoop it up with a chip", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DIP", hint: "Scoop it up with a chip", revealedIndex: 0 },
        { word: "HASS", hint: "Most popular avocado variety", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPICY", hint: "Adds a jalapeño kick", revealedIndex: 3 },
        { word: "RECIPE", hint: "Ingredient instructions", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "AVOCADO", hint: "The main ingredient", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 239 - I LOVE TO WRITE
  // =============================================
  {
    category: "I LOVE TO WRITE",
    puzzleNumber: 239,
    amuseBouche: { word: "PEN", hint: "A classic writing tool", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "POEM", hint: "Verses with rhythm or rhyme", revealedIndex: 0 },
        { word: "STORY", hint: "Tale with a beginning and end", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PENCIL", hint: "Graphite writing tool", revealedIndex: 3 },
        { word: "JOURNAL", hint: "Personal daily record", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NOTEBOOK", hint: "Bound pages for writing", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 240 - INDIANA
  // =============================================
  {
    category: "INDIANA",
    puzzleNumber: 240,
    amuseBouche: { word: "IND", hint: "Common abbreviation for the state", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CORN", hint: "Major Midwest crop", revealedIndex: 0 },
        { word: "STONE", hint: "Indiana limestone is famous _____", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RACING", hint: "Sport at the Indy 500", revealedIndex: 3 },
        { word: "HOOSIER", hint: "Nickname for an Indiana native", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SPEEDWAY", hint: "Indianapolis Motor ___", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 241 - BREAD
  // =============================================
  {
    category: "BREAD",
    puzzleNumber: 241,
    amuseBouche: { word: "RYE", hint: "A hearty type of bread", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "LOAF", hint: "One whole shaped bake", revealedIndex: 0 },
        { word: "BAKED", hint: "Cooked in the oven", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BUTTER", hint: "Classic spread", revealedIndex: 3 },
        { word: "SCRATCH", hint: "Made from ___, using basic ingredients", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HOMEMADE", hint: "Not store-bought", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 242 - APPLE CIDER
  // =============================================
  {
    category: "APPLE CIDER",
    puzzleNumber: 242,
    amuseBouche: { word: "JUG", hint: "A container cider often comes in", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WARM", hint: "Best served hot on a chilly day", revealedIndex: 0 },
        { word: "SWEET", hint: "Sugary flavor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPICED", hint: "Mulled with cinnamon and cloves", revealedIndex: 3 },
        { word: "WASSAIL", hint: "Traditional hot spiced holiday drink", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BEVERAGE", hint: "Something to drink", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 243 - CARBONATED BEVERAGE
  // =============================================
  {
    category: "CARBONATED BEVERAGE",
    puzzleNumber: 243,
    amuseBouche: { word: "POP", hint: "A bubbly nickname for soda", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "POP", hint: "Midwestern word for soda", revealedIndex: 0 },
        { word: "COKE", hint: "Famous red-labeled cola", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PEPSI", hint: "Coke's biggest rival", revealedIndex: 3 },
        { word: "BUBBLY", hint: "Full of fizz", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SPARKLE", hint: "Fizz and shimmer", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 244 - A CHARLIE BROWN THANKSGIVING
  // =============================================
  {
    category: "A CHARLIE BROWN THANKSGIVING",
    puzzleNumber: 244,
    amuseBouche: { word: "TOM", hint: "Short for a male turkey", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PING", hint: "_____ Pong table used for the feast", revealedIndex: 0 },
        { word: "TOAST", hint: "Charlie Brown's dinner bread", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SCREAM", hint: "Charlie Brown's cry of anguish", revealedIndex: 3 },
        { word: "POPCORN", hint: "Snack served at the quirky feast", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PRETZELS", hint: "Salty twisted snack on the menu", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 245 - ROCKY
  // =============================================
  {
    category: "ROCKY",
    puzzleNumber: 245,
    amuseBouche: { word: "JAB", hint: "A quick boxing punch", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "GOAL", hint: "Something to aim for", revealedIndex: 0 },
        { word: "GONNA", hint: "'_____ Fly Now' theme song", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BOXING", hint: "Sport of the film", revealedIndex: 3 },
        { word: "WRITTEN", hint: "_____ by Sylvester Stallone in 3 days", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DISTANCE", hint: "Going the ___, a personal goal", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 246 - CRANBERRY
  // =============================================
  {
    category: "CRANBERRY",
    puzzleNumber: 246,
    amuseBouche: { word: "BOG", hint: "Where cranberries are grown", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "CAN", hint: "Jellied sauce often comes in this", revealedIndex: 0 },
        { word: "TART", hint: "Sharp, puckery flavor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FRUIT", hint: "Berry, botanically speaking", revealedIndex: 3 },
        { word: "BOUNCE", hint: "What ripe ones do like a rubber ball", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "VIBRANT", hint: "Bright ruby-red color", revealedIndex: 4 }
      ]}
    ]
  },
  // =============================================
  // Puzzle 247 - JUKEBOX
  // =============================================
  {
    category: "JUKEBOX",
    puzzleNumber: 247,
    amuseBouche: { word: "HIT", hint: "A popular song on the jukebox", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HITS", hint: "Popular songs on the playlist", revealedIndex: 0 },
        { word: "JOINT", hint: "Establishment known as a juke ____", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "NICKEL", hint: "Five-cent coin that once played a song", revealedIndex: 3 },
        { word: "PRESLEY", hint: "The 'Hound Dog' singer", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NUMBERED", hint: "Selection buttons come labeled this way", revealedIndex: 4 }
      ]}
    ]
  },
];

// ============================================================
// REPLACE YOUR ENTIRE getTodaysPuzzle() FUNCTION WITH THIS:
// ============================================================

export function getTodaysPuzzle() {
  const now = new Date();
  const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const hour = estTime.getHours();
  const puzzleDate = new Date(estTime);
  if (hour < 20) {
    puzzleDate.setDate(puzzleDate.getDate() - 1);
  }
  puzzleDate.setHours(20, 0, 0, 0);

  const launchDate = new Date('2026-03-09T20:00:00-05:00');
  const daysSinceLaunch = Math.floor((puzzleDate - launchDate) / (1000 * 60 * 60 * 24));

  // Batch 1 (original content): days 0–164
  const OLD_LENGTH = 55;
  const LAST_OLD_LAP_END = 164;

  // Batch 2 (Compost → Almonds, 54 puzzles): days 165–218
  const BATCH2_LENGTH = 54;
  const BATCH2_START = 165;
  const BATCH2_END = BATCH2_START + BATCH2_LENGTH - 1; // 218

  // Batch 3 (Sugar Cookie → Skyscraper, 57 puzzles): days 219–275
  const BATCH3_LENGTH = 57;
  const BATCH3_START = BATCH2_END + 1; // 219
  const BATCH3_END = BATCH3_START + BATCH3_LENGTH - 1; // 275

  // Batch 4 (Macadamia Nuts → Jukebox, 81 puzzles): days 276 onward
  const BATCH4_LENGTH = 81;
  const BATCH4_START = BATCH3_END + 1; // 276 (= Dec 10, 2026)

  let puzzleIndex;
  if (daysSinceLaunch <= LAST_OLD_LAP_END) {
    puzzleIndex = daysSinceLaunch % OLD_LENGTH;
  } else if (daysSinceLaunch <= BATCH2_END) {
    puzzleIndex = OLD_LENGTH + ((daysSinceLaunch - BATCH2_START) % BATCH2_LENGTH);
  } else if (daysSinceLaunch <= BATCH3_END) {
    puzzleIndex = OLD_LENGTH + BATCH2_LENGTH + ((daysSinceLaunch - BATCH3_START) % BATCH3_LENGTH);
  } else {
    puzzleIndex = OLD_LENGTH + BATCH2_LENGTH + BATCH3_LENGTH + ((daysSinceLaunch - BATCH4_START) % BATCH4_LENGTH);
  }

  return puzzles[puzzleIndex];
}


export default puzzles;