import React from "react";
import styled from "@emotion/styled";

import HaruTabs, { HaruTabsProps } from "components/common/tabs/HaruTabs";

interface Props extends HaruTabsProps {}

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const SignupTabs: React.FC<Props> = ({ tabIndex, tabItems, onChange }) => {
  return (
    <Wrapper>
      <HaruTabs tabIndex={tabIndex} tabItems={tabItems} onChange={onChange} />
    </Wrapper>
  );
};

export default SignupTabs;
