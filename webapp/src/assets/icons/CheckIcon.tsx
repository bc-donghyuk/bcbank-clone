import React from "react";

interface Props {
  width: string;
  height: string;
  color: string;
}

const CheckIcon: React.FC<Props> = ({ width = "24px", height = "24px", color = "#E0E0E0" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path fill={color} d="M18.016 7.24l1.301 1.52-10.036 8.602-4.655-4.655 1.414-1.414 3.345 3.344z" />
      </g>
    </svg>
  );
};

export default CheckIcon;
