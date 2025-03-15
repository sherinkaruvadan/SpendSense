import React from "react";
import "./AddExpenseForm.scss";

const AddExpenseForm = () => {
  return (
    <form className="expense-form">
      <label htmlFor="amount" expense-label>
        Amount
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Enter amount"
        className="expense-input"
        required
      />
      <label htmlFor="category" className="expense-label">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="expense-input"
        required
      ></select>
      <label htmlFor="description" className="expense-label">
        Description
      </label>
      <input
        type="textarea"
        name="description"
        id="description"
        placeholder="Enter Description"
        className="expense-input"
      />
      <label htmlFor="date" className="expense-label">
        Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        className="expense-input"
        required
      />
      <div className="expense-buttons">
        <button className="button">Cancel</button>
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
