import styled from "@emotion/styled";

import { Container as BaseContainer } from "components/accounts/commonStyles";

import colors from "styles/colors";

export const Container = styled(BaseContainer)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
`;

export const Divider = styled.div`
  margin: 0 -24px 16px;
  border-bottom: 1px solid ${colors.grayscale.gray1};
`;
