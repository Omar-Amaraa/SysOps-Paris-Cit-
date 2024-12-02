const PORT = process.env.PORT || 5000;
const express = require('express')
const app = express()
const pool = require('./database'); //connexion à la base de données

const cors = require('cors');
app.use(cors({
    origin: 'https://test-h4d4.onrender.com'
  }));


  app.get('/users', (req, res) => {
    res.json({ users: ['Test User 1', 'Test User 2'] });
  });
  
  
  app.get('/test-db', async (req, res) => {
    try {
      const result = await pool.query('SELECT 1 + 1 AS result');
      res.json({ result: result.rows[0].result });
    } catch (err) {
      console.error('Database connection failed:', err);
      res.status(500).json({ error: err.message });
    }
  });
  
  




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});