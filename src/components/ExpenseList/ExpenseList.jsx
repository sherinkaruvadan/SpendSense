import React, { useEffect, useState } from "react";
import "./ExpenseList.scss";
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
      const response = await axios.get(`${API_URL}/expense/`, {
        params: {
          user_id: user.id,
        },
      });
      console.log(response.data);
      setExpenses(response.data);
    } catch (error) {
      console.error(`Error in retrieving the expense list : ${error}`);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [user]);

  const sortedExpenses = expenses.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="expense-container">
      {sortedExpenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
