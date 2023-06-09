const express = require('express');
const app = express();
const port = 3000;
const { connectToDB, db } = require('./db');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Write an api endpoint for that getting all products in inventory.
app.get('/inventories', async (req, res) => {
  res.send(await db.inventories.find().toArray());
});

// Update the API to accept a query for getting only products that have low quantity (less than 100).
app.get('/inventories/lt100', async (req, res) => {
  res.send(await db.inventories.find({ instock: { $lt: 100 } }).toArray());
});

// Create a login API. Generate a token when user get login.
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  res.json({
    access_token: jwt.sign({ username, password }, '123456678abc', {
      expiresIn: 6000 * 6000,
    }),
  });
});

app.get('/login', async (req, res) => {
  const auth = req.header('Authorization');
  const token = auth && auth.split(' ')[1];
  jwt.verify(token, '123456678abc');
  res.send('Login success!');
});

// Restrict the resource. Only logged-in user can visit it.
app.get(
  '/orders',
  (req, res, next) => {
    const auth = req.header('Authorization');
    const token = auth && auth.split(' ')[1];
    jwt.verify(token, '123456678abc');
    next();
  },
  async (req, res) => {
    res.send(await db.orders.find().toArray());
  }
);

// Create an API for getting orders with the description of product inside each orders.
app.get('/orders/:id', async (req, res) => {
  res.send(await db.orders.find({ _id: Number(req.params.id) }).toArray());
});

// Server running on port 3000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  connectToDB();
});
