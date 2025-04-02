const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookController');
const validateBook = require('../middlewares/availableBooks');

router.get('/', bookControllers.index);
router.get('/:id', bookControllers.show);
router.post('/', validateBook, bookControllers.store);
router.put('/:id', validateBook, bookControllers.update);
router.delete('/:id', bookControllers.destroy);

module.exports = router;
