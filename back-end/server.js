const PORT = process.env.PORT || 5000;
const express = require('express')
const app = express()
const pool = require('./database'); //connexion à la base de données

const cors = require('cors');
const allowedOrigins = [
  'https://front-end-v9s5.onrender.com', //addresse du front-end
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

  
  
  
  

  


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});