import React, { useState, useEffect } from 'react';

function Transaction(transaction) {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
  }, []);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.search(search) > -1
  );

  return (
    <>
      <div id='div'>
        <input type='text' placeholder='Search...' onChange={handleSearchChange} id='search'/>
        <select>
          <option>Income</option>
          <option>Food</option>
          <option>Fashion</option>
          <option>Gift</option>
          <option>Transportation</option>
          <option>Entertainment</option>
          <option>Housing</option>
        </select>
        <table>
          <thead>
            <tr>
              <th id='dat'>Date</th>
              <th id='dat'>Category</th>
              <th id='des'>Description</th>
              <th id='amnt'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transaction;
