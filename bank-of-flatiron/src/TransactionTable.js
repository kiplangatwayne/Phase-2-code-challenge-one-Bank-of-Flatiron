import React from 'react';
import Transaction from './Transaction';

function TransactionTable({ transactions }) {
  <Transaction transaction={transactions}/>
  return (
    <>
      <table id='table'>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td id='dat'>{transaction.date}</td>
              <td id='dat'>{transaction.category}</td>
              <td id='des'>{transaction.description}</td>
              <td id='dat'>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}



export default TransactionTable;
