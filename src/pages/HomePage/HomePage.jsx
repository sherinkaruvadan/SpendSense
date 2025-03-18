import React from "react";
import "./HomePage.scss";
import Summary from "../../components/Summary/Summary";
import MonthSelector from "../../components/MonthSelector/MonthSelector";

const HomePage = ({ month, setMonth }) => {
  console.log("Current month is ", month);
  return (
    <div className="main">
      <h2>Dashboard</h2>
      <MonthSelector month={month} setMonth={setMonth} />
      <section className="summary">
        <Summary />
      </section>
    </div>
  );
};

export default HomePage;
