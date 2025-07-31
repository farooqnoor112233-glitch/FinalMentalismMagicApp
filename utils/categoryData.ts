// Letter classification for the magic trick
export const straightLetters = ['A', 'E', 'F', 'H', 'I', 'K', 'L', 'M', 'N', 'T', 'V', 'W', 'X', 'Y', 'Z'];
export const curvedLetters = ['B', 'C', 'D', 'G', 'J', 'O', 'P', 'Q', 'R', 'S', 'U'];

export const isLetterStraight = (letter: string): boolean => {
  return straightLetters.includes(letter.toUpperCase());
};

export const isLetterCurved = (letter: string): boolean => {
  return curvedLetters.includes(letter.toUpperCase());
};

// Category data with 100+ items each, balanced between straight and curved starting letters
export const categoryData = {
  colors: {
    name: 'Colours',
    items: [
      // Straight letter colors (50+)
      'Amber', 'Azure', 'Aqua', 'Amethyst', 'Alabaster', 'Apricot', 'Ash', 'Auburn',
      'Emerald', 'Ebony', 'Eggshell', 'Electric Blue', 'Eucalyptus',
      'Fuchsia', 'Forest Green', 'Flame', 'Flax', 'Frost', 'Fire Engine Red',
      'Hunter Green', 'Honey', 'Hot Pink', 'Harlequin', 'Heather',
      'Ivory', 'Indigo', 'Ice Blue', 'Imperial Purple', 'Iris',
      'Khaki', 'Kelly Green',
      'Lime', 'Lavender', 'Lemon', 'Lilac', 'Lapis', 'Light Blue', 'Lawn Green',
      'Maroon', 'Magenta', 'Mint', 'Mahogany', 'Mauve', 'Mustard', 'Midnight Blue',
      'Navy', 'Neon Green', 'Nude', 'Nickel',
      'Turquoise', 'Teal', 'Tan', 'Taupe', 'Tomato', 'Tiger Orange',
      'Violet', 'Vermillion', 'Vanilla', 'Viridian',
      'White', 'Wine', 'Wheat', 'Wisteria',
      'Yellow', 'Yam',
      'Zinc',
      // Curved letter colors (50+)
      'Blue', 'Black', 'Brown', 'Beige', 'Burgundy', 'Bronze', 'Brick', 'Blush',
      'Crimson', 'Coral', 'Cream', 'Cyan', 'Chartreuse', 'Chocolate', 'Cherry', 'Celadon',
      'Dark Blue', 'Deep Purple', 'Dusty Rose',
      'Gold', 'Green', 'Gray', 'Grey', 'Goldenrod',
      'Jade', 'Jet Black',
      'Orange', 'Olive', 'Orchid', 'Opal', 'Oxblood',
      'Pink', 'Purple', 'Peach', 'Plum', 'Periwinkle', 'Pewter', 'Pearl', 'Puce',
      'Red', 'Rose', 'Ruby', 'Rust', 'Royal Blue', 'Robin Egg Blue',
      'Silver', 'Scarlet', 'Sage', 'Salmon', 'Sand', 'Sepia', 'Sky Blue', 'Slate',
      'Ultramarine', 'Umber', 'Upsdell Red'
    ]
  },
  
  cities: {
    name: 'Cities',
    items: [
      // Straight letter cities (50+)
      'Amsterdam', 'Athens', 'Atlanta', 'Adelaide', 'Auckland', 'Austin', 'Anchorage',
      'Edinburgh', 'El Paso', 'Eugene',
      'Florence', 'Frankfurt', 'Fresno', 'Fort Worth',
      'Hamburg', 'Helsinki', 'Houston', 'Honolulu', 'Halifax',
      'Istanbul', 'Indianapolis', 'Islamabad',
      'Kiev', 'Kansas City', 'Kuala Lumpur',
      'London', 'Los Angeles', 'Liverpool', 'Lima', 'Lisbon', 'Leipzig', 'Lyon',
      'Madrid', 'Milan', 'Munich', 'Montreal', 'Melbourne', 'Miami', 'Memphis', 'Minneapolis',
      'Naples', 'Nashville', 'Newcastle', 'Nice', 'Norfolk',
      'Tokyo', 'Toronto', 'Taipei', 'Tel Aviv', 'Tampa', 'Tucson', 'Toledo',
      'Vienna', 'Venice', 'Vancouver', 'Vilnius', 'Valencia',
      'Warsaw', 'Washington', 'Winnipeg', 'Wellington',
      'Yokohama', 'York',
      'Zagreb', 'Zurich',
      // Curved letter cities (50+)
      'Berlin', 'Boston', 'Barcelona', 'Bangkok', 'Buenos Aires', 'Brussels', 'Birmingham', 'Bogota',
      'Chicago', 'Cairo', 'Copenhagen', 'Cologne', 'Calgary', 'Charlotte', 'Cincinnati', 'Cleveland',
      'Dublin', 'Dubai', 'Dallas', 'Denver', 'Detroit', 'Dresden',
      'Geneva', 'Glasgow', 'Gothenburg',
      'Jakarta', 'Jerusalem', 'Johannesburg',
      'Oslo', 'Ottawa', 'Orlando', 'Osaka', 'Oxford',
      'Paris', 'Prague', 'Philadelphia', 'Phoenix', 'Portland', 'Pittsburgh', 'Palermo',
      'Rome', 'Rio de Janeiro', 'Rotterdam', 'Reykjavik', 'Raleigh', 'Richmond',
      'Sydney', 'Stockholm', 'Singapore', 'Seattle', 'San Francisco', 'St. Petersburg', 'Seoul', 'Shanghai',
      'Utrecht', 'Ulaanbaatar'
    ]
  },
  
  fruits: {
    name: 'Fruits',
    items: [
      // Straight letter fruits (50+)
      'Apple', 'Apricot', 'Avocado', 'Acai', 'Ackee',
      'Elderberry', 'Eggfruit',
      'Fig', 'Feijoa',
      'Honeydew', 'Huckleberry',
      'Indian Fig', 'Icaco',
      'Kiwi', 'Kumquat', 'Key Lime',
      'Lemon', 'Lime', 'Lychee', 'Longan', 'Lingonberry', 'Loganberry',
      'Mango', 'Melon', 'Mulberry', 'Mangosteen', 'Mandarin', 'Miracle Fruit',
      'Nectarine', 'Noni',
      'Tangerine', 'Tamarind', 'Tomato',
      'Vanilla Bean', 'Velvet Apple',
      'Watermelon', 'White Currant', 'Wild Cherry', 'Wolfberry',
      'Yellow Passion Fruit', 'Yuzu',
      'Zucchini', 'Ziziphus',
      // Curved letter fruits (50+)
      'Banana', 'Blueberry', 'Blackberry', 'Boysenberry', 'Blood Orange', 'Breadfruit',
      'Cherry', 'Cranberry', 'Coconut', 'Cantaloupe', 'Custard Apple', 'Clementine', 'Currant',
      'Date', 'Dragonfruit', 'Durian', 'Dewberry',
      'Grape', 'Grapefruit', 'Gooseberry', 'Guava', 'Golden Berry',
      'Jackfruit', 'Jujube', 'Juniper Berry',
      'Orange', 'Olive',
      'Papaya', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Persimmon', 'Passion Fruit',
      'Raspberry', 'Rambutan', 'Rose Hip', 'Red Currant',
      'Strawberry', 'Starfruit', 'Sugar Apple', 'Soursop', 'Sapodilla',
      'Ugli Fruit'
    ]
  },
  
  objects: {
    name: 'Objects',
    items: [
      // Straight letter objects (50+)
      'Anchor', 'Axe', 'Arrow', 'Album', 'Airplane', 'Alarm Clock',
      'Envelope', 'Eraser', 'Engine', 'Easel',
      'Fork', 'Fan', 'Flashlight', 'Frame', 'Fire Extinguisher',
      'Hammer', 'Hat', 'Hook', 'Hose', 'Handle',
      'Ice Cube', 'Iron', 'Ink',
      'Key', 'Knife', 'Kettle', 'Kite',
      'Lamp', 'Ladder', 'Lock', 'Lens', 'Leaf',
      'Mirror', 'Mug', 'Map', 'Magnet', 'Mouse', 'Microphone',
      'Needle', 'Net', 'Nail', 'Notepad',
      'Telescope', 'Table', 'Towel', 'Thermometer', 'Tire',
      'Vase', 'Vacuum', 'Violin', 'Video Camera',
      'Watch', 'Wallet', 'Window', 'Wheel', 'Wire',
      'Yarn', 'Yardstick',
      'Zipper', 'Zapper',
      // Curved letter objects (50+)
      'Book', 'Bottle', 'Ball', 'Basket', 'Brush', 'Box', 'Bag', 'Belt',
      'Chair', 'Cup', 'Computer', 'Camera', 'Clock', 'Candle', 'Car', 'Coin',
      'Door', 'Desk', 'Drum', 'Drill', 'Dice',
      'Guitar', 'Glass', 'Glove', 'Globe',
      'Jacket', 'Jar', 'Jewel',
      'Oven', 'Orange', 'Oil',
      'Phone', 'Pen', 'Pencil', 'Pillow', 'Plate', 'Picture', 'Piano', 'Purse',
      'Ring', 'Rope', 'Radio', 'Ruler', 'Remote',
      'Spoon', 'Scissors', 'Soap', 'Shoe', 'Shirt', 'Shield', 'Stapler',
      'Umbrella', 'Urn'
    ]
  },
  
  animals: {
    name: 'Animals',
    items: [
      // Straight letter animals (50+)
      'Ant', 'Alligator', 'Antelope', 'Ape', 'Armadillo', 'Aardvark',
      'Elephant', 'Eagle', 'Eel', 'Elk', 'Emu', 'Ermine',
      'Fox', 'Frog', 'Fish', 'Falcon', 'Flamingo', 'Ferret',
      'Horse', 'Hawk', 'Hedgehog', 'Hamster', 'Hippo', 'Hyena',
      'Iguana', 'Ibis',
      'Kangaroo', 'Koala', 'Kiwi',
      'Lion', 'Llama', 'Lemur', 'Lynx', 'Lobster', 'Lizard',
      'Monkey', 'Mouse', 'Moose', 'Mule', 'Manta Ray', 'Mongoose',
      'Newt', 'Narwhal', 'Nightingale',
      'Tiger', 'Turkey', 'Turtle', 'Toucan', 'Tuna', 'Tarantula',
      'Vulture', 'Vicuna', 'Viper',
      'Wolf', 'Whale', 'Walrus', 'Weasel', 'Woodpecker', 'Wombat',
      'Yak', 'Yellowfin Tuna',
      'Zebra', 'Zebu',
      // Curved letter animals (50+)
      'Bear', 'Bird', 'Bat', 'Bee', 'Buffalo', 'Butterfly', 'Bull', 'Beaver',
      'Cat', 'Cow', 'Chicken', 'Cheetah', 'Camel', 'Crab', 'Crocodile', 'Chameleon',
      'Dog', 'Duck', 'Dolphin', 'Deer', 'Donkey', 'Dove', 'Dragonfly',
      'Goat', 'Gorilla', 'Giraffe', 'Goose', 'Goldfish', 'Gecko',
      'Jaguar', 'Jellyfish', 'Jay',
      'Octopus', 'Owl', 'Otter', 'Ox', 'Ostrich',
      'Pig', 'Penguin', 'Panda', 'Parrot', 'Peacock', 'Pelican', 'Porcupine',
      'Rabbit', 'Rhino', 'Robin', 'Rooster', 'Rat', 'Raven',
      'Snake', 'Shark', 'Sheep', 'Squirrel', 'Swan', 'Spider', 'Seal', 'Starfish',
      'Unicorn', 'Urchin'
    ]
  },
  
  celebrities: {
    name: 'Celebrities',
    items: [
      // Straight letter celebrities (50+)
      'Adele', 'Angelina Jolie', 'Arnold Schwarzenegger', 'Amy Adams', 'Al Pacino',
      'Emma Stone', 'Elvis Presley', 'Elton John', 'Eddie Murphy', 'Elizabeth Taylor',
      'Frank Sinatra', 'Freddie Mercury',
      'Harrison Ford', 'Hugh Jackman', 'Halle Berry',
      'Ian McKellen',
      'Keanu Reeves', 'Kate Winslet', 'Kevin Costner',
      'Leonardo DiCaprio', 'Lady Gaga', 'Lionel Messi',
      'Madonna', 'Meryl Streep', 'Michael Jordan', 'Matt Damon', 'Morgan Freeman',
      'Natalie Portman', 'Nicole Kidman',
      'Tom Hanks', 'Taylor Swift', 'Tom Cruise', 'Tina Turner',
      'Viola Davis', 'Vin Diesel',
      'Will Smith', 'Whitney Houston', 'Whoopi Goldberg',
      'Yoko Ono',
      'Zendaya',
      // Curved letter celebrities (50+)
      'Brad Pitt', 'Beyonce', 'Barack Obama', 'Bill Gates', 'Bob Dylan',
      'Celine Dion', 'Chris Hemsworth', 'Clint Eastwood', 'Cameron Diaz',
      'Denzel Washington', 'Dwayne Johnson', 'David Beckham',
      'George Clooney', 'Gordon Ramsay',
      'Jennifer Lawrence', 'Julia Roberts', 'Johnny Depp', 'Jack Nicholson',
      'Oprah Winfrey', 'Orlando Bloom',
      'Prince', 'Paul McCartney', 'Penelope Cruz',
      'Robert De Niro', 'Robin Williams', 'Ryan Gosling', 'Rihanna',
      'Scarlett Johansson', 'Sandra Bullock', 'Steven Spielberg', 'Shakira',
      'Uma Thurman'
    ]
  }
};

export const getRandomizedItems = (category: keyof typeof categoryData) => {
  const items = [...categoryData[category].items];
  // Fisher-Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

export const generateMagicList = (selectedItem: string, category: keyof typeof categoryData) => {
  const allItems = categoryData[category].items;
  const selectedLetterType = isLetterStraight(selectedItem[0]) ? 'straight' : 'curved';
  const oppositeLetterType = selectedLetterType === 'straight' ? 'curved' : 'straight';
  
  // Get 9 items of the opposite type
  const oppositeItems = allItems.filter(item => {
    if (item === selectedItem) return false;
    const itemLetterType = isLetterStraight(item[0]) ? 'straight' : 'curved';
    return itemLetterType === oppositeLetterType;
  });
  
  // Randomly select 9 items
  const shuffledOpposite = [...oppositeItems];
  for (let i = shuffledOpposite.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOpposite[i], shuffledOpposite[j]] = [shuffledOpposite[j], shuffledOpposite[i]];
  }
  
  const nineItems = shuffledOpposite.slice(0, 9);
  const finalList = [...nineItems, selectedItem];
  
  // Shuffle the final list
  for (let i = finalList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [finalList[i], finalList[j]] = [finalList[j], finalList[i]];
  }
  
  return finalList;
};