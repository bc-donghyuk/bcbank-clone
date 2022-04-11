import React from "react";

const ExclamationIcon = ({ color = "#B4BECA" }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.00004 0.333252C3.32004 0.333252 0.333374 3.31992 0.333374 6.99992C0.333374 10.6799 3.32004 13.6666 7.00004 13.6666C10.68 13.6666 13.6667 10.6799 13.6667 6.99992C13.6667 3.31992 10.68 0.333252 7.00004 0.333252ZM7.66671 10.3333H6.33337V8.99992H7.66671V10.3333ZM7.66671 7.66659H6.33337V3.66659H7.66671V7.66659Z"
        fill={color}
      />
    </svg>
  );
};

export default ExclamationIcon;
