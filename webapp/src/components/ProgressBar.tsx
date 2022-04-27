import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

import colors from "styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const BoxWrapper = styled.div``;

const ProgressBarStyle = () => ({
  color: colors.brand[100],
});

const ProgressBar: React.FC = () => {
  return (
    <Wrapper>
      <BoxWrapper>
        <CircularProgress sx={ProgressBarStyle} />
      </BoxWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
