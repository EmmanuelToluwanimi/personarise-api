const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {PORT} = require('./utils/constants');
const routes = require('./routes');
const { connectDb } = require('./config/db');
const app = express();
const mainroutes = require('./routes');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.listen(PORT, async() => {
  mainroutes(app);
  connectDb()
  console.log(`Server running on port ${PORT}`);
});