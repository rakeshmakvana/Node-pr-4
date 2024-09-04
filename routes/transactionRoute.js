const express = require('express');
const router = express.Router();
const transaction = require('../controllers/transactionController');

router.get('/', transaction.getTransactions);
router.get('/addTransaction', transaction.addTransactionForm);
router.post('/add', transaction.addTransaction);
router.get('/edit/:id', transaction.editTransactionForm);
router.post('/edit/:id', transaction.editTransaction);
router.get('/delete/:id', transaction.deleteTransaction);

module.exports = router;