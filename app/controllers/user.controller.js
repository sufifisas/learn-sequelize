const { Op } = require("sequelize");
const sequelize = require("../config/database.config")

const User = sequelize.models.User;

exports.findAll = async (req, res) => {
    const condition = {};
    if (req.query.keyword) {
        condition.firstName = {
            [Op.like]: `%${req.query.keyword}%`, // use string% to start with, %string to end with
        }
    }
    await User.findAll({
        where: condition
    })
    .then((data) => {
        res
        .status(200)
        .send(data);
    })
    .catch((error) => {
        res
        .status(500)
        .send({ message: error.message });
    });
};

exports.create = async (req, res) => {
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    .then((data) => {
        res
        .status(200)
        .send(data);
    })
    .catch((error) => {
        res
        .status(req.body.firstName ? 500 : 422)
        .send({ message: error.message });
    });
}

exports.findOne = async (req, res) => {
    await User.findByPk(req.params.id)
    .then((data) => {
        res
        .status(data ? 200 : 404)
        .send(data ?? 'user not exist')
    })
    .catch((error) => {
        res
        .status(500)
        .send({ message: error.message })
    })
}

exports.update = async (req, res) => {
    await User.update(req.body, {
        where: { id: req.params.id }
    })
    .then((data) => {
        res
        .status(data == 1 ? 200 : 404)
        .send(data == 1 ? 'successfully updated' : 'user not exist')
    })
    .catch((error) => {
        res
        .status(500)
        .send({ message: error.message })
    })
}

exports.destroy = async (req, res) => {
    await User.destroy({
        where: { id: req.params.id }
    })
    .then((data) => {
        res
        .status(data == 1 ? 200 : 404)
        .send(data == 1 ? 'successfully deleted' : 'user not exist')
    })
    .catch((error) => {
        res
        .status(500)
        .send({ message: error.message })
    })
}