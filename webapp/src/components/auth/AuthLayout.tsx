import React from "react";
import styled from "styled-components";

import Image from "components/common/desktop/Image";

const Wrapper = styled.div``;

const AuthContainer = styled.div``;

const LogoWrapper = styled.div``;

const Title = styled.div``;

const Contents = styled.div``;

interface Props {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ title, children }) => {
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
