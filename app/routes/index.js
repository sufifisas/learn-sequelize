const userRoutes = require('./user.route');
const postRoutes = require('./post.route');

const routes = (app, models) => {

    app.get('/', (req, res) => {
        res.send('Hello Sequelize tutorial')
    })

    userRoutes(app, models);
    postRoutes(app, models);
}

module.exports = routes;