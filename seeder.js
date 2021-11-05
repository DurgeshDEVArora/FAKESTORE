import mongoose from "mongoose";
import ConnectDB from "./config/Database.js";
import Products from "./Data/Products.js";
import Product from "./models/Product.js";

ConnectDB();

const Import = async() => {
  try {
    await Product.deleteMany();

    const sampleProducts = Products.map((p) => {
      return p;
    });


    await Product.insertMany(sampleProducts);
    console.log("Data Imported");
  } catch (error) {
    console.log(error);
  }
};


Import();
