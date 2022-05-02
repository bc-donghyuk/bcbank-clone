import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

import Button from "components/common/buttons/Button";

import colors from "styles/colors";
import ErrorRobotSvg from "assets/svg/ErrorRobotSvg";
import HaruTrans from "components/HaruTrans";

const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15vh 0 126px;
  margin: 0 auto 40px;
  text-align: center;
`;

const ErrorRobotDiv = styled.div`
  width: 331px;
  height: 331px;
  margin: auto;
`;

const ErrorTitleDiv = styled.div`
  line-height: 32px;
  color: ${colors.grayscale.gray8};
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0.15px;
`;

const ErrorInfoDiv = styled.div`
  width: 300px;
  height: 44px;
  line-height: 22px;
  margin: auto;
  color: ${colors.state.error.default};
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const ErrorMessageDiv = styled.div`
  width: 168px;
  height: 44px;
  line-height: 22px;
  margin: auto;
  color: ${colors.grayscale.gray6};
  font-weight: normal;
  font-size: 16px;
  text-align: center;
`;

const ErrorButtonDiv = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 327px;
  height: 48px;
  margin: auto;
  padding: 0px;
`;

export interface BaseErrorProps {
  handleClick: (e: React.MouseEvent) => void;
  btnText: string;
  errorTitle?: string;
  errorMessage: string;
}

const BaseError: React.FC<BaseErrorProps> = ({ handleClick, btnText, errorTitle, errorMessage }) => {
  let errorInfo = null;
  const { t } = useTranslation();

  const checkAccessToSessionStorage = () => {
    return sessionStorage;
  };

  try {
    checkAccessToSessionStorage();
  } catch (e) {
    errorInfo = "Please allow third-party cookies on your browser setting.";
  }

  return (
    <ErrorContainer>
      <ErrorRobotDiv>
        <ErrorRobotSvg />
      </ErrorRobotDiv>
      {errorTitle ? (
        <ErrorTitleDiv>
          <HaruTrans ns="errors" i18nKey={errorTitle} />
        </ErrorTitleDiv>
      ) : (
        <></>
      )}
      {errorInfo ? <ErrorInfoDiv>{errorInfo}</ErrorInfoDiv> : ""}
      <ErrorMessageDiv>
        <HaruTrans ns="errors" i18nKey={errorMessage} />
      </ErrorMessageDiv>
      <ErrorButtonDiv>
        <Button fullWidth size="large" theme="dark" onClick={handleClick}>
          <HaruTrans ns="errors" i18nKey={btnText} />
        </Button>
      </ErrorButtonDiv>
    </ErrorContainer>
  );
};

export default BaseError;
