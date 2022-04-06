import React from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import Image from "components/common/desktop/Image";

import { AuthContainer, LogoWrapper } from "./commonStyle";
import colors from "styles/colors";
import { isMobile } from "styles/devices";

const DivWrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  line-height: 28px;
  margin-bottom: 36px;
  color: ${colors.grayscale.gray8};
  font-weight: bold;
  font-size: 24px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ title, children }) => {
  const Wrapper = isMobile() ? Div100vh : DivWrapper;

  return (
    <Wrapper>
      <AuthContainer>
        <LogoWrapper>
          <Image assetId="haruLogoHorizontal" classNames="m-auto logo-image" />
        </LogoWrapper>
        <Title>{title}</Title>
        <Contents>{children}</Contents>
      </AuthContainer>
    </Wrapper>
  );
};

export default AuthLayout;
