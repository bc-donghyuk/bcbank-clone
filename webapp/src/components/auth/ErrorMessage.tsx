import React from "react";
import styled from "@emotion/styled";

import colors from "styles/colors";
import HaruTrans from "components/HaruTrans";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: ${colors.state.error.bg};
  border-left: 2px solid ${colors.state.error.default};
`;
const Text = styled.div`
  flex: 1;
  color: ${colors.state.error.default};
  font-size: 14px;
`;

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return !!message ? (
    <Container>
      <Text>
        <HaruTrans ns="errors" i18nKey={message} />
      </Text>
    </Container>
  ) : (
    <></>
  );
};

export default ErrorMessage;
