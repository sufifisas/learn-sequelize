const User = (sequelize, DataTypes) => {
    sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        // isAdmin: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // }
    });
};

module.exports = User;