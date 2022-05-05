import styled from "@emotion/styled";

import colors from "styles/colors";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 36px 16px 24px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 28px;
  .logo-image {
    width: 85px;
  }

  .m-auto {
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div``;

export const FormControl = styled.div`
  padding-bottom: 12px;
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
`;

export const FormFooterItem = styled.div`
  font-size: 14px;
  padding-bottom: 8px;
`;

export const LinkItem = styled.span`
  display: inline-block;
  color: ${colors.brand[100]};
  font-weight: bold;
  cursor: pointer;
`;

export const PasswordRequirements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px 0;
  margin-bottom: 14px;
  list-style: none;
`;
