import React from "react";
import styled from "@emotion/styled";

import DrawerHeader from "./DrawerHeader";
import { Container, Divider } from "./commonStyle";

import { BaseButtonTheme } from "../buttons/BaseButton";
import Button from "../buttons/Button";
import { useGlobalDrawer } from "recoil/atoms/globalDrawer";

interface ButtonWrapperProps {
  backgroundColor?: string;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  margin: 0 -16px -20px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : "inherit")};
`;

interface Props {
  withHeader?: boolean;
  withDivider?: boolean;
  title?: string;
  buttonLabel?: string;
  buttonWrapperBackgroundColor?: string;
  handleButtonClick?: (e: React.MouseEvent) => void;
  buttonLoading?: boolean;
  buttonDisabled?: boolean;
  buttonWrapperContents?: React.ReactNode;
  buttonWrapperContentsPlacement?: "top" | "bottom";
  theme?: BaseButtonTheme;
  handleClose?: () => void;
  children: React.ReactNode;
}

const DrawerContentLayout: React.FC<Props> = ({
  withHeader = true,
  withDivider = true,
  title,
  buttonLabel,
  buttonWrapperBackgroundColor,
  handleButtonClick,
  buttonLoading = false,
  buttonDisabled = false,
  buttonWrapperContents,
  buttonWrapperContentsPlacement = "top",
  theme = "primary",
  handleClose,
  children,
}) => {
  const { closeGlobalDrawer } = useGlobalDrawer();

  const onClose = () => {
    closeGlobalDrawer();
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <Container>
      {withHeader && <DrawerHeader title={title} handleClose={onClose} />}
      {!!title && withDivider && <Divider />}
      {children}
      {buttonLabel && (
        <ButtonWrapper backgroundColor={buttonWrapperBackgroundColor}>
          {buttonWrapperContents && buttonWrapperContentsPlacement === "top" && <>{buttonWrapperContents}</>}
          <Button
            fullWidth
            theme={theme}
            size="large"
            onClick={handleButtonClick}
            loading={buttonLoading}
            disabled={buttonDisabled}
          >
            {buttonLabel}
          </Button>
          {buttonWrapperContents && buttonWrapperContentsPlacement === "bottom" && <>{buttonWrapperContents}</>}
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default DrawerContentLayout;
