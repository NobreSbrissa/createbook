
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBook from "./pages/CreateBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-book" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
