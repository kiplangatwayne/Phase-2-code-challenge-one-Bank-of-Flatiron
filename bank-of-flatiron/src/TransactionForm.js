import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import '../src/App.css'

function TransactionForm() {
  const [dateInput, setDateInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [categoryInput , setCategoryInput] = useState('')
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const newTransaction = { date: dateInput, description: descriptionInput, amount: amountInput , category: categoryInput };
    // Append the new transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);
    // Reset the form fields
    setDateInput('');
    setDescriptionInput('');
    setAmountInput('');
    setCategoryInput('')
    
  };

 

  return (
    <>
      <TransactionTable transactions={transactions} />
      <form onSubmit={handleSubmit} id='card'>
        <label>
          Date:.............
          <input type="text" value={dateInput}onChange={event => setDateInput(event.target.value)}
          />
        </label>
        <label>
          Category:......
          <input type="text" value={categoryInput}onChange={event => setCategoryInput(event.target.value)}
          />
        </label>
        <label>
          Description :
          <input type="text" value={descriptionInput} onChange={event => setDescriptionInput(event.target.value)}
          />
        </label>
        <label>
          Amount:........
          <input type="text" value={amountInput} onChange={event => setAmountInput(event.target.value)}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
}

export default TransactionForm;
