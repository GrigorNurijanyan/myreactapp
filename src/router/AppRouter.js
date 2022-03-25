import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";

const AppRouter = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouter;
