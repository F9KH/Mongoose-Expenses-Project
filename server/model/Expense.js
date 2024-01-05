const mongoose = require('mongoose')

const moment = require('moment'); 
const Schema = mongoose.Schema
const expenses = require('../../expenses')

const expenseSchema = new Schema({
    item: String,
    amount: Number,
    date: Date,
    group: String,
})

const Expense = mongoose.model("expense", expenseSchema)

// expenses.forEach(element => {
//   const expense = new Expense(element)
//   expense.save()
//   console.log(expense)
  
// });

module.exports = Expense