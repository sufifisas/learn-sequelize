const userRoutes = require('./user.route');

const routes = (app, models) => {

    app.get('/', (req, res) => {
        res.send('Hello Sequelize tutorial')
    })

    userRoutes(app, models);
}

module.exports = routes;