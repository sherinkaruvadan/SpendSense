import React from "react";
import "./Expense.scss";
import { Link } from "react-router-dom";
import deleteSvg from "../../assets/Images/delete_outline-24px.svg";
import EditSvg from "../../assets/images/edit-24px.svg";

const Expense = ({ expense }) => {
  let formattedDate = new Date(expense.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <article className="expense">
      <p className="expense__date">{formattedDate}</p>
      <p className="expense__category">{expense.category_id}</p>
      <p className="expense__description">{expense.description}</p>
      <p className="expense__amount">{expense.amount}</p>
      <div className="expense__actions">
        <Link to={`/expense/${expense.id}/edit`}>
          <img src={EditSvg} alt="Edit icon" />
        </Link>
        <img src={deleteSvg} alt="Delete Icon" />
      </div>
    </article>
  );
};

export default Expense;
