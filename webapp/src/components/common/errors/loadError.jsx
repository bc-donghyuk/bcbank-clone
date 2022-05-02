import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import BaseError from "components/common/errors/baseError";

const LoadError = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const handleClick = () => {
    window.location = location.pathname;
  };

  return (
    <BaseError handleClick={handleClick} errorMessage={"Something went wrong. Please try again"} btnText={"Refresh"} />
  );
};

export default LoadError;
