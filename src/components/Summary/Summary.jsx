import React from "react";
import "./Summary.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const Summary = ({ user, month, months }) => {
  //summary for a month
  const [summary, setSummary] = useState({
    totalExpense: 0,
    totalIncome: 0,
    savings: 0,
  });
  // console.log(month);
  // console.log(user);
  const formattedDate = `${new Date().getFullYear()}-${month}-30`;
  //fetch data from API
  const fetchSummary = async () => {
    const response = await axios.get(`${API_URL}/dashboard/summary`, {
      params: {
        user_id: user.id,
        date: formattedDate,
      },
    });
    setSummary(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    if (user?.id && month) {
      fetchSummary();
    }
  }, [month, user]);

  //get name of the month for title
  const monthName = months.find((m) => m.value === month);

  return (
    <section className="summary">
      <h3 className="summary__title">Monthly Summary: {`${monthName.name}`}</h3>
      <div className="summary__content">
        <article className="summary__item">
          <h4 className="summary__item--title">You have Spend:</h4>
          <p className="summary__item--value">{summary.totalExpense}</p>
        </article>
        <article className="summary__item">
          <h4 className="summary__item--title">You have Saved:</h4>
          <p className="summary__item--value">{summary.savings}</p>
        </article>
        <article className="summary__item">
          <h4 className="summary__item--title">Your Income:</h4>
          <p className="summary__item--value">{summary.totalIncome}</p>
        </article>
      </div>
    </section>
  );
};

export default Summary;
