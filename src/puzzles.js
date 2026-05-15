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
  
  // Calculate days since launch date (March 10, 2026 at 8 PM EST)
  const launchDate = new Date('2026-03-09T20:00:00-05:00');
  const daysSinceLaunch = Math.floor((puzzleDate - launchDate) / (1000 * 60 * 60 * 24));
  
  // Rotate through puzzles
  const puzzleIndex = ((daysSinceLaunch % puzzles.length) + puzzles.length) % puzzles.length;
  
  return puzzles[puzzleIndex];
}

export default puzzles;