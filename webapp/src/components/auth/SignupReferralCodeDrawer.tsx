import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Input from "components/common/form/Input";
import DrawerContentLayout from "components/common/drawer/DrawerContentLayout";

import colors from "styles/colors";
import useGlobalDrawer from "hooks/useGlobalDrawer";

const Wrapper = styled.div`
  margin-bottom: 60px;
  padding: 4px 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const DummyPlaceholder = styled.div``;

const Text = styled.div`
  line-height: 24px;
  font-size: 16px;
  color: ${colors["Grayscale/gray 90"]};
  cursor: pointer;
`;

interface Props {
  handleApply: (referralCode: string) => void;
}

const SignupReferralCodeDrawer: React.FC<Props> = ({ handleApply }) => {
  const { control, handleSubmit } = useForm();
  const { closeGlobalDrawer } = useGlobalDrawer();
  const { t } = useTranslation();

  const onClick = (data: any) => {
    handleApply(data.referralCode);
    closeGlobalDrawer();
  };

  return (
    <DrawerContentLayout withDivider={false} withHeader={false}>
      <Wrapper>
        <Title>
          <DummyPlaceholder />
          <Text data-cy="referral-drawer-close-btn" onClick={handleSubmit(onClick)}>
            {t("signup.referral_code_done")}
          </Text>
        </Title>
        <Input
          name="referralCode"
          control={control}
          placeholder={t("Add a referral code here")}
          withErrorMessage={false}
          withBorderBottom={false}
        />
      </Wrapper>
    </DrawerContentLayout>
  );
};

export default SignupReferralCodeDrawer;
