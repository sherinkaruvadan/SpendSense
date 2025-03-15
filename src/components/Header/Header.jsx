import React from "react";
import "./Header.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";

const Header = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  return (
    <header className="header">
      <Link to="/home">
        <img src={logo} alt="Spend Sense logo" className="logo" />
      </Link>
      {!isLoginPage && (
        <nav className="header__nav">
          <NavLink
            to="/expense/add"
            className={({ isActive }) =>
              isActive ? "header__nav--item active" : "header__nav--item"
            }
            end
          >
            Add New Expense
          </NavLink>
          <NavLink
            to="/expense"
            className={({ isActive }) =>
              isActive ? "header__nav--item active" : "header__nav--item"
            }
            end
          >
            Expenses
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
