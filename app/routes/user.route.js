module.exports = (app) => {
    app.get('/users', (req, res) => {
        res.send('this is users route')
    })
};