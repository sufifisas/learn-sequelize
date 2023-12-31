const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database.config")

const Post = sequelize.models.Post;

exports.findAll = async (req, res) => {
    await sequelize.query("SELECT * FROM `posts`", { type: QueryTypes.SELECT }) // <-- example for raw queries
    .then((data) => {
        res
        .status(200)
        .send(data);
    })
    .catch((error) => {
        res
        .status(500)
        .send({ message: 'Internal server error.' });
    });
};

exports.create = async (req, res) => {
    await sequelize.query(
        "INSERT INTO `posts` (title, description, createdAt, updatedAt) VALUES (:title, :description, :createdAt, :updatedAt)",
        {
            type: QueryTypes.INSERT,
            logging: console.log,
            replacements: {
                title: req.body.title,
                description: req.body.description ?? null,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }
        }
    )
    .then((data) => {
        res
        .status(200)
        .send({
            id: data[0],
            title: req.body.title,
            description: req.body.description ?? null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
    })
    .catch((error) => {
        res
        .status(req.body.title ? 500 : 422)
        .send({ message: req.body.title ? 'Internal server error.' : 'title is required' });
    });
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    await sequelize.query("SELECT * FROM `posts` WHERE id = :id", {
        type: QueryTypes.SELECT,
        replacements: { id: id }
    })
    .then((data) => {
        res
        .status(data ? 200 : 404)
        .send(data[0] ?? 'user not exist')
    })
    .catch((error) => {
        res
        .status(500)
        .send({ message: 'internal server error.' })
    })
}
