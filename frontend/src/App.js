// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetching data from our Node.js Backend
    axios.get('http://localhost:5000/expenses')
      .then(res => setExpenses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;