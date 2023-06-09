const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://dinhthecuong:123123123@web67.iexy3j8.mongodb.net/';
const client = new MongoClient(url);
const db = {};

const connectToDB = async () => {
  await client.connect();
  console.log('Connected successfully to server');

  const database = client.db('test_lv3');
  db.inventories = database.collection('inventories');
  db.orders = database.collection('orders');
  db.users = database.collection('users');
};

module.exports = { connectToDB, db };
