import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import BoardForm from "./pages/BoardForm";
import BoardUpdateForm from "./pages/BoardUpdateForm";
import BoardDetail from "./pages/BoardDetail";
import FindInfo from "./pages/FindInfo";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="board-form" element={<BoardForm />} />
      <Route path="board-update-form/:boardId" element={<BoardUpdateForm />} />
      <Route path="board/:boardId" element={<BoardDetail />} />
      <Route path="find-info" element={<FindInfo />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
