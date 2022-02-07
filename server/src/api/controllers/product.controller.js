
const Product = require ("../models/product.model")

const getAllProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      const productDb = await Artist.findById(id);
      if (!artistDb) {
        return next(setError(404, "Artist not found"));
      }
      return res.status(200).json(artistDb);
    } catch (error) {
      return next(setError(500, "Artist server error"));
    }
  };