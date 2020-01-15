const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const port = 3333;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json());
app.use(routes);


app.listen(port, () => {
    console.log(`listening ${port}`);
})