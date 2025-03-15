import React, { useEffect, useState } from "react";
import "./AddExpenseForm.scss";
import axios from "axios";
import { API_URL } from "../../config.js";

const AddExpenseForm = () => {
  //state variable for categories
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  //fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/category`);
        setCategories(response.data);
      } catch (error) {
        setError("An error occured, please try again");
      }
    };
    fetchCategories();
  }, []);

  //handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="expense-form">
      <label htmlFor="amount" className="expense-label">
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
      <select name="category" id="category" className="expense-input" required>
        <option value="" disabled>
          Choose Category
        </option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
      <label htmlFor="description" className="expense-label">
        Description
      </label>
      <textarea
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
        <button className="button button-cancel">Cancel</button>
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
