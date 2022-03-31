import React, { Children } from "react";

const DesktopWrapper: React.FC = ({ children }) => {
  console.log(123);
  return (
    <div>
      adfasdfasdf
      <div>asdasd{children}</div>
      sadadasdas
    </div>
  );
};

export default DesktopWrapper;
