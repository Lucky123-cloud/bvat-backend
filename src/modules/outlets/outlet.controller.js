const OutletService = require('./outlet.service');

const OutletController = {
  getOutlets: async (req, res, next) => {
    try {
      const { region } = req.query;
      const filters = {};
      
      if (region) filters.region = region;
      
      const outlets = await OutletService.getOutlets(filters);
      res.json(outlets);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = OutletController;