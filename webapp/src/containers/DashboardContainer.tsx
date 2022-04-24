import React from "react";

import { setLoggedIn } from "utils/auth";

const DashboardContainer = () => {
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
