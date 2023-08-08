import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
