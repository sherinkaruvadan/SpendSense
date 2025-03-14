import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import AddExpenseFormPage from "./pages/AddExpenseFormPage/AddExpenseFormPage";
import EditExpenseFormPage from "./pages/EditExpenseFormPage/EditExpenseFormPage";
import { useState } from "react";

function App() {
  //setting the state variable for user
  const [user, setUser] = useState(null);
  return (
    <>
      <h1>Assalamu alaikum Spend sense</h1>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
