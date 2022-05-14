import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  animation: pop 0.8s cubic-bezier(0, 0.55, 0.58, 1) forwards;

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

const CompleteIcon: React.FC<Props> = ({ width = "100", height = "100", color = "#616C7C" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M92 50.0001C92 43.5199 90.5324 37.3826 87.9116 31.9022L84.8914 34.9223C86.8917 39.5447 88.0002 44.6429 88.0002 50C88.0002 70.9868 70.987 88 50.0002 88C29.0134 88 12.0002 70.9868 12.0002 50C12.0002 29.0132 29.0134 12 50.0002 12C59.7777 12 68.6927 15.6928 75.4267 21.7597L78.2585 18.9278C70.7977 12.1387 60.8822 8.00006 50 8.00006C26.804 8.00006 8 26.8041 8 50.0001C8 73.196 26.804 92.0001 50 92.0001C73.196 92.0001 92 73.196 92 50.0001ZM48.4956 57.5389L31.2142 40.257L28.3858 43.0854L48.4964 63.196L92.337 19.3554L89.5086 16.5269L48.4956 57.5389Z"
        fill={color}
      />
    </Svg>
  );
};

export default CompleteIcon;
