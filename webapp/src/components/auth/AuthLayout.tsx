import React from "react";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

import Image from "components/common/desktop/Image";

import { AuthContainer, LogoWrapper } from "./commonStyle";
import colors from "styles/colors";
import { isMobile } from "styles/devices";
import { redirectToLanding } from "utils/pageRedirect";

const DivWrapper = styled.div``;

const Logo = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

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
  title?: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ title, children }) => {
  const Wrapper = isMobile() ? Div100vh : DivWrapper;

  const handleLogoClick = () => {
    redirectToLanding();
  };

  return (
    <Wrapper>
      <AuthContainer>
        <LogoWrapper>
          <Logo onClick={handleLogoClick}>
            <Image assetId="haruLogoHorizontal" classNames="m-auto logo-image" />
          </Logo>
        </LogoWrapper>
        {title && <Title>{title}</Title>}
        <Contents>{children}</Contents>
      </AuthContainer>
    </Wrapper>
  );
};

export default AuthLayout;
