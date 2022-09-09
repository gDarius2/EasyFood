import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { useAuth0 } from "@auth0/auth0-react";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
