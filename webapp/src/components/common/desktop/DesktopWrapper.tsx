import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

import colors from "styles/colors";
import { isMobile as checkIsMobile } from "styles/devices";
import { isLoggedIn } from "utils/auth";

export const LOGGED_IN_PAGE_WIDTH = 769;
const LOGGED_OUT_PAGE_WIDTH = 600;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.grayscale.white};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const DesktopMobileViewWrapper = styled(Div100vh)<{ width: number }>`
  width: ${({ width }) => `${width}px`};
`;

const MobileContainer = styled(Div100vh)`
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: React.ReactNode;
}

const DesktopWrapper: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(checkIsMobile());

  const handleResize = () => {
    setIsMobile(checkIsMobile());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <MobileContainer>{children}</MobileContainer>
      </>
    );
  }

  return (
    <Container>
      <Column>
        <DesktopMobileViewWrapper
          id="desktop-mobile-view-wrapper"
          width={isLoggedIn() ? LOGGED_IN_PAGE_WIDTH : LOGGED_OUT_PAGE_WIDTH}
        >
          {children}
        </DesktopMobileViewWrapper>
      </Column>
    </Container>
  );
};

export default DesktopWrapper;
