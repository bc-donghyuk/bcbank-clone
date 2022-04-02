import React from "react";
import styled from "styled-components";

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
        <LogoWrapper>이미지</LogoWrapper>
        <Title>{title}</Title>
        <Contents>{children}</Contents>
      </AuthContainer>
    </Wrapper>
  );
};

export default AuthLayout;
