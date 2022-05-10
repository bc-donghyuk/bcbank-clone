import React from "react";

interface Props {
  className: string;
  color: string;
}

const ErrorIcon: React.FC<Props> = ({ className = "", color = "#F25059" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="106" height="100" viewBox="0 0 106 100" className={className}>
      <g fill="none" fillRule="evenodd" transform="translate(4 15)">
        <path
          fill="#FFF"
          fillOpacity="0"
          stroke={color}
          strokeWidth="4"
          d="M42.109 3.676c3.806-6.09 9.973-6.095 13.782 0l41.343 66.148c3.806 6.09 1.08 11.026-6.107 11.026H6.873c-7.178 0-9.916-4.931-6.107-11.026L42.109 3.676z"
        />
        <rect width="7.35" height="36.75" x="45.325" y="23.275" fill="#F25059" stroke="#FFF" rx="3.675" />
        <circle cx="49" cy="66.15" r="3.675" fill="#F25059" stroke="#FFF" />
      </g>
    </svg>
  );
};

export default ErrorIcon;
