import React, { useState, useEffect } from 'react';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.npoint.io/90ec8e113de724e8ec7d')
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Failed to fetch data from the server.');
        }
        return resp.json();
      })
      .then(data => {
        setTransactions(data.transactions);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === '' || transaction.category === selectedCategory)
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div id='div'>
          <input
            type='text'
            placeholder='Search...'
            onChange={handleSearchChange}
            id='search'
          />
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value=''>All</option>
            <option value='Income'>Income</option>
            <option value='Food'>Food</option>
            <option value='Fashion'>Fashion</option>
            <option value='Gift'>Gift</option>
            <option value='Transportation'>Transportation</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Housing'>Housing</option>
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
      )}
    </>
  );
}

export default Transaction;
