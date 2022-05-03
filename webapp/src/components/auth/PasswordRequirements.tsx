import React from "react";
import styled from "@emotion/styled";

import { CheckIcon } from "assets/icons";
import { devices } from "styles/devices";
import colors from "styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-bottom: 8px;
`;

const RequirementIconWrapper = styled.div`
  display: inline-flex;
  padding-right: 5px;

  @media ${devices.desktop} {
    padding-right: 10px;
  }
`;

const RequirementText = styled.div<{ color: string }>`
  display: inline-block;
  line-height: 16px;
  color: ${props => props.color};
  font-weight: 500;
  font-size: 10px;

  @media ${devices.desktop} {
    font-size: 12px;
  }
`;

interface Props {
  touched: boolean;
  isValid?: boolean;
  message: string;
}

const PasswordRequirementsItem: React.FC<Props> = ({ touched, isValid, message }) => {
  const getIconColor = () => {
    if (!touched) return colors.grayscale.gray4;
    if (isValid) return colors.brand.dark;
    return colors.state.error.default;
  };

  const getTextColor = () => {
    if (!touched) return colors.grayscale.gray4;
    if (isValid) return colors.grayscale.gray7;
    return colors.state.error.default;
  };

  return (
    <Wrapper>
      <RequirementIconWrapper>
        <CheckIcon width="14px" height="14px" color={getIconColor()} />
      </RequirementIconWrapper>
      <RequirementText color={getTextColor()}>{message}</RequirementText>
    </Wrapper>
  );
};

export default PasswordRequirementsItem;
