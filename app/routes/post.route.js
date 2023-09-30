const route = (app, models) => {
    const Post = models.Post;

    app.post('/posts', async (req, res) => {
        await Post.create({
            title: req.body.firstName,
            description: req.body.lastName,
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