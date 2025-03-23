import React from "react";
import "./Header.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";

const Header = ({ user }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  //logout function
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    // navigate("/");
    window.location.href = "/";
  };

  const displayName = user ? user.email.split("@")[0] : "";

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
            Add Expense
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
      {user && (
        <div className="header__user">
          {/* <div className="header__user--avatar"></div> */}
          <span className="header__user--name">
            {displayName.charAt(0).toUpperCase() + displayName.slice(1)}
          </span>
          <span onClick={logout} className="header__user--name">
            Logout
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
