import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";

const AppRouter = (props) => {
  return (
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
  );
};

export default AppRouter;
