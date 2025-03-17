import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config.js";
import Expense from "../Expense/Expense.jsx";

const ExpenseList = ({ user }) => {
  console.log(user);
  //state variable to hold expense records
  const [expenses, setExpenses] = useState([]);

  //fetch expense record from backend

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/expense/?user_id=${user.id}`
      );
      console.log(response.data);
      setExpenses(response.data);
    } catch (error) {
      console.error(`Error in retrieving the expense list : ${error}`);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const sortedExpenses = expenses.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="expense-container">
      {sortedExpenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default ExpenseList;
