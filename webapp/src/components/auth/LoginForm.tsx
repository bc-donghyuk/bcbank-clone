import React, { useEffect } from "react";

import Input from "components/common/form/Input";

import AuthLayout from "./AuthLayout";
import { Form, FormGroup, FormControl } from "./commonStyle";
import { useTranslation } from "react-i18next";
import i18n from "i18n";

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout title={t("Welcome Back")}>
      <Form>
        <FormGroup>
          <FormControl>
            <Input name={t("email")} type="email" placeholder={t("email")} />
          </FormControl>
        </FormGroup>
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
