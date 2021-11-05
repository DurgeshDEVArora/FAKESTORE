import Product from "../models/Product.js";


export const GetAllProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).json({
      Request: "Success",
      payload: Products,
    });
  } catch (error) {
    res.status(500).json({
      Request: "Fail",
      error: error,
    });
  }
};



export const ProductByID = async (req, res) => {
  try {
    const id = req.params.id;
    const Products = await Product.findById(id);
    res.status(200).json({
      Request: "Success",
      payload: Products,
    });
  } catch (error) {
    res.status(500).json({
      Request: "Fail",
      error: error,
    });
  }
};

