const Transaction = require('../modules/transactionDB');

const getTransactions = async (req, res) => {
    const transactions = await Transaction.find();
    res.render('index', { transactions });
};

const addTransactionForm = (req, res) => {
    res.render('addTransaction');
};

const addTransaction = async (req, res) => {
    const { type, category, amount, description } = req.body;
    const transaction = new Transaction({ type, category, amount, description });
    await transaction.save();
    res.redirect('/');
};

const editTransactionForm = async (req, res) => {
    const { id } = req.params;
    const singleTransaction = await Transaction.findById(id);
    res.render('editTransaction', { singleTransaction });
};

const editTransaction = async (req, res) => {
    const { id } = req.params;
    const { type, category, amount, description } = req.body;
    await Transaction.findByIdAndUpdate(id, { type, category, amount, description, date: Date.now() });
    res.redirect('/');
};

const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    await Transaction.findByIdAndDelete(id);
    res.redirect('/');
};

module.exports = { getTransactions, addTransaction, editTransaction, deleteTransaction, addTransactionForm, editTransactionForm }