import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthLayer from "./layer/Auth/Auth.layer";
import Home from "./pages/gust/Home";
import ParentHome from "./pages/Parents/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayer/>} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
