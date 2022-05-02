import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Input from "components/common/form/Input";
import InputAdornment from "components/common/form/InputAdornment";

import { BCBANK_USER__TYPE__LABELS } from "utils/user";
import AuthLayout from "./AuthLayout";
import { Form, FormControl, FormGroup } from "./commonStyle";
import SignupTabs from "./SignupTabs";

interface Props {}

const SignupForm: React.FC<Props> = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const { t } = useTranslation();

  const tabLabels = Object.values(BCBANK_USER__TYPE__LABELS());
  const isEmailValid = dirtyFields?.email && errors && !errors.email;

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
        <FormGroup>
          <FormControl>
            <Input
              name="email"
              control={control}
              placeholder={t("Email")}
              endAdornment={<InputAdornment position="end" isValid={isEmailValid} />}
            />
          </FormControl>
        </FormGroup>
      </Form>
    </AuthLayout>
  );
};

export default SignupForm;
