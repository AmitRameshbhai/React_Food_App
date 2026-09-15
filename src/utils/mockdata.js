const ResList = [
  {
    id: 1,
    name: "The Pahadi Cafe",
    cuisine: "Cafe, Coffee, Continental",
    rating: 4.5,
    ratingCount: "1.2K+",
    deliveryTime: "25-30 mins",
    costForTwo: "₹300 for two",
    offer: "40% OFF up to ₹100",
    isVeg: false,
    area: "Satellite, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 101,
        name: "Cappuccino",
        price: 149,
        isVeg: true,
        description: "Rich espresso topped with steamed milk foam.",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 102,
        name: "Cold Brew",
        price: 179,
        isVeg: true,
        description: "Slow-steeped coffee served chilled over ice.",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 103,
        name: "Club Sandwich",
        price: 229,
        isVeg: true,
        description: "Triple-layered sandwich with veggies and cheese.",
        image:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Pizza, Italian, Fast Food",
    rating: 4.4,
    ratingCount: "5.8K+",
    deliveryTime: "20-25 mins",
    costForTwo: "₹500 for two",
    offer: "50% OFF up to ₹150",
    isVeg: false,
    area: "Vastrapur, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 201,
        name: "Margherita Pizza",
        price: 249,
        isVeg: true,
        description: "Classic pizza with mozzarella and basil.",
        image:
          "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 202,
        name: "Pepperoni Pizza",
        price: 349,
        isVeg: false,
        description: "Loaded with pepperoni and extra cheese.",
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 203,
        name: "Garlic Breadsticks",
        price: 149,
        isVeg: true,
        description: "Baked breadsticks brushed with garlic butter.",
        image:
          "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 3,
    name: "Burger Singh",
    cuisine: "Burgers, Fast Food, Beverages",
    rating: 4.2,
    ratingCount: "3.4K+",
    deliveryTime: "25-30 mins",
    costForTwo: "₹350 for two",
    offer: "Buy 1 Get 1 Free",
    isVeg: false,
    area: "Navrangpura, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 301,
        name: "Classic Cheese Burger",
        price: 179,
        isVeg: false,
        description: "Grilled patty with melted cheese and veggies.",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 302,
        name: "Crispy Veg Burger",
        price: 149,
        isVeg: true,
        description: "Crunchy veg patty with lettuce and mayo.",
        image:
          "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 303,
        name: "French Fries",
        price: 99,
        isVeg: true,
        description: "Golden fries, lightly salted.",
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 4,
    name: "Maharaja Thali",
    cuisine: "North Indian, Rajasthani, Thali",
    rating: 4.6,
    ratingCount: "2.1K+",
    deliveryTime: "30-40 mins",
    costForTwo: "₹450 for two",
    offer: "20% OFF up to ₹80",
    isVeg: true,
    area: "Bodakdev, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 401,
        name: "Rajasthani Thali",
        price: 299,
        isVeg: true,
        description: "Dal baati churma, gatte ki sabzi, roti, rice.",
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 402,
        name: "Paneer Butter Masala",
        price: 229,
        isVeg: true,
        description: "Paneer cubes in a creamy tomato gravy.",
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 403,
        name: "Butter Naan",
        price: 49,
        isVeg: true,
        description: "Soft leavened bread brushed with butter.",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 5,
    name: "Chinese Wok",
    cuisine: "Chinese, Asian, Momos",
    rating: 4.1,
    ratingCount: "1.8K+",
    deliveryTime: "25-35 mins",
    costForTwo: "₹400 for two",
    offer: "30% OFF up to ₹100",
    isVeg: false,
    area: "Maninagar, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 501,
        name: "Veg Hakka Noodles",
        price: 189,
        isVeg: true,
        description: "Stir-fried noodles with fresh vegetables.",
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 502,
        name: "Chicken Manchurian",
        price: 249,
        isVeg: false,
        description: "Fried chicken tossed in a tangy sauce.",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 503,
        name: "Steamed Veg Momos",
        price: 149,
        isVeg: true,
        description: "Dumplings filled with spiced vegetables.",
        image:
          "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 6,
    name: "South Indian House",
    cuisine: "South Indian, Dosa, Idli",
    rating: 4.5,
    ratingCount: "4.2K+",
    deliveryTime: "20-30 mins",
    costForTwo: "₹250 for two",
    offer: "Flat ₹75 OFF",
    isVeg: true,
    area: "CG Road, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 601,
        name: "Masala Dosa",
        price: 129,
        isVeg: true,
        description: "Crispy dosa stuffed with spiced potato filling.",
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 602,
        name: "Idli Sambar",
        price: 99,
        isVeg: true,
        description: "Steamed rice cakes served with sambar and chutney.",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 603,
        name: "Filter Coffee",
        price: 59,
        isVeg: true,
        description: "Traditional South Indian brewed coffee.",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 7,
    name: "The Biryani Bowl",
    cuisine: "Biryani, Mughlai, North Indian",
    rating: 4.7,
    ratingCount: "6.5K+",
    deliveryTime: "30-35 mins",
    costForTwo: "₹450 for two",
    offer: "50% OFF up to ₹120",
    isVeg: false,
    area: "Paldi, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 701,
        name: "Chicken Dum Biryani",
        price: 279,
        isVeg: false,
        description: "Slow-cooked basmati rice layered with spiced chicken.",
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 702,
        name: "Veg Biryani",
        price: 219,
        isVeg: true,
        description: "Fragrant rice cooked with mixed vegetables and spices.",
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 703,
        name: "Mutton Kebab",
        price: 349,
        isVeg: false,
        description: "Char-grilled minced mutton skewers.",
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 8,
    name: "Punjabi Tadka",
    cuisine: "Punjabi, North Indian, Paratha",
    rating: 4.4,
    ratingCount: "2.9K+",
    deliveryTime: "25-35 mins",
    costForTwo: "₹350 for two",
    offer: "20% OFF up to ₹60",
    isVeg: true,
    area: "Ellisbridge, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 801,
        name: "Amritsari Chole Bhature",
        price: 159,
        isVeg: true,
        description: "Spiced chickpeas served with fried bread.",
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 802,
        name: "Aloo Paratha",
        price: 99,
        isVeg: true,
        description: "Stuffed flatbread with spiced mashed potato.",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 803,
        name: "Dal Makhani",
        price: 189,
        isVeg: true,
        description: "Slow-cooked black lentils in a buttery gravy.",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 9,
    name: "Royal Rasoi",
    cuisine: "North Indian, Mughlai, Thali",
    rating: 4.3,
    ratingCount: "1.5K+",
    deliveryTime: "35-40 mins",
    costForTwo: "₹500 for two",
    offer: "Flat ₹100 OFF",
    isVeg: false,
    area: "Vastrapur, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 901,
        name: "Butter Chicken",
        price: 289,
        isVeg: false,
        description: "Tender chicken in a rich tomato-butter gravy.",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 902,
        name: "Shahi Paneer",
        price: 249,
        isVeg: true,
        description: "Paneer cooked in a mildly sweet, creamy gravy.",
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 903,
        name: "Lachha Paratha",
        price: 59,
        isVeg: true,
        description: "Multi-layered crispy flatbread.",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 10,
    name: "Cafe Mocha",
    cuisine: "Cafe, Desserts, Beverages",
    rating: 4.6,
    ratingCount: "3.1K+",
    deliveryTime: "15-25 mins",
    costForTwo: "₹350 for two",
    offer: "40% OFF up to ₹100",
    isVeg: true,
    area: "SG Highway, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1001,
        name: "Chocolate Brownie",
        price: 129,
        isVeg: true,
        description: "Warm fudgy brownie with a molten center.",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1002,
        name: "Cafe Latte",
        price: 159,
        isVeg: true,
        description: "Smooth espresso with steamed milk.",
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1003,
        name: "Red Velvet Pastry",
        price: 139,
        isVeg: true,
        description: "Layered pastry with cream cheese frosting.",
        image:
          "https://images.unsplash.com/photo-1586985289906-406988974504?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 11,
    name: "Dosa Corner",
    cuisine: "South Indian, Dosa, Idli",
    rating: 4.4,
    ratingCount: "2.6K+",
    deliveryTime: "20-25 mins",
    costForTwo: "₹200 for two",
    offer: "25% OFF up to ₹50",
    isVeg: true,
    area: "Naranpura, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1101,
        name: "Onion Rava Dosa",
        price: 119,
        isVeg: true,
        description: "Crispy semolina dosa with onions.",
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1102,
        name: "Uttapam",
        price: 109,
        isVeg: true,
        description: "Thick savory pancake topped with vegetables.",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1103,
        name: "Medu Vada",
        price: 79,
        isVeg: true,
        description: "Crispy fried lentil doughnuts served with chutney.",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 12,
    name: "Food Junction",
    cuisine: "Chinese, North Indian, Fast Food",
    rating: 4.2,
    ratingCount: "1.9K+",
    deliveryTime: "30-35 mins",
    costForTwo: "₹400 for two",
    offer: "30% OFF up to ₹90",
    isVeg: false,
    area: "Chandkheda, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1201,
        name: "Spring Rolls",
        price: 139,
        isVeg: true,
        description: "Crispy rolls stuffed with veggies.",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1202,
        name: "Chilli Chicken",
        price: 229,
        isVeg: false,
        description: "Wok-tossed chicken in a spicy chilli sauce.",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1203,
        name: "Paneer Fried Rice",
        price: 179,
        isVeg: true,
        description: "Wok-fried rice with paneer and vegetables.",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 13,
    name: "Spice Garden",
    cuisine: "Indian, Chinese, Continental",
    rating: 4.5,
    ratingCount: "2.3K+",
    deliveryTime: "25-30 mins",
    costForTwo: "₹450 for two",
    offer: "Flat ₹90 OFF",
    isVeg: false,
    area: "Thaltej, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1301,
        name: "Grilled Veg Platter",
        price: 249,
        isVeg: true,
        description: "Assorted grilled vegetables with dip.",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1302,
        name: "Chicken Tikka",
        price: 279,
        isVeg: false,
        description: "Marinated chicken chunks grilled in a tandoor.",
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1303,
        name: "Veg Manchow Soup",
        price: 129,
        isVeg: true,
        description: "Spicy, tangy soup topped with crispy noodles.",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 14,
    name: "The Food Factory",
    cuisine: "Fast Food, Burgers, Pizza",
    rating: 4.1,
    ratingCount: "1.6K+",
    deliveryTime: "20-30 mins",
    costForTwo: "₹350 for two",
    offer: "20% OFF up to ₹70",
    isVeg: false,
    area: "Prahlad Nagar, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1401,
        name: "Loaded Nachos",
        price: 179,
        isVeg: true,
        description: "Crispy nachos topped with cheese and salsa.",
        image:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1402,
        name: "Chicken Wings",
        price: 229,
        isVeg: false,
        description: "Crispy fried wings tossed in spicy sauce.",
        image:
          "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1403,
        name: "Veg Loaded Fries",
        price: 149,
        isVeg: true,
        description: "Fries topped with cheese, corn, and jalapenos.",
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 15,
    name: "Biryani House",
    cuisine: "Biryani, Hyderabadi, Mughlai",
    rating: 4.7,
    ratingCount: "4.9K+",
    deliveryTime: "30-40 mins",
    costForTwo: "₹500 for two",
    offer: "50% OFF up to ₹150",
    isVeg: false,
    area: "Isanpur, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1501,
        name: "Hyderabadi Mutton Biryani",
        price: 329,
        isVeg: false,
        description: "Aromatic biryani slow-cooked with tender mutton.",
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1502,
        name: "Egg Biryani",
        price: 199,
        isVeg: false,
        description: "Fragrant rice layered with boiled eggs and spices.",
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1503,
        name: "Mirchi Ka Salan",
        price: 99,
        isVeg: true,
        description: "Tangy chilli curry, a classic biryani side.",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 16,
    name: "Green Leaf Restaurant",
    cuisine: "Pure Veg, North Indian, Gujarati",
    rating: 4.6,
    ratingCount: "3.7K+",
    deliveryTime: "25-35 mins",
    costForTwo: "₹400 for two",
    offer: "Flat ₹80 OFF",
    isVeg: true,
    area: "Ashram Road, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1601,
        name: "Gujarati Thali",
        price: 249,
        isVeg: true,
        description: "Unlimited thali with dal, kadhi, sabzi, and rotli.",
        image:
          "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1602,
        name: "Handvo",
        price: 129,
        isVeg: true,
        description: "Savory baked cake made from rice and lentils.",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1603,
        name: "Khandvi",
        price: 99,
        isVeg: true,
        description: "Soft, rolled gram-flour snack tempered with spices.",
        image:
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 17,
    name: "Italian Kitchen",
    cuisine: "Italian, Pizza, Pasta",
    rating: 4.5,
    ratingCount: "2.8K+",
    deliveryTime: "25-30 mins",
    costForTwo: "₹600 for two",
    offer: "30% OFF up to ₹120",
    isVeg: false,
    area: "Bopal, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1701,
        name: "Alfredo Pasta",
        price: 279,
        isVeg: true,
        description: "Penne tossed in a creamy white sauce.",
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1702,
        name: "Chicken Lasagna",
        price: 329,
        isVeg: false,
        description: "Layered pasta baked with chicken and cheese.",
        image:
          "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1703,
        name: "Bruschetta",
        price: 179,
        isVeg: true,
        description: "Toasted bread topped with tomato and basil.",
        image:
          "https://images.unsplash.com/photo-1572695157360-a10cffce2ba2?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 18,
    name: "Momo Nation",
    cuisine: "Momos, Chinese, Tibetan",
    rating: 4.3,
    ratingCount: "1.4K+",
    deliveryTime: "20-25 mins",
    costForTwo: "₹300 for two",
    offer: "20% OFF up to ₹60",
    isVeg: false,
    area: "Gota, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1801,
        name: "Chicken Steamed Momos",
        price: 159,
        isVeg: false,
        description: "Juicy dumplings filled with minced chicken.",
        image:
          "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1802,
        name: "Tandoori Momos",
        price: 179,
        isVeg: true,
        description: "Char-grilled momos marinated in tandoori spices.",
        image:
          "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1803,
        name: "Thukpa",
        price: 149,
        isVeg: true,
        description: "Warm Tibetan noodle soup with vegetables.",
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 19,
    name: "Street Food Hub",
    cuisine: "Street Food, Chaat, Fast Food",
    rating: 4.4,
    ratingCount: "3.9K+",
    deliveryTime: "15-25 mins",
    costForTwo: "₹250 for two",
    offer: "Flat ₹50 OFF",
    isVeg: true,
    area: "Manek Chowk, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 1901,
        name: "Pani Puri",
        price: 69,
        isVeg: true,
        description: "Crispy puris filled with spiced tangy water.",
        image:
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1902,
        name: "Pav Bhaji",
        price: 119,
        isVeg: true,
        description: "Spiced mashed vegetable curry with buttered buns.",
        image:
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 1903,
        name: "Vada Pav",
        price: 49,
        isVeg: true,
        description: "Spiced potato fritter in a soft bun.",
        image:
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },

  {
    id: 20,
    name: "The Dessert House",
    cuisine: "Desserts, Ice Cream, Beverages",
    rating: 4.8,
    ratingCount: "5.2K+",
    deliveryTime: "15-20 mins",
    costForTwo: "₹300 for two",
    offer: "40% OFF up to ₹100",
    isVeg: true,
    area: "Shivranjani, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=660&q=80",
    menu: [
      {
        id: 2001,
        name: "Belgian Chocolate Ice Cream",
        price: 129,
        isVeg: true,
        description: "Rich chocolate ice cream scoops.",
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 2002,
        name: "Gulab Jamun",
        price: 99,
        isVeg: true,
        description: "Soft milk dumplings soaked in sugar syrup.",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 2003,
        name: "Cheesecake Slice",
        price: 179,
        isVeg: true,
        description: "Creamy baked cheesecake with a biscuit base.",
        image:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

export default ResList;
