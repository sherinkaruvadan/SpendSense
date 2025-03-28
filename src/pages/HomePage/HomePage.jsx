import React from "react";
import Summary from "../../components/Summary/Summary";
import MonthSelector from "../../components/MonthSelector/MonthSelector";

const HomePage = ({ user, month, setMonth }) => {
  //define months
  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];
  return (
    <div className="main">
      <h2>Dashboard</h2>
      <MonthSelector month={month} setMonth={setMonth} months={months} />
      <section className="summary">
        <Summary user={user} month={month} months={months} />
      </section>
    </div>
  );
};

export default HomePage;
