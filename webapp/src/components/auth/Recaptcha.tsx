import styled from "@emotion/styled";
import React, { useEffect } from "react";

import ReCAPTCHA from "react-google-recaptcha";

const recaptchaKey = process.env.REACT_APP_RECAPTCHA_CLIENT_SITE_KEY;

const Wrapper = styled.div`
  margin-top: 4px;
  text-align: center;
  & > div {
    display: inline-block;
  }
`;

interface Props {
  onChange: (token: string) => void;
}

const Recaptcha: React.FC<Props> = ({ onChange }) => {
  useEffect(() => {
    window.recaptchaOptions = { useRecaptchaNet: true };
  }, []);

  return (
    <Wrapper>
      <ReCAPTCHA sitekey={recaptchaKey} size="normal" onChange={onChange} />
    </Wrapper>
  );
};

export default Recaptcha;
