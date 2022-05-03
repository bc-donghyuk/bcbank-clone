import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Input from "components/common/form/Input";
import InputAdornment from "components/common/form/InputAdornment";
import PasswordInput from "components/common/form/PasswordInput";

import { BCBANK_USER__TYPE__LABELS } from "utils/user";
import AuthLayout from "./AuthLayout";
import { Form, FormControl, FormGroup, PasswordRequirements } from "./commonStyle";
import SignupTabs from "./SignupTabs";
import { passwordSchema } from "utils/validationSchema";
import { passwordRequirements } from "constants/fieldRequirements";
import PasswordRequirementsItem from "./PasswordRequirements";

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

  const checkPasswordValidByKey = (key: string) => {
    try {
      passwordSchema.validateSync(watch("password"), { abortEarly: false });
      return true;
    } catch (err: any) {
      const invalidKeys = err.inner.map((element: any) => {
        return element.errors[0];
      });
      console.log(err.inner);
      const isValid = invalidKeys.includes(key);
      return !isValid;
    }
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
          <FormControl>
            <PasswordInput name="password" control={control} placeholder={t("Password")} withErrorMessage={false} />
            <PasswordRequirements>
              {passwordRequirements.map(item => (
                <PasswordRequirementsItem
                  key={item.key}
                  touched={!!dirtyFields.password}
                  isValid={checkPasswordValidByKey(item.key)}
                  message={item.message}
                />
              ))}
            </PasswordRequirements>
          </FormControl>
        </FormGroup>
      </Form>
    </AuthLayout>
  );
};

export default SignupForm;
