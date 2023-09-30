const { DataTypes } = require('sequelize');

const sequelize = require('../config/database.config');
const User = require('./user.model')(sequelize, DataTypes);
const Post = require('./post.model')(sequelize, DataTypes);

//sync all the models
const models = () => {
    User;
    Post;
}

module.exports = models;