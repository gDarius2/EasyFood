import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import Restaurant from "../Pages/Restaurant";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/restaurants/:id" element={<Restaurant />}></Route>
    </Routes>
  );
};
