const route = (app, models) => {
    const User = models.User;

    app.post('/users', async (req, res) => {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error?.message);
        });
    });
};

module.exports = route;