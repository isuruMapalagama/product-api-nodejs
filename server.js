require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/cors');
const apiRoutes = require('./routes/api');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Product API is running' });
});

// Test database connection with quick retry
async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    return true;
  } catch (error) {
    // Quick retry once after 500ms
    console.warn('Database connection failed. Retrying once...');
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      await sequelize.authenticate();
      console.log('Database connection has been established successfully.');
      return true;
    } catch (retryError) {
      console.error('Unable to connect to the database:');
      console.error('Error:', retryError.message);
      console.error('\nPlease ensure:');
      console.error('1. MySQL server is running');
      console.error('2. Database credentials in .env are correct');
      console.error('3. Database "aahaas_db" exists (run: npm run migrate)');
      console.error('\nServer will continue to run, but database operations will fail.');
      return false;
    }
  }
}

// Start server
async function startServer() {
  const dbConnected = await connectDatabase();
  
  if (!dbConnected) {
    console.warn('Warning: Starting server without database connection.');
  }
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
    console.log(`API endpoint: http://127.0.0.1:${PORT}/api/products`);
  });
}

startServer();

module.exports = app;


