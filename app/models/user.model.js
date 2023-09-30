const User = (sequelize, DataTypes) => {
    sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
    });
};

module.exports = User;