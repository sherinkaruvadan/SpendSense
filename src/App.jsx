import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Assalamu alaikum Spend sense</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/expense/add" element={<AddExpenseFormPage />} />
          <Route path="/expense/edit" element={<EditExpensePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
