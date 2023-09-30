const Post = (sequelize, DataTypes) => {
    sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
    });
};

module.exports = Post;