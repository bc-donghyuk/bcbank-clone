import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

import Input from "components/common/form/Input";
import InputAdornment from "components/common/form/InputAdornment";
import PasswordInput from "components/common/form/PasswordInput";
import Button from "components/common/buttons/Button";
import AuthLayout from "./AuthLayout";
import SignupTabs from "./SignupTabs";
import PasswordRequirementsItem from "./PasswordRequirements";

import { BCBANK_USER__TYPE__LABELS } from "utils/user";
import { Form, FormControl, FormGroup, PasswordRequirements } from "./commonStyle";
import { passwordSchema } from "utils/validationSchema";
import { passwordRequirements } from "constants/fieldRequirements";
import useCheckValidity from "hooks/useCheckValidity";
import colors from "styles/colors";

const ReferralWrapper = styled.div`
  padding-top: 36px;
`;

const ReferralBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReferralLabel = styled.div`
  line-height: 28px;
  color: ${colors.grayscale.gray4};
  font-size: 14px;
`;

const ReferralButton = styled.div``;

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
  const { checkValidityByKey } = useCheckValidity({
    schema: passwordSchema,
    value: watch("password"),
  });

  const tabLabels = Object.values(BCBANK_USER__TYPE__LABELS());
  const isEmailValid = dirtyFields?.email && errors && !errors.email;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleChangeUserType = (e: React.SyntheticEvent<Element, Event>, value: number): void => {
    setValue("userType", value);
  };

  const renderReferralBox = () => {
    if (getValues("referralCode")) {
      return (
        <ReferralWrapper>
          <ReferralBox>
            <ReferralLabel>{t("Referral Code")}</ReferralLabel>
            <ReferralButton>
              <Button
                key="withReferral"
                theme="transparent"
                size="small"
                onClick={() => {}}
                color={colors.state.error.default}
              >
                {t("Clear")}
              </Button>
            </ReferralButton>
          </ReferralBox>
        </ReferralWrapper>
      );
    }
    return (
      <ReferralWrapper>
        <ReferralBox>
          <ReferralLabel>{t("Got a referral code?")}</ReferralLabel>
          <ReferralButton>
            <Button key="withoutReferral" theme="outline" size="small" onClick={() => {}}>
              {t("ADD")}
            </Button>
          </ReferralButton>
        </ReferralBox>
      </ReferralWrapper>
    );
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
          </FormControl>
          <PasswordRequirements>
            {passwordRequirements.map(item => (
              <PasswordRequirementsItem
                key={item.key}
                touched={!!dirtyFields.password}
                isValid={checkValidityByKey(item.key)}
                message={item.message}
              />
            ))}
          </PasswordRequirements>
          <FormControl>
            <PasswordInput
              name="passwordConfirmation"
              control={control}
              placeholder={t("Confirm Password")}
              error={errors.passwordConfirmation}
            />
          </FormControl>
          {renderReferralBox()}
        </FormGroup>
      </Form>
    </AuthLayout>
  );
};

export default SignupForm;
