import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      Auth
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
