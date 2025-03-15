import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import AddExpenseFormPage from "./pages/AddExpenseFormPage/AddExpenseFormPage";
import EditExpenseFormPage from "./pages/EditExpenseFormPage/EditExpenseFormPage";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  //setting the state variable for user
  const [user, setUser] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route path="/home" element={<HomePage user={user} />} />
          <Route path="/expense" element={<ExpensePage user={user} />} />
          <Route
            path="/expense/add"
            element={<AddExpenseFormPage user={user} />}
          />
          <Route
            path="/expense/edit"
            element={<EditExpenseFormPage user={user} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
