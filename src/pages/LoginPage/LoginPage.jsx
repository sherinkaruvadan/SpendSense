import React from "react";
import "./LoginPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../../config.js";

const LoginPage = ({ user, setUser }) => {
  //make input fields controlled component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //navigate
  const navigate = useNavigate();

  //handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      console.log(response.data);
      console.log(response.data.success);
      console.log(response.data.user);
      if (response.data.success) {
        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        setEmail("");
        setPassword("");
        navigate("/home");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An Error Occured, please try again later");
    }
  };

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter you email here..."
          className="login-input"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password..."
          className="login-input"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
