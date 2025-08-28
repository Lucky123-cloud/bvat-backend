const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  console.error(err.stack);
  
  // Handle specific database errors
  if (err.code === '23505') {
    return res.status(409).json({ error: 'Duplicate entry' });
  }
  
  // Handle Joi validation errors
  if (err.isJoi) {
    return res.status(400).json({ error: err.details[0].message });
  }
  
  // Handle knex/database connection errors
  if (err.code === 'ECONNREFUSED') {
    return res.status(503).json({ error: 'Database connection failed. Please check if PostgreSQL is running.' });
  }
  
  // Handle not found errors
  if (err.status === 404) {
    return res.status(404).json({ error: 'Resource not found' });
  }
  
  // Default error
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;