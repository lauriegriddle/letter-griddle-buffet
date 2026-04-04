// Letter Griddle Buffet - Puzzles
// 42 puzzles in optimized rotation (no conflicts with Little Letter Griddle)
// Launch Date: March 10, 2026 at 8 PM EST
// Updated: April 4, 2026 - Added 16 new puzzles

const puzzles = [
  // =============================================
  // Puzzle 1 - WATER
  // =============================================
  {
    category: "WATER",
    puzzleNumber: 1,
    amuseBouche: { word: "ICE", hint: "Frozen form of water", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "FLOW", hint: "To move steadily and continuously in a current", revealedIndex: 0 },
        { word: "VAPOR", hint: "Water in its gaseous form, like steam or mist", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "STREAM", hint: "A small, narrow river flowing through the land", revealedIndex: 3 },
        { word: "REFRESH", hint: "To restore energy or make something feel new again", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "RESERVOIR", hint: "A large natural or artificial lake used as a water supply", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 2 - FROGURT
  // =============================================
  {
    category: "FROGURT",
    puzzleNumber: 2,
    amuseBouche: { word: "CUP", hint: "Container for your frozen treat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TART", hint: "Having a sharp, tangy taste", revealedIndex: 0 },
        { word: "FRUIT", hint: "A popular topping like strawberries or mango", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLAVOR", hint: "The distinctive taste of a food", revealedIndex: 3 },
        { word: "REFRESH", hint: "To cool down or revive", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "TOPPINGS", hint: "Extras added on top like sprinkles or nuts", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 3 - OPERA
  // =============================================
  {
    category: "OPERA",
    puzzleNumber: 3,
    amuseBouche: { word: "ACT", hint: "A division of a theatrical performance", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ARIA", hint: "A solo song performed by a single voice", revealedIndex: 0 },
        { word: "TENOR", hint: "A high adult male singing voice", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CHORUS", hint: "A group of singers performing together", revealedIndex: 3 },
        { word: "SOPRANO", hint: "The highest female singing voice", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "BARITONE", hint: "A male voice between tenor and bass", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 4 - RADIO
  // =============================================
  {
    category: "RADIO",
    puzzleNumber: 4,
    amuseBouche: { word: "AIR", hint: "Where radio waves travel", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WAVE", hint: "An electromagnetic signal that carries sound", revealedIndex: 0 },
        { word: "TUNER", hint: "A device that selects a specific frequency", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SIGNAL", hint: "A transmitted broadcast picked up by receivers", revealedIndex: 3 },
        { word: "ANTENNA", hint: "A metal rod or dish that picks up transmissions", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "RECEIVER", hint: "A device that captures and plays broadcasts", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 5 - COMPLIMENTS
  // =============================================
  {
    category: "COMPLIMENTS",
    puzzleNumber: 5,
    amuseBouche: { word: "AWE", hint: "A feeling of wonder and admiration", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WISH", hint: "A hope or desire for someone's happiness", revealedIndex: 0 },
        { word: "BOOST", hint: "To lift up or increase confidence", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MORALE", hint: "The spirit or confidence of a person or group", revealedIndex: 3 },
        { word: "GENUINE", hint: "Sincere and authentic, not fake", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "POSITIVE", hint: "Optimistic and encouraging", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 6 - CHEESE DOODLES
  // =============================================
  {
    category: "CHEESE DOODLES",
    puzzleNumber: 6,
    amuseBouche: { word: "POP", hint: "Sound of a bag opening", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NEON", hint: "A bright, fluorescent color like orange", revealedIndex: 0 },
        { word: "SNACK", hint: "A small portion of food eaten between meals", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "POWDER", hint: "A fine, dusty coating left on fingers", revealedIndex: 3 },
        { word: "CHEDDAR", hint: "A type of cheese used for flavoring", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CORNMEAL", hint: "Ground corn used as the base ingredient", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 7 - CHEESECAKE
  // =============================================
  {
    category: "CHEESECAKE",
    puzzleNumber: 7,
    amuseBouche: { word: "PAN", hint: "Baking vessel with removable bottom", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SOUR", hint: "A type of cream used to add tanginess", revealedIndex: 0 },
        { word: "CRUST", hint: "The graham cracker base of the dessert", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CREAMY", hint: "Smooth and rich in texture", revealedIndex: 3 },
        { word: "CUSTARD", hint: "A thick, creamy mixture of eggs and cream", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HEAVENLY", hint: "Delightfully delicious, like paradise", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 8 - WINDOW
  // =============================================
  {
    category: "WINDOW",
    puzzleNumber: 8,
    amuseBouche: { word: "FRY", hint: "Cooking method for fast food favorites", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SODA", hint: "A fizzy carbonated beverage", revealedIndex: 0 },
        { word: "SHAKE", hint: "A thick, blended ice cream drink", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "BURGER", hint: "A sandwich with a ground beef patty", revealedIndex: 3 },
        { word: "KETCHUP", hint: "A tomato-based condiment for fries", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PICKLES", hint: "Tangy cucumber slices on a sandwich", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 9 - STICKY BUN
  // =============================================
  {
    category: "STICKY BUN",
    puzzleNumber: 9,
    amuseBouche: { word: "YUM", hint: "Expression of deliciousness", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NUTS", hint: "Crunchy toppings like pecans or walnuts", revealedIndex: 0 },
        { word: "GOOEY", hint: "Soft, sticky, and deliciously messy", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SPIRAL", hint: "A coiled or rolled shape", revealedIndex: 3 },
        { word: "CARAMEL", hint: "A sweet, buttery topping made from sugar", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "INVERTED", hint: "Flipped upside down when served", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 10 - BROWN BAG
  // =============================================
  {
    category: "BROWN BAG",
    puzzleNumber: 10,
    amuseBouche: { word: "EAT", hint: "What you do with your packed lunch", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PREP", hint: "To prepare food in advance", revealedIndex: 0 },
        { word: "LUNCH", hint: "A midday meal", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "NAPKIN", hint: "A cloth or paper for wiping hands and face", revealedIndex: 3 },
        { word: "THERMOS", hint: "An insulated container to keep drinks hot or cold", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CONTENTS", hint: "What's inside the bag", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 11 - BREAD
  // =============================================
  {
    category: "BREAD",
    puzzleNumber: 11,
    amuseBouche: { word: "RYE", hint: "A hearty grain used in bread", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "RISE", hint: "What dough does when yeast activates", revealedIndex: 0 },
        { word: "CRUST", hint: "The golden outer layer of a baked loaf", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CRUMBY", hint: "Full of small dry pieces that break off", revealedIndex: 3 },
        { word: "BUTTERY", hint: "Rich and smooth like melted spread", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SANDWICH", hint: "Two slices with fillings in between", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 12 - BEVERAGE
  // =============================================
  {
    category: "BEVERAGE",
    puzzleNumber: 12,
    amuseBouche: { word: "SIP", hint: "To drink in small amounts", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "SODA", hint: "A carbonated sweet drink, also called pop", revealedIndex: 0 },
        { word: "FIZZY", hint: "Bubbly and effervescent, full of tiny bubbles", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "COFFEE", hint: "A caffeinated drink brewed from roasted beans", revealedIndex: 3 },
        { word: "REFRESH", hint: "To restore energy or make something feel new again", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MILKSHAKE", hint: "A thick, creamy drink blended with ice cream", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 13 - ON THE TABLE
  // =============================================
  {
    category: "ON THE TABLE",
    puzzleNumber: 13,
    amuseBouche: { word: "SET", hint: "To arrange dishes for a meal", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BOWL", hint: "A deep, rounded dish for soup or cereal", revealedIndex: 0 },
        { word: "PLATE", hint: "A flat dish for serving a main course", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SAUCER", hint: "A small shallow dish that goes under a cup", revealedIndex: 3 },
        { word: "PLATTER", hint: "A large serving dish for meats or appetizers", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "PLACEMAT", hint: "A protective mat placed under a table setting", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 14 - FROZEN
  // =============================================
  {
    category: "FROZEN",
    puzzleNumber: 14,
    amuseBouche: { word: "BRR", hint: "Sound of shivering from cold", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "COLD", hint: "Having a low temperature", revealedIndex: 0 },
        { word: "POLAR", hint: "Relating to the icy regions near the North or South Pole", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "ARCTIC", hint: "The frigid region surrounding the North Pole", revealedIndex: 3 },
        { word: "BITING", hint: "Describes a sharp, piercing chill in the air", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "FREEZING", hint: "Extremely cold, at or below 32 degrees Fahrenheit", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 15 - GUITAR
  // =============================================
  {
    category: "GUITAR",
    puzzleNumber: 15,
    amuseBouche: { word: "AMP", hint: "Device that makes the sound louder", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PICK", hint: "A small flat tool used to pluck strings", revealedIndex: 0 },
        { word: "STRUM", hint: "To brush fingers across strings to make chords", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "STRING", hint: "A thin cord stretched across the instrument to produce sound", revealedIndex: 3 },
        { word: "AMPLIFY", hint: "To increase the volume of sound electronically", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "ACOUSTIC", hint: "A type that produces sound naturally without electronics", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 16 - MOUNTAINS
  // =============================================
  {
    category: "MOUNTAINS",
    puzzleNumber: 16,
    amuseBouche: { word: "SKI", hint: "Winter sport on snowy slopes", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "HILL", hint: "A small, rounded elevation of land, lower than a mountain", revealedIndex: 0 },
        { word: "RANGE", hint: "A chain of mountains connected in a line", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RIDGED", hint: "Having a long, narrow elevated crest or edge", revealedIndex: 3 },
        { word: "VOLCANO", hint: "A mountain that can erupt with lava and ash", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "HILLSIDE", hint: "The sloping side of a hill or mountain", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 17 - WEATHER
  // =============================================
  {
    category: "WEATHER",
    puzzleNumber: 17,
    amuseBouche: { word: "FOG", hint: "A thick mist that reduces visibility", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "WIND", hint: "Moving air caused by differences in atmospheric pressure", revealedIndex: 0 },
        { word: "CLOUD", hint: "A visible mass of water droplets floating in the sky", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "REPORT", hint: "A forecast telling you what conditions to expect", revealedIndex: 3 },
        { word: "CLIMATE", hint: "The long-term pattern of weather in a region", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SUNSHINE", hint: "Bright, warm light from the sun on a clear day", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 18 - SKYGAZING
  // =============================================
  {
    category: "SKYGAZING",
    puzzleNumber: 18,
    amuseBouche: { word: "SKY", hint: "The expanse above us", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "STAR", hint: "A bright point of light in the night sky", revealedIndex: 0 },
        { word: "CLOUD", hint: "A white or gray mass floating in the sky", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "SUNSET", hint: "When the sun dips below the horizon in the evening", revealedIndex: 3 },
        { word: "MOONLIT", hint: "Illuminated by the glow of the moon", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DARKNESS", hint: "The absence of light in the night sky", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 19 - PIE
  // =============================================
  {
    category: "PIE",
    puzzleNumber: 19,
    amuseBouche: { word: "TIN", hint: "Metal pan for baking", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ROLL", hint: "To flatten dough with a cylindrical tool", revealedIndex: 0 },
        { word: "FRUIT", hint: "A sweet filling made from apples, berries, or cherries", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "PASTRY", hint: "A baked dough used for crusts and shells", revealedIndex: 3 },
        { word: "FILLING", hint: "The sweet or savory mixture inside a crust", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MERINGUE", hint: "A fluffy topping made from whipped egg whites and sugar", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 20 - SNACKING
  // =============================================
  {
    category: "SNACKING",
    puzzleNumber: 20,
    amuseBouche: { word: "DIP", hint: "A sauce for dunking chips", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "NOSH", hint: "To eat snacks or light bites between meals", revealedIndex: 0 },
        { word: "GRAZE", hint: "To eat small amounts throughout the day", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "MORSEL", hint: "A small piece or bite of food", revealedIndex: 3 },
        { word: "MUNCHIE", hint: "A craving for something to snack on", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "NIBBLING", hint: "Eating in small, delicate bites", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 21 - CHOCOLATE
  // =============================================
  {
    category: "CHOCOLATE",
    puzzleNumber: 21,
    amuseBouche: { word: "BAR", hint: "A rectangular block of candy", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "DARK", hint: "A rich, intense variety with less sugar", revealedIndex: 0 },
        { word: "FUDGE", hint: "A soft, dense confection often made with cocoa", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "FLAVOR", hint: "The distinctive taste of a food or drink", revealedIndex: 3 },
        { word: "VELVETY", hint: "Smooth and rich in texture", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "DECADENT", hint: "Luxuriously rich and indulgent", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 22 - TEA
  // =============================================
  {
    category: "TEA",
    puzzleNumber: 22,
    amuseBouche: { word: "CUP", hint: "Vessel for your hot drink", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BREW", hint: "To prepare by soaking in hot water", revealedIndex: 0 },
        { word: "STEEP", hint: "To soak leaves in hot water to extract flavor", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "KETTLE", hint: "A container used to boil water", revealedIndex: 3 },
        { word: "INFUSER", hint: "A device that holds loose leaves while they soak", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "STRAINER", hint: "A tool used to filter out leaves from the liquid", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 23 - CRAFTING
  // =============================================
  {
    category: "CRAFTING",
    puzzleNumber: 23,
    amuseBouche: { word: "SEW", hint: "To join fabric with needle and thread", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "ARTS", hint: "Creative activities involving skill and imagination", revealedIndex: 0 },
        { word: "HOBBY", hint: "A leisure activity done for enjoyment", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "CREATE", hint: "To make or bring something into existence", revealedIndex: 3 },
        { word: "DESIGNS", hint: "Plans and makes something with purpose", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SKILLFUL", hint: "Having or showing expertise and ability", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 24 - TATER TOTS
  // =============================================
  {
    category: "TATER TOTS",
    puzzleNumber: 24,
    amuseBouche: { word: "OIL", hint: "Used for frying crispy treats", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "PUFF", hint: "To swell or expand with air", revealedIndex: 0 },
        { word: "CRUST", hint: "A crispy outer layer formed when cooked", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "POTATO", hint: "The starchy vegetable these are made from", revealedIndex: 3 },
        { word: "COMFORT", hint: "A type of food that brings warmth and satisfaction", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "CYLINDER", hint: "The classic shape of these bite-sized treats", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 25 - FULL MOON
  // =============================================
  {
    category: "FULL MOON",
    puzzleNumber: 25,
    amuseBouche: { word: "ORB", hint: "A spherical celestial body", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "TIDE", hint: "The rise and fall of ocean water influenced by lunar gravity", revealedIndex: 0 },
        { word: "LUNAR", hint: "Relating to the moon", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "APOLLO", hint: "NASA's program that landed humans on the moon", revealedIndex: 3 },
        { word: "ECLIPSE", hint: "When Earth's shadow blocks sunlight from reaching the moon", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SATELLITE", hint: "A natural or artificial body orbiting a planet", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 26 - COFFEE BREAK
  // =============================================
  {
    category: "COFFEE BREAK",
    puzzleNumber: 26,
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
        { word: "AFTERNOON", hint: "The time of day when you might need a pick-me-up", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // NEW PUZZLES START HERE (Puzzles 27-42)
  // Added April 4, 2026
  // =============================================

  // =============================================
  // Puzzle 27 - VACATION
  // =============================================
  {
    category: "VACATION",
    puzzleNumber: 27,
    amuseBouche: { word: "SPA", hint: "A relaxing wellness retreat", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "REST", hint: "Time to relax and recharge", revealedIndex: 0 },
        { word: "BREAK", hint: "A pause from work or routine", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "LEAVE", hint: "Time off from your job", revealedIndex: 3 },
        { word: "HOLIDAY", hint: "A special day or getaway", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "RELAXING", hint: "Calm and stress-free", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 28 - WAFFLE
  // =============================================
  {
    category: "WAFFLE",
    puzzleNumber: 28,
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
  // Puzzle 29 - POPCORN
  // =============================================
  {
    category: "POPCORN",
    puzzleNumber: 29,
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
  // Puzzle 30 - PUZZLES
  // =============================================
  {
    category: "PUZZLES",
    puzzleNumber: 30,
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
  // Puzzle 31 - PENCIL
  // =============================================
  {
    category: "PENCIL",
    puzzleNumber: 31,
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
  // Puzzle 32 - PAELLA
  // =============================================
  {
    category: "PAELLA",
    puzzleNumber: 32,
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
  // Puzzle 33 - SELFIE
  // =============================================
  {
    category: "SELFIE",
    puzzleNumber: 33,
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
  // Puzzle 34 - CARAMEL
  // =============================================
  {
    category: "CARAMEL",
    puzzleNumber: 34,
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
  // Puzzle 35 - SPRING
  // =============================================
  {
    category: "SPRING",
    puzzleNumber: 35,
    amuseBouche: { word: "BUD", hint: "A flower ready to open", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "BIRD", hint: "Migrating creatures returning north", revealedIndex: 0 },
        { word: "BLOOM", hint: "When flowers open up", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "GARDEN", hint: "A place to plant and grow", revealedIndex: 3 },
        { word: "RENEWAL", hint: "A fresh start or rebirth", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "SUNLIGHT", hint: "Longer days bring more of this", revealedIndex: 4 }
      ]}
    ]
  },

  // =============================================
  // Puzzle 36 - THEATRE
  // =============================================
  {
    category: "THEATRE",
    puzzleNumber: 36,
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
  // Puzzle 37 - BUTTERFLY
  // =============================================
  {
    category: "BUTTERFLY",
    puzzleNumber: 37,
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
  // Puzzle 38 - LAMB
  // =============================================
  {
    category: "LAMB",
    puzzleNumber: 38,
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
  // Puzzle 39 - PUPPY
  // =============================================
  {
    category: "PUPPY",
    puzzleNumber: 39,
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
  // Puzzle 40 - COOKIE
  // =============================================
  {
    category: "COOKIE",
    puzzleNumber: 40,
    amuseBouche: { word: "OAT", hint: "The main grain ingredient", revealedIndex: 0 },
    courses: [
      { name: "Appetizer", emoji: "🥗", words: [
        { word: "OATS", hint: "The hearty grain in the recipe", revealedIndex: 0 },
        { word: "CHEWY", hint: "Soft and easy to bite", revealedIndex: 2 },
      ]},
      { name: "Main Course", emoji: "🍝", words: [
        { word: "RAISIN", hint: "A dried grape often added", revealedIndex: 3 },
        { word: "HEALTHY", hint: "Good for you", revealedIndex: 0 },
      ]},
      { name: "Dessert", emoji: "🧁", words: [
        { word: "MOLASSES", hint: "A dark, sweet syrup", revealedIndex: 4 }
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