import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Category from "../pages/category";
import Register from "../pages/login/Register";
import ProductsList from "../pages/products";
import ProductEdit from "../pages/products/ProductEdit";

const AppRouter = (props) => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      <Route path="/category" element={<MainLayout><Category /></MainLayout>} />
      <Route path="/products/list" element={<MainLayout><ProductsList /></MainLayout>} />
      <Route path="/product/edit" element={<MainLayout><ProductEdit /></MainLayout>} />
      <Route path="/product/create" element={<MainLayout><ProductEdit /></MainLayout>} />
      <Route exact path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouter;
