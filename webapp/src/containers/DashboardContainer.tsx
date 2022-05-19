import React from "react";

import Dashboard from "components/dashboard/DashBoard";

import useUserProfileQuery from "@core/queries/user/useUserProfileQuery";
import { setLoggedIn } from "utils/auth";

const DashboardContainer = () => {
  const data = useUserProfileQuery();

  const tempHandleLogout = () => {
    setLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <button onClick={tempHandleLogout}>Logout</button>
      <Dashboard />
      <Dashboard />
    </>
  );
};

export default DashboardContainer;
