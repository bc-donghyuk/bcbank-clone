import React from "react";
import { InputAdornment as Adornment } from "@mui/material";
import styled from "@emotion/styled";

import AuthIcon from "assets/icons/AuthIcon";

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

interface Props {
  isValid: boolean;
  position: "end";
}

const InputAdornment: React.FC<Props> = ({ isValid, position }) => {
  return (
    <Adornment position={position}>
      <IconWrapper>
        <AuthIcon type={isValid ? "checkOn" : "checkOff"} />
      </IconWrapper>
    </Adornment>
  );
};

export default InputAdornment;
