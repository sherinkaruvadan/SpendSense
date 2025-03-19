import React from "react";
import "./MonthSelector.scss";

const MonthSelector = ({ month, setMonth, months }) => {
  //define months
  // const months = [
  //   { name: "January", value: 1 },
  //   { name: "February", value: 2 },
  //   { name: "March", value: 3 },
  //   { name: "April", value: 4 },
  //   { name: "May", value: 5 },
  //   { name: "June", value: 6 },
  //   { name: "July", value: 7 },
  //   { name: "August", value: 8 },
  //   { name: "September", value: 9 },
  //   { name: "October", value: 10 },
  //   { name: "November", value: 11 },
  //   { name: "December", value: 12 },
  // ];
  const onMonthClick = (monthSelected) => {
    setMonth(monthSelected);
    console.log("Month selected is ", monthSelected);
  };

  return (
    <div className="month">
      {months.map((month) => {
        return (
          <button
            key={month.value}
            onClick={() => onMonthClick(month.value)}
            className="month-item"
          >
            {month.name.slice(0, 3).toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default MonthSelector;
