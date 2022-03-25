import { Result } from "antd";
import { string, node, func } from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../Button/MainButton";

const ErrorPage = ({ status, title, subTitle, buttonText, navigateRoute }) => {
  const navigate = useNavigate();

  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={
        <MainButton
          onClick={() => {
            navigate(navigateRoute);
          }}
          buttonText={buttonText}
        />
      }
    />
  );
};

ErrorPage.defaultProps = {
  status: "404",
  title: "404",
  subTitle: "Sorry, the page you visited does not exist.",
  buttonText: "Back to Home",
  navigateRoute: "/dashboard",
};

ErrorPage.propTypes = {
  status: string,
  title: string,
  subTitle: string,
  extra: node,
  buttonText: string,
  navigateRoute: string,
  onClick: func,
};

export default ErrorPage;
