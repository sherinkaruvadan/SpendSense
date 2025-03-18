import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import AddExpenseFormPage from "./pages/AddExpenseFormPage/AddExpenseFormPage";
import EditExpenseFormPage from "./pages/EditExpenseFormPage/EditExpenseFormPage";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  //setting the state variable for user
  const [user, setUser] = useState();

  // Initialize user state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //set a month as current month
  const [month, setMonth] = useState(new Date().getMonth());

  return (
    <>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route
            path="/"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route
            path="/home"
            element={<HomePage user={user} month={month} setMonth={setMonth} />}
          />
          <Route path="/expense" element={<ExpensePage user={user} />} />
          <Route
            path="/expense/add"
            element={<AddExpenseFormPage user={user} />}
          />
          <Route
            path="/expense/:id/edit"
            element={<EditExpenseFormPage user={user} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
