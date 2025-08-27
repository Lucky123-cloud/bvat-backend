const Product = require('./product.model');

const ProductService = {
  getProducts: async (filters, page, limit) => {
    const products = await Product.findAll(filters, page, limit);
    const totalCount = await Product.count(filters);
    
    return {
      products,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: parseInt(totalCount.count),
        pages: Math.ceil(totalCount.count / limit)
      }
    };
  },
  
  createProduct: async (productData) => {
    return await Product.create(productData);
  }
};

module.exports = ProductService;