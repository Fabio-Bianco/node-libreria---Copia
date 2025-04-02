function validateBook(req, res, next) {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Titolo e autore sono obbligatori'
        });
    }
    next();
}

module.exports = validateBook;
