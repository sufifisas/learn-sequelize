const userController = require("../controllers/user.controller");

const route = (app) => {

    app.get('/users', userController.findAll);
    app.post('/users', userController.create);
};

module.exports = route;