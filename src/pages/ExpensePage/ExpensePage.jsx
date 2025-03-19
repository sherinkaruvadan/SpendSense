import React from "react";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
const ExpensePage = ({ user }) => {
  return (
    <div className="main">
      <ExpenseList user={user} />
    </div>
  );
};

export default ExpensePage;
