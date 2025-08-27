const FAQService = require('./faq.service');

const FAQController = {
  getFAQs: async (req, res, next) => {
    try {
      const { lang = 'en' } = req.query;
      const faqs = await FAQService.getFAQsByLang(lang);
      res.json(faqs);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = FAQController;