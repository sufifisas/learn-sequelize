require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./app/config/database.config');
const models = require('./app/models');
const routes = require('./app/routes');
const express = require('express');

const app = express();
const PORT = process.env.PORT;


// connect database
const sequelize = dbConfig(Sequelize);

//define models
models(sequelize, DataTypes);

//import routes
routes(app);

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})