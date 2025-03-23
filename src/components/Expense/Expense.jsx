import React from "react";
import "./Expense.scss";
import { Link } from "react-router-dom";
import deleteSvg from "../../assets/Images/delete_outline-24px.svg";
import EditSvg from "../../assets/images/edit-24px.svg";
import axios from "axios";
import { API_URL } from "../../config";

const Expense = ({ expense }) => {
  let formattedDate = new Date(expense.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleDelete = async () => {
    const response = await axios.delete(`${API_URL}/expense/${expense.id}`);
    console.log("Delete response: ", response);
    window.location.reload();
  };

  return (
    <article className="expense">
      <p className="expense__date">{formattedDate}</p>
      <p className="expense__category">{expense.category_name}</p>
      <p className="expense__description">{expense.description}</p>
      <p className="expense__amount">{expense.amount}</p>
      <div className="expense__actions">
        <Link to={`/expense/${expense.id}/edit`}>
          <img
            src={EditSvg}
            alt="Edit icon"
            className="expense__actions--item"
          />
        </Link>
        <img
          src={deleteSvg}
          alt="Delete Icon"
          onClick={handleDelete}
          className="expense__actions--item"
        />
      </div>
    </article>
  );
};

export default Expense;
