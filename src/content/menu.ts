// Menu data transcribed from Pal Cafe's live Qlub digital menu (Khalifa City QSR).
// Prices are AED, exactly as listed. Item names have obvious typos corrected for
// presentation; ingredients/descriptions are otherwise verbatim from the source.
// Descriptions that were cut off in the source are left truncated rather than invented.

export interface MenuItem {
  slug: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  blurb?: string;
  items: MenuItem[];
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Slugs with a real photo in /public/menu, sourced from Pal Cafe's own Qlub
// menu PDF (product photography embedded in the exported document).
const PHOTOGRAPHED_SLUGS = new Set([
  "eira-still-water-700ml",
  "eira-sparkling-water-700ml",
  "cloudy-matcha",
  "plain-croissant",
  "double-cheese-croissant",
  "chocolate-croissant",
  "almond-dream-croissant",
  "croissant-got-loaded",
  "loaded-fries",
  "french-fries",
  "truffled-fries",
  "poke-bowl",
  "acai-bowl",
  "homemade-granola-bowl",
  "sunrise-bowl",
  "the-breakfast-bowl",
  "classic-egg-benedict",
  "scrambled-egg-mushroom-roll",
  "truffled-egg-and-cheese",
  "truffle-creamy-mushroom",
  "french-toast",
  "avocado-toast",
  "english-breakfast",
  "spicy-turkish-egg",
  "cheesy-paratha-roll",
  "the-morning-halloumi",
  "pal-signature-flattered",
  "avo-cottage-crush",
  "get-smashed-shredded",
  "brioche-avo-twister",
  "burrata-walnuts",
  "truffled-burger",
  "caesar-chicken-burger",
  "smashed-wagyu-burger",
  "tiramisu",
  "pecan-pie",
  "cookie",
  "banana-pudding",
  "classic-aseeda",
  "crunchy-chocolate-cake",
  "toffee-date-pudding",
  "custard-drink",
  "chocolate-tiramisu",
  "caramel-pecan-cheesecake",
  "classic-umm-ali",
  "chicken-aglio-e-olio",
  "spaghetti-carbonara",
  "penne-arrabbiata",
  "spaghetti-meatballs",
  "corn-salad",
  "signature-caesar-salad",
  "ancient-grain-salad",
  "chicken-katsu-sandwich",
  "turkey-sandwich",
  "halloumi-cheese-sandwich",
  "wagyu-sandwich",
  "arabian-tuna-fold",
  "ciabatta-done-right",
  "spicy-turkey-club",
  "bacon-me-crazy",
  "cold-brew-bottle",
  "hibiscus",
  "coca-cola",
  "coca-cola-zero",
  "sprite",
  "hot-chocolate",
  "orange-juice",
  "classic-acai-smoothie",
  "peanut-butter-acai-smoothie",
  "berries-acai-smoothie",
  "moroccan-mint",
  "rooibos-vanilla-earl-grey",
  "cascara-lemonade",
  "iced-chocolate-foam",
  "salted-caramel-macchiato",
  "dirty-espresso",
  "cold-berries",
  "peach-coconut-smash",
  "mango-passion-matcha",
  "pistachio-cold-brew",
  "peach-cascara",
  "mango-iced-tea",
  "v60-mango-spark",
  "mount-blanc",
  "maple-cinnamon-matcha",
  "extra-dirty-espresso",
  "matcha-latte-cold",
  "flat-white",
  "cappuccino",
  "macchiato",
  "cortado",
  "latte",
]);

function items(names: [string, number, string?][]): MenuItem[] {
  return names.map(([name, price, description]) => {
    const slug = slugify(name);
    return {
      slug,
      name,
      price,
      description,
      image: PHOTOGRAPHED_SLUGS.has(slug) ? `/menu/${slug}.jpg` : undefined,
    };
  });
}

export const menu: MenuCategory[] = [
  {
    id: "espresso-coffee",
    name: "Espresso Coffee",
    blurb: "Our specialty espresso bar, pulled to order.",
    items: items([
      ["Espresso", 16],
      ["Double Espresso", 18],
      ["Americano", 19],
      ["Macchiato", 24],
      ["Cortado", 24],
      ["Piccolo", 26],
      ["Spanish Piccolo", 27],
      ["Flat White", 27],
      ["Cappuccino", 27],
      ["Spanish Cortado", 27],
      ["Latte", 28],
      ["Iced Espresso", 18],
      ["Spanish Latte (Hot)", 32],
      ["Spanish Latte (Cold)", 32],
      ["Babychino", 13],
      ["Matcha Latte (Hot)", 41],
      ["Matcha Latte (Cold)", 41],
    ]),
  },
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    blurb: "Slow, hand-brewed coffee for the purists.",
    items: items([
      ["Kalita", 36],
      ["Chemex", 39],
      ["Aeropress", 39],
      ["V60 (Hot)", 42],
      ["V60 (Cold)", 42],
      ["Cold Brew", 27],
    ]),
  },
  {
    id: "signature-drinks",
    name: "Signature Drinks",
    blurb: "Pal Cafe originals — our specialty seasonal creations.",
    items: items([
      [
        "Cascara Lemonade",
        35,
        "Meet your new favorite refresher! We've paired the rich, unique notes of cascara…",
      ],
      [
        "Iced Chocolate Foam",
        35,
        "A premium iced beverage featuring a rich, chilled chocolate milk base, topped…",
      ],
      [
        "Salted Caramel Macchiato",
        35,
        "A rich, indulgent twist on the classic. Velvety full-fat milk sweetened with salted caramel…",
      ],
      [
        "Dirty Espresso",
        29,
        "A rich and refreshing iced coffee crafted with smooth Spanish milk, poured over…",
      ],
      [
        "Cold Berries",
        35,
        "A vibrant, fruity twist on iced coffee. Smooth Colombian cold brew perfectly balanced…",
      ],
      [
        "Peach Coconut Smash",
        35,
        "A refreshing, tropical smashed drink bursting with juicy peach flavor. Fresh peach…",
      ],
      [
        "Mango Passion Matcha",
        45,
        "A vibrant, tropical layered matcha drink bursting with fruitiness. Smooth matcha…",
      ],
      [
        "Pistachio Cold Brew",
        45,
        "Rich Colombian cold brew meets luxurious pistachio foam and toasted pistachio…",
      ],
      [
        "Peach Cascara",
        35,
        "A smooth, fruit-forward specialty refresher. The deep, dried-cherry notes of our…",
      ],
      [
        "Mango Iced Tea",
        32,
        "A sophisticated tropical refresher balancing the robust body of premium black tea…",
      ],
      [
        "V60 Mango Spark",
        38,
        "A vibrant, effervescent coffee twist. Fruity Ethiopian coffee with carbonic maceration…",
      ],
      [
        "Mount Blanc",
        38,
        "A bright, creamy twist on the viral classic. Smooth cold brew with vanilla syrup…",
      ],
      [
        "Maple Cinnamon Matcha",
        45,
        "Crafted for deep flavor complexity, this beverage highlights the natural, rustic…",
      ],
      ["Salted Maple Dirty Matcha", 29],
      [
        "Extra Dirty Espresso",
        29,
        "An extra dirty espresso (also known as a dirty latte or dirty coffee) is a multi-shot…",
      ],
      ["Ginger Shot", 25],
    ]),
  },
  {
    id: "mocktails",
    name: "Mocktails & Smoothies",
    items: items([
      ["Black Lemon Coffee", 26],
      ["Affogato", 24],
      ["Passion Cascara", 32],
      ["Blueberry & Rosemary Smashed", 32],
      ["Iced Apple Elderflower Cocktail", 27],
      ["Classic Acai Smoothie", 45],
      ["Peanut Butter Acai Smoothie", 45],
      ["Berries Acai Smoothie", 45],
      ["Acai Milk Smoothie", 45],
    ]),
  },
  {
    id: "tea",
    name: "Tea",
    items: items([
      ["Cherry Sencha", 27],
      ["Assam Breakfast", 27],
      ["Organic Chamomile Cooler", 27],
      ["Jasmine Silver Needle", 27],
      ["Rooibos Vanilla Earl Grey", 27],
      ["Moroccan Mint", 27],
      ["Hot Apple Elderflower Cocktail", 27],
    ]),
  },
  {
    id: "fresh-juice",
    name: "Fresh Squeezed Juice",
    items: items([["Orange Juice", 31]]),
  },
  {
    id: "bottles",
    name: "Bottles & Soft Drinks",
    items: items([
      ["Cold Brew (Bottle)", 32],
      ["Peach Iced Tea", 32],
      ["Hibiscus", 37],
      ["Coca-Cola", 10],
      ["Coca-Cola Zero", 10],
      ["Sprite", 10],
    ]),
  },
  {
    id: "water",
    name: "Water",
    items: items([
      ["Eira Still Water 700ml", 18],
      ["Eira Sparkling Water 700ml", 18],
      ["Eira Still Water 400ml", 14],
      ["Eira Sparkling Water 400ml", 14],
    ]),
  },
  {
    id: "breakfast",
    name: "Breakfast",
    items: items([
      [
        "Classic Egg Benedict",
        42,
        "English muffin, roasted mushroom, sautéed spinach, hollandaise sauce, roasted nuts…",
      ],
      [
        "Scrambled Egg & Mushroom Roll",
        44,
        "Croissant roll, scrambled egg, creamy mushroom, chopped parsley, side salad.",
      ],
      [
        "Truffled Egg and Cheese",
        38,
        "Brioche bagel, burger sauce, scrambled egg, mozzarella cheese, truffle oil, side…",
      ],
      [
        "Truffle Creamy Mushroom",
        44,
        "Brioche loaf, mascarpone cream, scrambled egg, creamy mushroom, parmesan cheese…",
      ],
      [
        "French Toast",
        42,
        "Brioche bread, soaking liquid, berries, compote, salted caramel, icing sugar…",
      ],
      [
        "Avocado Toast",
        42,
        "Sourdough, smashed avocado, pico de gallo, parmesan cheese, pine nuts, poached egg…",
      ],
      [
        "English Breakfast",
        42,
        "Beef bacon, beef sausage, baked beans, roasted mushroom, brioche loaf, dauphinoise…",
      ],
      [
        "Spicy Turkish Egg",
        45,
        "Turkish labneh, poached egg, chili flakes, paprika powder, za'atar powder, sumac…",
      ],
      [
        "Cheesy Paratha Roll",
        38,
        "Paratha, scrambled egg, pico de gallo, cheddar cheese slice, french fries, sriracha…",
      ],
      [
        "The Morning Halloumi",
        38,
        "Brioche loaf, soaking liquid, almond nuts, honey on the side, icing sugar, grilled…",
      ],
      [
        "Pal Signature Flattered",
        38,
        "Cucumber, white sourdough, poached pears, green olives, twister egg, avocado…",
      ],
      [
        "Avo Cottage Crush",
        42,
        "White sourdough, beans base with cottage cheese, cherry tomato, pine nuts, marinated…",
      ],
      [
        "Get Smashed & Shredded",
        42,
        "White sourdough, smashed avocado, shredded boiled egg, pomegranate, half lemon…",
      ],
      [
        "Brioche Avo Twister",
        42,
        "Burger bun, burger sauce, sliced avocado, twister egg, homemade chili garlic oil…",
      ],
      [
        "Burrata Walnuts",
        42,
        "Dates paste, roasted walnuts, burrata cheese, pomegranate, herbs, honey on the…",
      ],
    ]),
  },
  {
    id: "bowls",
    name: "Bowls",
    items: items([
      [
        "Poke Bowl",
        42,
        "Jasmine rice, smashed avocado, jalapeño, red radish, edamame, coleslaw, spicy mayo…",
      ],
      [
        "Acai Bowl",
        45,
        "Acai, banana, kiwi, strawberry, homemade granola, peanut butter, blueberry, raspberry…",
      ],
      [
        "Homemade Granola Bowl",
        35,
        "Greek yogurt, homemade granola, caramelized apple, strawberry, blueberry, raspberry…",
      ],
      [
        "Sunrise Bowl",
        34,
        "Overnight oats, coconut milk, milk, coconut powder, mango puree, fresh mango…",
      ],
      [
        "The Breakfast Bowl",
        35,
        "Greek yogurt, homemade granola, blueberries, strawberry, raspberry, roasted walnuts…",
      ],
    ]),
  },
  {
    id: "croissants",
    name: "Croissants",
    items: items([
      ["Plain Croissant", 15],
      [
        "Double Cheese Croissant",
        18,
        "Plain croissant, white cheese, mozzarella cheese, honey on the side.",
      ],
      [
        "Chocolate Croissant",
        17,
        "Plain croissant, chocolate mousse, strawberry, chocolate sauce, mint leaves.",
      ],
      [
        "Almond Dream Croissant",
        22,
        "Plain croissant, almond base, almond nuts, icing sugar, mint leaves.",
      ],
      [
        "Croissant Got Loaded",
        28,
        "Plain croissant, smashed avocado, burger sauce, cheddar cheese, scrambled egg.",
      ],
    ]),
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: items([
      [
        "Chicken Katsu Sandwich",
        55,
        "Sourdough, chicken katsu, lettuce, tomato, pesto sauce, balsamic sauce, burger…",
      ],
      [
        "Turkey Sandwich",
        35,
        "Brioche loaf, tomato, lollo biondo, sriracha mayo, milky mayo, french fries on the…",
      ],
      [
        "Halloumi Cheese Sandwich",
        42,
        "Sourdough, grilled halloumi, pesto sauce, burger sauce, sun-dried tomato, french…",
      ],
      [
        "Wagyu Sandwich",
        55,
        "Sourdough, beef wagyu with demi-glace sauce, tartar sauce, emmental cheese, fresh…",
      ],
      [
        "Arabian Tuna Fold",
        42,
        "Brioche loaf, tuna, lollo biondo, tomato slice, cheddar cheese slice, plain…",
      ],
      [
        "Ciabatta Done Right",
        42,
        "Ciabatta, baby rocket salad, chicken, cooking cream, mushroom, white onion…",
      ],
      [
        "Spicy Turkey Club",
        38,
        "White sourdough, turkey slice, cheddar cheese, japanese mayo, lollo biondo, sliced…",
      ],
      [
        "Bacon, Me Crazy",
        38,
        "Ciabatta bread, berries jam, baby rocket salad, cheddar cheese slice, french…",
      ],
    ]),
  },
  {
    id: "burgers",
    name: "Burgers",
    items: items([
      [
        "Truffled Burger",
        50,
        "Brioche burger bun, wagyu patty, lollo biondo, fresh sliced tomato, truffled mayo…",
      ],
      [
        "Caesar Chicken Burger",
        50,
        "Brioche burger bun, chicken katsu, cheddar cheese slice, mozzarella cheese, caesar…",
      ],
      [
        "Smashed Wagyu Burger",
        50,
        "Brioche burger bun, wagyu patty, cheddar cheese slice, mozzarella, lollo biondo…",
      ],
    ]),
  },
  {
    id: "pasta",
    name: "Pasta",
    items: items([
      [
        "Chicken Aglio e Olio",
        42,
        "Spaghetti pasta, garlic bread, parmesan cheese, chicken, chilli oil, herbs, chopped…",
      ],
      [
        "Spaghetti Carbonara",
        42,
        "Spaghetti pasta, beef bacon, cooking cream, parmesan cheese, garlic bread, egg yolk…",
      ],
      [
        "Penne Arrabbiata",
        42,
        "Penne pasta, marinated chicken, black olives, parmesan cheese, marinara sauce…",
      ],
      [
        "Spaghetti Meatballs",
        28,
        "Spaghetti pasta, red sauce, beef meatballs, parmesan cheese, herbs, garlic bread.",
      ],
    ]),
  },
  {
    id: "salad",
    name: "Salad",
    items: items([
      [
        "Corn Salad",
        35,
        "Fresh mixed lettuce, parmesan cheese, cherry tomato, cucumber, lemon honey dressing…",
      ],
      [
        "Signature Caesar Salad",
        42,
        "Baby gem lettuce, caesar dressing, cherry tomato, croutons, parmesan cheese, grilled…",
      ],
      [
        "Ancient Grain Salad",
        42,
        "Fresh mixed lettuce, cherry tomato, red radish, lemon dressing, mixed quinoa, grilled…",
      ],
    ]),
  },
  {
    id: "appetizers",
    name: "Appetizers",
    items: items([
      [
        "Loaded Fries",
        30,
        "French fries, beef bacon, sausage, jalapeño, spicy mayo, cheddar cheese, herbs.",
      ],
      ["French Fries", 21, "French fries, parmesan cheese, herbs."],
      [
        "Truffled Fries",
        30,
        "French fries, truffle oil, parmesan cheese, truffle mayo on the side.",
      ],
    ]),
  },
  {
    id: "dessert",
    name: "Dessert",
    items: items([
      ["Tiramisu", 45, "Lady finger, coffee base, egg yolk, mascarpone cheese, cocoa powder."],
      ["Pecan Pie", 45, "Flour, egg, pecan nuts, brown sugar, icing sugar."],
      ["Cookie", 14, "Flour, egg, brown sugar, butter, chocolate chips."],
      ["Banana Pudding", 42, "Banana custard cream, vanilla wafer biscuit, fresh milk."],
      [
        "Classic Aseeda",
        45,
        "Butter pumpkin, saffron, cinnamon, cardamom, nutmeg, egg yolk, cream…",
      ],
      [
        "Crunchy Chocolate Cake",
        45,
        "Chocolate sponge, chocolate ganache, crunchy flakes, chocolate sauce.",
      ],
      ["Toffee Date Pudding", 42, "Date paste, flour, egg, caramel on the side."],
      [
        "Custard Drink",
        28,
        "Custard powder, cardamom seed, saffron, fresh milk, condensed milk, digestive biscuit…",
      ],
      ["Chocolate Tiramisu", 45, "Chocolate ganache, mascarpone, cream, lady finger, coffee base."],
      [
        "Caramel Pecan Cheesecake",
        45,
        "Digestive base, philadelphia cream, sour cream, pecan nuts, salted caramel sauce…",
      ],
      [
        "Classic Umm Ali",
        45,
        "Plain croissant, philadelphia cream, icing sugar, coconut powder, coconut flakes…",
      ],
    ]),
  },
  {
    id: "seasonal",
    name: "Seasonal Specials",
    items: items([
      ["Cloudy Matcha", 40],
      ["Cloudy Espresso", 42],
      ["Saffron Latte", 32],
      ["Ice Shaken Espresso", 39],
      ["Hot Chocolate", 32],
    ]),
  },
  {
    id: "add-ons",
    name: "Add-Ons & Extras",
    blurb: "Customize your breakfast, bowl, or coffee.",
    items: items([
      ["Egg", 5],
      ["Mushroom", 5],
      ["Blueberries", 3],
      ["Scrambled Egg", 10],
      ["Omelette", 10],
      ["Peanut Butter", 5],
      ["Granola", 10],
      ["Side Salad", 15],
      ["Bacon", 15],
      ["Bread", 5],
      ["Turkey", 15],
      ["Berries", 3],
      ["Ice Cream Scoop", 5],
      ["Corn", 5],
      ["Compote / Jam", 5],
      ["Beef Sausage", 10],
      ["Baked Beans", 5],
      ["Banana", 5],
      ["Salmon", 15],
      ["Chicken", 15],
      ["Avocado", 10],
      ["Honey / Maple", 5],
      ["Cheese", 5],
      ["Dragon Fruit", 10],
      ["Hollandaise", 5],
      ["Chicken Katsu (Add-On)", 15],
      ["Vanilla Syrup", 5],
      ["Hazelnut Syrup", 5],
      ["Caramel Syrup", 5],
    ]),
  },
];

export const featuredSlugs = [
  "truffled-burger",
  "acai-bowl",
  "tiramisu",
  "wagyu-sandwich",
  "caramel-pecan-cheesecake",
  "avocado-toast",
];

export function findItem(slug: string) {
  for (const category of menu) {
    const item = category.items.find((i) => i.slug === slug);
    if (item) return { item, category };
  }
  return undefined;
}
