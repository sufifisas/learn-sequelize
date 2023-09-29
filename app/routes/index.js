const userRoutes = require('./user.route');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('Hello Sequelize tutorial')
    })

    userRoutes(app);
}