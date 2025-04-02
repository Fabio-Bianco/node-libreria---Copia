const express = require('express');
const app = express();
const port = 10000;

const bookRoutes = require('./routes/bookRoutes');

app.use(express.json()); // middleware per leggere il body
app.use('/books', bookRoutes); // monta il router

app.get('/', (req, res) => {
    res.send('sei nella home');
});

app.listen(port, () => {
    console.log(`🔥 Server attivo su http://localhost:${port}`);
});
