const Outlet = require('./outlet.model');

const OutletService = {
  getOutlets: async (filters) => {
    return await Outlet.findWithProducts(filters);
  }
};

module.exports = OutletService;