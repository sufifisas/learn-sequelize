const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./app/config/database.config');
const models = require('./app/models');

// connect database
const sequelize = dbConfig(Sequelize);

//define models
models(sequelize, DataTypes);