import React from "react";
import "./HomePage.scss";
import Summary from "../../components/Summary/Summary";

const HomePage = () => {
  return (
    <div className="main">
      <h2>Dashboard</h2>
      <section className="summary">
        <Summary />
      </section>
    </div>
  );
};

export default HomePage;
