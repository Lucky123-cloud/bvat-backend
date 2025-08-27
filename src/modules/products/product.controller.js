const ProductService = require('./product.service');
const Joi = require('joi');

// Validation schema
const productSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  certification: Joi.string().allow('', null),
  description: Joi.string().allow('', null)
});

const ProductController = {
  getProducts: async (req, res, next) => {
    try {
      const { category, certification, page = 1, limit = 10 } = req.query;
      const filters = {};
      
      if (category) filters.category = category;
      if (certification) filters.certification = certification;
      
      const result = await ProductService.getProducts(filters, page, limit);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
  
  createProduct: async (req, res, next) => {
    try {
      const { error, value } = productSchema.validate(req.body);
      
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      
      const product = await ProductService.createProduct(value);
      res.status(201).json(product[0]);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = ProductController;