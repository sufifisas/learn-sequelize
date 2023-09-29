require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./app/config/database.config');
const models = require('./app/models');
const express = require('express');

const app = express();
const PORT = process.env.PORT;


// connect database
const sequelize = dbConfig(Sequelize);

//define models
models(sequelize, DataTypes);

app.get('/', (req, res) => {
    res.send('Hello Sequelize tutorial')
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})