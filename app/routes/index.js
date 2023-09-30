const userRoutes = require('./user.route');
const postRoutes = require('./post.route');

const routes = (app) => {

    app.get('/', (req, res) => {
        res.send('Hello Sequelize tutorial')
    })

    userRoutes(app);
    postRoutes(app);
}

module.exports = routes;