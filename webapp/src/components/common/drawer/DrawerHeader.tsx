import React from "react";
import styled from "@emotion/styled";

import { Title } from "components/accounts/commonStyles";
import Close from "../icons/Close";

const DummyPlaceholder = styled.div``;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
`;

const DummyIcon = styled.div`
  width: 24px;
  height: 24px;
`;

interface Props {
  title?: string;
  handleClose?: () => void;
}

const DrawerHeader: React.FC<Props> = ({ title, handleClose }) => {
  return (
    <Title>
      {title || <DummyPlaceholder />}
      {handleClose ? (
        <IconContainer onClick={handleClose}>
          <Close />
        </IconContainer>
      ) : (
        <DummyIcon />
      )}
    </Title>
  );
};

export default DrawerHeader;
