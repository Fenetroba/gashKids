import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthLayer from "./layer/Auth/Auth.layer";
import Home from "./pages/gust/Home";
import ParentHome from "./pages/Parents/Home";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { useDispatch, useSelector } from "react-redux";
import { Children, useEffect } from "react";
import { checkAuth } from "./store/AuthSlice";
import PageProtector from "./components/check_page/PageProtector";
import ParentLayer from "./layer/Parents/ParentLayer";

function App() {
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  console.log("auth", isAuthenticated, user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    console.log("auth", isAuthenticated);
  }, []);

  const Location = useLocation();
  console.log(Location.pathname);

  return (
    <div className="">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <PageProtector isAuthenticated={isAuthenticated} user={user}>
              <AuthLayer />
            </PageProtector>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>

        {/* parent Page  */}

        <Route
          path="/parent"
          element={
            <PageProtector isAuthenticated={isAuthenticated} user={user}>
              <ParentLayer />
            </PageProtector>
          }
        >
          <Route path="home" element={<ParentHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
