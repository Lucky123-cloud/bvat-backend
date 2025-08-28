const db = require('../../config/db');

const FAQ = {
  findByLang: (lang = 'en') => {
    return db('faqs').where({ lang }).select('*');
  },
  
  count: () => {
    return db('faqs').count('* as count').first();
  }
};

module.exports = FAQ;