import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";

import Input from "components/common/form/Input";
import InputAdornment from "components/common/form/InputAdornment";
import PasswordInput from "components/common/form/PasswordInput";
import Button from "components/common/buttons/Button";
import HaruTrans from "components/HaruTrans";
import AuthLayout from "./AuthLayout";
import SignupTabs from "./SignupTabs";
import PasswordRequirementsItem from "./PasswordRequirements";
import SignupReferralCodeDrawer from "./SignupReferralCodeDrawer";
import Ticket from "components/common/Ticket";

import { BCBANK_USER__TYPE__LABELS } from "utils/user";
import {
  Form,
  FormControl,
  FormFooter,
  FormFooterItem,
  FormGroup,
  PasswordRequirements,
  StyledTag,
} from "./commonStyle";
import { passwordSchema } from "utils/validationSchema";
import { passwordRequirements } from "constants/fieldRequirements";
import useCheckValidity from "hooks/useCheckValidity";
import colors from "styles/colors";
import { IS_KOREAN_SITE } from "envConstants";
import { devices } from "styles/devices";
import { HOME_URL, LEGAL_PRIVACY_POLICY_URL, LEGAL_TERMS_OF_SERVICE_URL, LOGIN_URL } from "URLConstant";
import authService from "@core/services/authService";
import { useGlobalDrawer } from "recoil/atoms/globalDrawer";

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

const TicketWrapper = styled.div`
  padding-top: 8px;
`;

const Agreement = styled.div`
  padding: 40px 0 24px;
  color: ${colors.grayscale.gray5};
  font-size: 12px;
  text-align: center;

  @media ${devices.desktop} {
    font-size: 14px;
  }
`;

const StyledLink = styled.a`
  color: ${colors.brand[100]} !important;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  padding-bottom: 12px;
`;

interface Props {}

const SignupForm: React.FC<Props> = () => {
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { checkValidityByKey } = useCheckValidity({
    schema: passwordSchema,
    value: watch("password"),
  });
  const { openGlobalDrawer } = useGlobalDrawer();
  const [isKoreanSiteAuthFormChecked, setIsKoreanSiteAuthFormChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const tabLabels = Object.values(BCBANK_USER__TYPE__LABELS());
  const isEmailValid = dirtyFields?.email && errors && !errors.email;

  const onSubmit = async (data: any) => {
    if (loading) {
      return;
    }

    setLoading(true);
    const { email, password, passwordConfirmation, usertype, referralCode } = data;
    try {
      setLoading(false);
      await authService.signup({ email, password, passwordConfirmation, usertype, referralCode });

      const { state } = location;
      const targetIUrl = state ? state.from.pathname : HOME_URL;
    } catch (err) {
      setLoading(false);
    }
  };

  const handleChangeUserType = (e: React.SyntheticEvent<Element, Event>, value: number): void => {
    setValue("userType", value);
  };

  const handleRemoveReferralCode = () => {
    setValue("referralCode", "");
  };

  const handleApplyReferralCode = (referralCode: string) => {
    setValue("referralCode", referralCode);
  };

  const handleClickReferralAdd = () => {
    openGlobalDrawer({
      component: SignupReferralCodeDrawer,
      componentProps: {
        handleApply: handleApplyReferralCode,
      },
    });
  };

  const handleClickTos = () => {
    navigate(LEGAL_TERMS_OF_SERVICE_URL);
  };

  const handleClickPrivacyPolicy = () => {
    navigate(LEGAL_PRIVACY_POLICY_URL);
  };

  const handleClickSignin = () => {
    navigate(LOGIN_URL);
  };

  const renderReferralBox = () => {
    if (watch("referralCode")) {
      return (
        <ReferralWrapper>
          <ReferralBox>
            <ReferralLabel>{t("Referral Code")}</ReferralLabel>
            <ReferralButton>
              <Button
                key="withReferral"
                theme="transparent"
                size="small"
                onClick={handleRemoveReferralCode}
                color={colors.state.error.default}
              >
                {t("Clear")}
              </Button>
            </ReferralButton>
          </ReferralBox>
          <TicketWrapper>
            <Ticket
              title={getValues("referralCode")}
              desc={t("Additional 0.2% Earn Rate for Haru Earn & Haru Earn Plus")}
            />
          </TicketWrapper>
        </ReferralWrapper>
      );
    }
    return (
      <ReferralWrapper>
        <ReferralBox>
          <ReferralLabel>{t("Got a referral code?")}</ReferralLabel>
          <ReferralButton>
            <Button key="withoutReferral" theme="outline" size="small" onClick={handleClickReferralAdd}>
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
              error={errors.email?.message}
              endAdornment={<InputAdornment position="end" isValid={isEmailValid} />}
            />
          </FormControl>
          <FormControl>
            <PasswordInput
              name="password"
              control={control}
              error={errors.password?.message}
              placeholder={t("Password")}
              withErrorMessage={false}
            />
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
              error={errors.passwordConfirmation?.message}
              withIcon={false}
            />
          </FormControl>
          {renderReferralBox()}
          {/* TODO : Add server error message  */}
          {/*  */}
          {/* TODO : IS_KOREAN_SITE 어떻게 판별하는지 공부하기  */}
          {/* {IS_KOREAN_SITE && <KoreanSiteAuthForm 
             checked={isKoreanSiteAuthFormChecked}
             handleClick={() => setIsKoreanSiteAuthFormChecked(!isKoreanSiteAuthFormChecked)}/>} */}
          <FormGroup>
            <Agreement>
              <HaruTrans
                ns="default"
                i18nKey="By creating an account, <br/>you agree to the <TOS>Terms of Service</TOS> and <PP>Privacy Policy.</PP>"
                components={{
                  TOS: <StyledLink onClick={handleClickTos} />,
                  PP: <StyledLink onClick={handleClickPrivacyPolicy} />,
                }}
              />
            </Agreement>
          </FormGroup>
          <ButtonWrapper>
            <Button
              theme="primary"
              size="large"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              loading={loading}
              disabled={!!IS_KOREAN_SITE && !isKoreanSiteAuthFormChecked}
            >
              {t("Sign Up")}
            </Button>
          </ButtonWrapper>
        </FormGroup>
      </Form>
      <FormFooter>
        <FormFooterItem>
          <HaruTrans ns="accounts" i18nKey="Already have an account?" />
          &nbsp;
          <StyledTag onClick={handleClickSignin}>
            <HaruTrans ns="accounts" i18nKey="Sign in" />
          </StyledTag>
        </FormFooterItem>
      </FormFooter>
    </AuthLayout>
  );
};

export default SignupForm;
