// app.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const dbConfig = require('./config/db.config');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

const pool = mysql.createPool({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Middleware to parse JSON in request body
app.use(express.json());

// Routes for CRUD operations

// Read all users
app.get('/api/libraries', (req, res) => {
  pool.query('SELECT * FROM libraries', (error, results) => {
    if (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
