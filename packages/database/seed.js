const mongoose = require('mongoose');
const { connectDB, Product } = require('./index');

const products = [
  {
    name: "Akatsuki Full-Zip Hoodie",
    price: 85.00,
    discountedPrice: 75.00,
    animeSeries: "Naruto",
    rarity: "Epic",
    stock: { S: 10, M: 20, L: 25, XL: 15 },
    images: ["https://example.com/akatsuki-hoodie-front.jpg", "https://example.com/akatsuki-hoodie-back.jpg"],
    designNotes: "Premium embroidery on the red clouds, thick cotton suited for winter."
  },
  {
    name: "Tanjiro Haori Cardigan",
    price: 60.00,
    discountedPrice: 60.00,
    animeSeries: "Demon Slayer",
    rarity: "Rare",
    stock: { S: 5, M: 15, L: 20, XL: 5 },
    images: ["https://example.com/tanjiro-haori.jpg"],
    designNotes: "Checkered green and black loose-fit cardigan, lightweight."
  },
  {
    name: "Survey Corps Varsity Jacket",
    price: 120.00,
    discountedPrice: 99.99,
    animeSeries: "Attack on Titan",
    rarity: "Legendary",
    stock: { S: 2, M: 5, L: 5, XL: 3 },
    images: ["https://example.com/survey-corps-jacket.jpg"],
    designNotes: "Faux leather sleeves, detailed patch on the back and chest."
  },
  {
    name: "Gojo Satoru Infinite Void Tee",
    price: 35.00,
    discountedPrice: 29.99,
    animeSeries: "Jujutsu Kaisen",
    rarity: "Common",
    stock: { S: 30, M: 40, L: 50, XL: 30 },
    images: ["https://example.com/gojo-tee.jpg"],
    designNotes: "Oversized acid-wash graphic tee with domain expansion artwork."
  },
  {
    name: "Straw Hat Pirates High-Tops",
    price: 150.00,
    discountedPrice: 150.00,
    animeSeries: "One Piece",
    rarity: "Limited Edition",
    stock: { S: 0, M: 10, L: 10, XL: 5 },
    images: ["https://example.com/straw-hat-shoes.jpg"],
    designNotes: "Custom canvas sneakers featuring Luffy's Jolly Roger and rope-style laces."
  }
];

const seedDB = async () => {
  try {
    // Requires MONGO_URI to be provided via env or directly
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/otaku-app";
    await connectDB(uri);
    console.log("Connected to MongoDB for seeding...");

    await Product.deleteMany({});
    console.log("Cleared existing products.");

    await Product.insertMany(products);
    console.log("Successfully seeded 5 anime products!");

  } catch (err) {
    console.error("Error seeding DB:", err);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
};

seedDB();
