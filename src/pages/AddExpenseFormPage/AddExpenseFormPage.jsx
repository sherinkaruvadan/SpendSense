import React from "react";
import "./AddExpenseFormPage.scss";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm.jsx";

const AddExpenseFormPage = ({ user }) => {
  return (
    <main className="main">
      <h2 className="main__title">Add Your Expense</h2>
      <AddExpenseForm user={user} />
    </main>
  );
};

export default AddExpenseFormPage;
