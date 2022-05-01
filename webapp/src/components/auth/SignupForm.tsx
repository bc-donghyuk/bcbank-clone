import { t } from "i18next";
import React from "react";
import { useFormContext } from "react-hook-form";
import { BCBANK_USER__TYPE__LABELS } from "utils/user";

import AuthLayout from "./AuthLayout";
import { Form } from "./commonStyle";
import SignupTabs from "./SignupTabs";

interface Props {}

const SignupForm: React.FC<Props> = () => {
  const { control, handleSubmit, setValue, getValues, watch } = useFormContext();
  const tabLabels = Object.values(BCBANK_USER__TYPE__LABELS());

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleChangeUserType = (e: React.SyntheticEvent<Element, Event>, value: number): void => {
    setValue("userType", value);
  };

  return (
    <AuthLayout title={t("Create account")}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SignupTabs tabIndex={watch("userType")} tabItems={tabLabels} onChange={handleChangeUserType} />
      </Form>
    </AuthLayout>
  );
};

export default SignupForm;
