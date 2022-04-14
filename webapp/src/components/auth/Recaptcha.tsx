import styled from "@emotion/styled";
import React from "react";

import ReCAPTCHA from "react-google-recaptcha";
import { Controller } from "react-hook-form";

const recaptchaKey = process.env.REACT_APP_RECAPTCHA_CLIENT_SITE_KEY;

const Wrapper = styled.div`
  margin-top: 4px;
  text-align: center;
  & > div {
    display: inline-block;
  }
`;

interface Props {}

const Recaptcha: React.FC<Props> = () => {
  return (
    <Wrapper>
      <ReCAPTCHA sitekey={recaptchaKey} {...field} />
    </Wrapper>
  );
};

export default Recaptcha;
