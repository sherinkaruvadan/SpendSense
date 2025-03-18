import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config.js";

const EdiExpenseForm = ({ user }) => {
  //get expense record Id from url
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(user);
  //state variables
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState({ id: "", name: "" });
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  //fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/category`);
      setCategories(response.data);
    } catch (error) {
      setError("An error occured, please try again");
    }
  };

  //fetch the record to be edited
  const fetchExpense = async () => {
    try {
      const response = await axios.get(`${API_URL}/expense/${id}`, {
        params: { user_id: user.id },
      });
      console.log(response.data);
      const expense = response.data;
      setAmount(expense.amount);
      setDescription(expense.description);
      setDate(expense.date.split("T")[0]);
      setCategory({ id: expense.category_id, name: expense.category_name });
    } catch (error) {
      console.error(`Error in fetching expense data: ${error}`);
      setError(`An error occured, please try again`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCategories(); // Fetch categories first
      if (user && user.id) {
        await fetchExpense(); // Fetch expense after categories are loaded
      }
    };

    fetchData();
  }, [id, user]);

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  // useEffect(() => {
  //   fetchExpense();
  // }, [id]);

  // Handle input changes
  const handleAmountChange = (event) => setAmount(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleCategoryChange = (event) => {
    const selectedCategory = categories.find(
      (cat) => cat.id === parseInt(event.target.value)
    );
    setCategory(selectedCategory || { id: "", name: "" });
  };

  //handle cancel button
  const handleCancelClick = (event) => {
    event.preventDefault();
    navigate("/expense");
  };

  //handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate form inputs
    if (!amount || !category || !date) {
      setError("Please fill out all required fields.");
      return;
    }

    const updatedExpenseObj = {
      date: date,
      category_id: category.id,
      description: description,
      amount: amount,
      user_id: user.id,
    };
    console.log(updatedExpenseObj);

    try {
      // Update the expense
      const response = await axios.put(
        `${API_URL}/expense/${id}`,
        updatedExpenseObj
      );
      console.log("Expense updated:", response.data);
      setCategory({
        id: response.data.category_id,
        name: response.data.category_name,
      });
      navigate("/expense"); // Redirect to the expense list page
    } catch (error) {
      console.error("Error updating expense:", error);
      setError("Failed to update the expense. Please try again.");
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
        value={category.id}
        onChange={handleCategoryChange}
        required
      >
        <option value="" disabled>
          Choose Category
        </option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
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
        onChange={handleDescriptionChange}
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

export default EdiExpenseForm;
