import React from "react";
import "./MonthSelector.scss";

const MonthSelector = ({ setMonth, months }) => {
  const onMonthClick = (monthSelected) => {
    setMonth(monthSelected);
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
