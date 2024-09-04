const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    type: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;