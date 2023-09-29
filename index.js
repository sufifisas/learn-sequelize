const { Sequelize } = require('sequelize');
const dbConfig = require('./app/config/database.config');


// connect database
dbConfig(Sequelize);