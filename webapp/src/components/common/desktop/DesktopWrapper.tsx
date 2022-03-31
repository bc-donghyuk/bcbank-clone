import React, { Children } from "react";

const DesktopWrapper: React.FC = ({ children }) => {
  console.log(123);
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default DesktopWrapper;
