const userModel = require('./user.model');

//sync all the models
module.exports = async (sequelize, DataTypes) => {
    userModel(sequelize, DataTypes);
    await sequelize.sync()
    .then(() => {
        console.log('Synced database')
    })
    .catch((error) => {
        console.log(`Failed to sync database: ${error.message}`)
    });
};