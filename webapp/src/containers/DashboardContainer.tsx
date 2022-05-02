import React from "react";

import useUserProfileQuery from "@core/queries/user/useUserProfileQuery";
import { setLoggedIn } from "utils/auth";

const DashboardContainer = () => {
  const data = useUserProfileQuery();

  const tempHandleLogout = () => {
    setLoggedIn(false);
    window.location.reload();
  };

  return (
    <div>
      <div>Dashboard</div>
      <button onClick={tempHandleLogout}>Logout</button>
    </div>
  );
};

export default DashboardContainer;
