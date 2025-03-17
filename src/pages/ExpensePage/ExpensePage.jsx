import React from "react";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
const ExpensePage = ({ user }) => {
  return <ExpenseList user={user} />;
};

export default ExpensePage;
