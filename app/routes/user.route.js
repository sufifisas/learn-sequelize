const userController = require("../controllers/user.controller");

const route = (app) => {

    app.get('/users', userController.findAll);
    app.post('/users', userController.create);
    app.get('/users/:id', userController.findOne);
    app.put('/users/:id', userController.update);
    app.delete('/users/:id', userController.destroy);
};

module.exports = route;