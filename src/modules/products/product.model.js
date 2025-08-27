const db = require('../../../config/db');

const Product = {
  findAll: (filters = {}, page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    let query = db('products').select('*');
    
    if (filters.category) {
      query = query.where('category', filters.category);
    }
    
    if (filters.certification) {
      query = query.where('certification', filters.certification);
    }
    
    return query.limit(limit).offset(offset);
  },
  
  findById: (id) => {
    return db('products').where({ id }).first();
  },
  
  create: (product) => {
    return db('products').insert(product).returning('*');
  },
  
  count: (filters = {}) => {
    let query = db('products').count('* as count');
    
    if (filters.category) {
      query = query.where('category', filters.category);
    }
    
    if (filters.certification) {
      query = query.where('certification', filters.certification);
    }
    
    return query.first();
  }
};

module.exports = Product;