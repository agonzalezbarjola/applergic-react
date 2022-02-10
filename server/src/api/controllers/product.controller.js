const Product = require("../models/product.model");
const { setError } = require("../../utils/errors/error");

const getProduct = async (req, res, next) => {
  try {
    const { code } = req.params;
    const productDb = await Product.find({code: code});
    console.log(productDb);
    if (!productDb) {
      return next(setError(404, "Product not found"));
    }
    return res.status(200).json(productDb);
  } catch (error) {
    return next(setError(500, "Product server error"));
  }
};

module.exports = { getProduct };
