const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./modules/products/product.routes');
const outletRoutes = require('./modules/outlets/outlet.routes');
const faqRoutes = require('./modules/faqs/faq.routes');
const searchRoutes = require('./modules/search/search.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/outlets', outletRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/search', searchRoutes);

// Stats endpoint
app.get('/api/stats', async (req, res, next) => {
  try {
    const db = require('./config/db');
    
    const totalProducts = await db('products').count('* as count').first();
    const totalOutlets = await db('outlets').count('* as count').first();
    const totalFaqs = await db('faqs').count('* as count').first();
    
    res.json({
      totalProducts: parseInt(totalProducts.count),
      totalOutlets: parseInt(totalOutlets.count),
      totalFaqs: parseInt(totalFaqs.count)
    });
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;