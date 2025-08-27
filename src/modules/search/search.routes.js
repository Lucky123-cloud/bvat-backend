const express = require('express');
const router = express.Router();
const db = require('../../config/db');

router.get('/', async (req, res, next) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
    
    const products = await db('products')
      .where('name', 'ilike', `%${q}%`)
      .select('*');
    
    const outlets = await db('outlets')
      .where('name', 'ilike', `%${q}%`)
      .select('*');
    
    res.json({ products, outlets });
  } catch (error) {
    next(error);
  }
});

module.exports = router;