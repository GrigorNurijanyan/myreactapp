import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      {t("Dashboard")}
    </div>
  );
};

export default Dashboard;
