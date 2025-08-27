const FAQ = require('./faq.model');

const FAQService = {
  getFAQsByLang: async (lang) => {
    return await FAQ.findByLang(lang);
  }
};

module.exports = FAQService;