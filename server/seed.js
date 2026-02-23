import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "AIR VOID",
    price: 8999,
    image: "/img1.jpeg",
    description: "Next-gen futuristic sneaker",
  },
  {
    name: "SHADOW RUNNER",
    price: 9999,
    image: "/img2.webp",
    description: "Urban stealth design",
  },
  {
    name: "NIGHT RACER",
    price: 10999,
    image: "/img3.jpg",
    description: "Luxury performance sneaker",
  },
];

const seedData = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products Inserted 🚀");
  process.exit();
};

seedData();