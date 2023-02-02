import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authContext } from "./context/AuthContext";
import Layout from "./layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Menu from "./pages/menu";

function App() {
  const { isLogin, getLogin } = useContext(authContext);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        
      </Routes>
    </>
  );
}

export default App;
