import React from "react";
import "./Summary.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

//register chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const Summary = ({ user, month, months }) => {
  //summary for a month
  const [summary, setSummary] = useState({
    totalExpense: 0,
    totalIncome: 0,
    savings: 0,
  });
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
  };

  useEffect(() => {
    if (user?.id && month) {
      fetchSummary();
    }
  }, [month, user]);

  //get name of the month for title
  const monthName = months.find((m) => m.value === month);

  // Determine overspending or savings
  const overspending = Math.max(0, summary.totalExpense - summary.totalIncome);
  const savings = Math.max(0, summary.totalIncome - summary.totalExpense);

  // Pie chart data
  const labels = ["Income", "Expense"];
  const dataValues = [summary.totalIncome, summary.totalExpense];
  const backgroundColors = ["#2196f3", "#FF6384"];

  // Add overspending or savings to the chart
  if (overspending > 0) {
    labels.push("Overspending");
    dataValues.push(overspending);
    backgroundColors.push("#D32F2F");
  } else if (savings > 0) {
    labels.push("Savings");
    dataValues.push(savings);
    backgroundColors.push("#4caf50");
  }

  const PieChartData = {
    labels,
    datasets: [
      {
        label: "Summary",
        data: dataValues,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors,
      },
    ],
  };

  return (
    <section className="summary">
      <h3 className="summary__title">Monthly Summary: {`${monthName.name}`}</h3>
      <div className="summary__represenation">
        <div className="summary__chart">
          <Pie
            data={PieChartData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 1,
            }}
          />
        </div>
        <div className="summary__content">
          <article className="summary__item">
            <h4 className="summary__item--title">You have Spend</h4>
            <p className="summary__item--value">{summary.totalExpense}</p>
          </article>
          {overspending > 0 ? (
            <article className="summary__item overspend">
              <h4 className="summary__item--title">Overspend</h4>
              <p className="summary__item--value">{overspending}</p>
            </article>
          ) : (
            <article className="summary__item">
              <h4 className="summary__item--title">Current Savings</h4>
              <p className="summary__item--value">{savings}</p>
            </article>
          )}
          <article className="summary__item">
            <h4 className="summary__item--title">Your Income</h4>
            <p className="summary__item--value">{summary.totalIncome}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Summary;
