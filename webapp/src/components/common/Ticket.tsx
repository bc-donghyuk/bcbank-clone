import styled from "@emotion/styled";
import React from "react";

import colors from "styles/colors";

const Wrapper = styled.div`
  padding: 12px 23px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(9, 10, 14, 0.16), 0px 4px 12px rgba(5, 43, 97, 0.08);
  border-radius: 8px;
  border-right: 6px solid ${colors.brand.dark};
`;
const Title = styled.div`
  line-height: 20px;
  color: ${colors.grayscale.gray8};
  font-weight: bold;
  font-size: 14px;
`;
const Desc = styled.div`
  line-height: 18px;
  color: ${colors.grayscale.gray6};
  font-weight: 500;
  font-size: 11px;
`;
const Info = styled.div`
  line-height: 16px;
  color: ${colors.grayscale.gray4};
  font-size: 11px;
`;

export interface Props {
  title: string;
  desc?: string;
  info?: string;
}

const Ticket: React.FC<Props> = ({ title, desc, info }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      {info && <Info>{info}</Info>}
    </Wrapper>
  );
};

export default Ticket;
