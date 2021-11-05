import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  price: Number,
  rating: Number,
  image: String,
});

const Product = new mongoose.model("Products", ProductSchema);

export default Product;
