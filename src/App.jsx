import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import AddExpenseFormPage from "./pages/AddExpenseFormPage/AddExpenseFormPage";
import EditExpenseFormPage from "./pages/EditExpenseFormPage/EditExpenseFormPage";

function App() {
  return (
    <>
      <h1>Assalamu alaikum Spend sense</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/expense/add" element={<AddExpenseFormPage />} />
          <Route path="/expense/edit" element={<EditExpenseFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
