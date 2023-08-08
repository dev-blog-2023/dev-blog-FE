import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import BoardForm from "./pages/BoardForm";
import BoardUpdateForm from "./pages/BoardUpdateForm";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="board-form" element={<BoardForm />} />
      <Route path="board-update-form" element={<BoardUpdateForm />} />
    </Routes>
  );
}

export default App;
