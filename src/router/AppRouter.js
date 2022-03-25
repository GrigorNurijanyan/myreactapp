import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import User from "../pages/user";

const AppRouter = (props) => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/user" element={<User />} />
      </Route>
      <Route exact path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouter;
