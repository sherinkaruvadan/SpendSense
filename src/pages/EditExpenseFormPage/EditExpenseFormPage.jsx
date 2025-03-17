import React from "react";
import EdiExpenseForm from "../../components/EditExpenseForm/EdiExpenseForm";

const EditExpenseFormPage = ({ user }) => {
  return (
    <main className="main">
      <h2 className="main__title">Edit Your Expense</h2>
      <EdiExpenseForm user={user} />
    </main>
  );
};

export default EditExpenseFormPage;
