import React, { useEffect, useState } from "react";
import "./AddExpenseForm.scss";
import axios from "axios";
import { API_URL } from "../../config.js";
import { useNavigate } from "react-router-dom";

const AddExpenseForm = ({ user }) => {
  const navigate = useNavigate();
  //state variable for categories
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  console.log(user);

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

  //handle input change
  //handle amount change
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  //handle category change
  const handleCategoryChange = (event) => {
    const selectedCategory = categories.find(
      (cat) => cat.name === event.target.value
    );
    setCategory(selectedCategory);
    console.log(category);
  };

  //handle description change
  const handleDescritpionChange = (event) => {
    setDescription(event.target.value);
  };

  //handle date change
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  //handle cancel button
  const handleCancelClick = (event) => {
    event.preventDefault();
    navigate("/expense");
  };

  //handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newExpenseObj = {
      date: date,
      category_id: category.id,
      description: description,
      amount: amount,
      user_id: user.id,
    };

    console.log(newExpenseObj);

    //push the data via post request
    try {
      const response = await axios.post(`${API_URL}/expense`, newExpenseObj);
      console.log(response.data);
      navigate("/expense");
    } catch (error) {
      console.error(`Error creating an expense record: ${error}`);
    }
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
        value={amount}
        onChange={handleAmountChange}
        required
      />
      <label htmlFor="category" className="expense-label">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="expense-input"
        value={category}
        onChange={handleCategoryChange}
        required
      >
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
        value={description}
        onChange={handleDescritpionChange}
      />
      <label htmlFor="date" className="expense-label">
        Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        className="expense-input"
        value={date}
        onChange={handleDateChange}
        required
      />
      <div className="expense-buttons">
        <button onClick={handleCancelClick} className="button button-cancel">
          Cancel
        </button>
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
