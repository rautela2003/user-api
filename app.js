const express = require('express');
const app = express();

app.use(express.json());

// Temporary in-memory data (no database needed)
let users = [{ name: "Aakash" }];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

// Start server
app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});