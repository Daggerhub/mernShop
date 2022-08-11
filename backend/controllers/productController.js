import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getFiltertedProducts = asyncHandler(async (req, res) => {
  const query = req.params.query;
  let regex = new RegExp(query, "i");

  const pokemon = await Product.find({
    $or: [{ name: regex }, { description: regex }],
  });
  res.json(pokemon);
});

const getSortByData = asyncHandler(async (req, res) => {
  const query = req.params.query;
  switch (query) {
    case "ascending":
      const ascendingData = await Product.find().sort({ price: 1 });
      res.json(ascendingData);
      break;
    case "decending":
      const decendingData = await Product.find({}).sort({ price: -1 });
      res.json(decendingData);
      break;
    case "rating":
      const ratedData = await Product.find({}).sort({ rating: -1 });
      res.json(ratedData);
      break;
    default:
      const products = await Product.find({});
      res.json(products);
      break;
  }
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProductById, getFiltertedProducts, getSortByData };
