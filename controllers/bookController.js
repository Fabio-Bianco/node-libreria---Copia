const books = require('../data/books');

function index(req, res) {
    let filteredBooks = books;
    if (req.query.author) {
        filteredBooks = books.filter(book =>
            book.author.toLowerCase().includes(req.query.author.toLowerCase())
        );
    }
    res.json(filteredBooks);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) return res.status(404).json({ message: 'Libro non trovato' });
    res.json(book);
}

function store(req, res) {
    const newId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
    const newBook = {
        id: newId,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        available: req.body.available
    };
    books.push(newBook);
    res.status(201).json(newBook);
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return res.status(404).json({ message: 'Libro non trovato' });
    books[index] = { id, ...req.body };
    res.json(books[index]);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return res.status(404).json({ message: 'Libro non trovato' });
    books.splice(index, 1);
    res.sendStatus(204);
}

module.exports = { index, show, store, update, destroy };
