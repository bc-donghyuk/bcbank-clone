import React from "react";

interface Props {
  type: "eyeOpen" | "eyeClose" | "check" | "checkOn" | "checkOff";
}

const AuthIcon: React.FC<Props> = ({ type }) => {
  const eyeOpen = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        fill="#5A41F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12ZM15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12Z"
        fill="white"
      />
    </svg>
  );

  const eyeClose = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        fill="#C1C2C7"
      />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3L21.3848 21.3848" stroke="#C1C2C7" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 2L22.3848 20.3848" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );

  const check = ({ checked }) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid={`email-icon-${checked ? "valid" : "invalid"}`}
      >
        <path
          d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
          fill={checked ? "#5A41F5" : "#C1C2C7"}
        />
      </svg>
    );
  };

  switch (type) {
    case "eyeOpen":
      return eyeOpen;
    case "eyeClose":
      return eyeClose;
    case "check":
    case "checkOn":
      return check({ checked: true });
    case "checkOff":
      return check({ checked: false });
    default:
      return null;
  }
};

export default AuthIcon;
