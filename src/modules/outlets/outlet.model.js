const db = require('../../../config/db');

const Outlet = {
  findAll: (filters = {}) => {
    let query = db('outlets').select('*');
    
    if (filters.region) {
      query = query.where('region', filters.region);
    }
    
    return query;
  },
  
  findWithProducts: (filters = {}) => {
    let query = db('outlets')
      .select(
        'outlets.*',
        db.raw('JSON_AGG(DISTINCT outlet_products.product_id) as product_ids')
      )
      .leftJoin('outlet_products', 'outlets.id', 'outlet_products.outlet_id')
      .groupBy('outlets.id');
    
    if (filters.region) {
      query = query.where('outlets.region', filters.region);
    }
    
    return query;
  },
  
  count: () => {
    return db('outlets').count('* as count').first();
  }
};

module.exports = Outlet;