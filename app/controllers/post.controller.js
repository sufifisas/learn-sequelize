const sequelize = require("../config/database.config")

const Post = sequelize.models.Post;

exports.findAll = async (req, res) => {
    await Post.findAll()
    .then((data) => {
        res
        .status(200)
        .send(data);
    })
    .catch((error) => {
        res
        .status(500)
        .send({ message: error.errors ? error.errors[0].message : error.parent.sqlMessage });
    });
};

exports.create = async (req, res) => {
    await Post.create({
        title: req.body.title,
        description: req.body.description,
    }, { fields: [title, description]}) // only allow title and description
    .then((data) => {
        res
        .status(200)
        .send(data);
    })
    .catch((error) => {
        res
        .status(req.body.firstName ? 500 : 422)
        .send({ message: error.errors ? error.errors[0].message : error.parent.sqlMessage });
    });
}