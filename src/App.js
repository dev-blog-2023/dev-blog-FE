import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  );
}

export default App;
