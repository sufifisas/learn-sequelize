const postController = require("../controllers/post.controller");

const route = (app) => {

    app.get('/posts', postController.findAll);
    app.post('/posts', postController.create);
};

module.exports = route;