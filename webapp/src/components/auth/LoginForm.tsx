import React from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";

import Input from "components/common/form/Input";
import PasswordInput from "components/common/form/PasswordInput";

import AuthLayout from "./AuthLayout";
import { Form, FormGroup, FormControl } from "./commonStyle";
import AuthIcon from "assets/icons/AuthIcon";

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const ButtonWrapper = styled.div``;

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout title={t("Welcome Back")}>
      <Form>
        <FormGroup>
          <FormControl>
            <Input
              name="email"
              type="email"
              placeholder={t("email")}
              endAdornment={
                <InputAdornment position="end">
                  <IconWrapper>
                    {/* <AuthIcon type={isEmailValid() ? "checkOn" : "checkOff"} /> */}
                    <AuthIcon type={"checkOn"} />
                  </IconWrapper>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <PasswordInput name="password" placeholder={t("Password")} />
          </FormControl>
        </FormGroup>
        <ButtonWrapper>
          <button>{t("Sign In")}</button>
        </ButtonWrapper>
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
