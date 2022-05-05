import styled from "@emotion/styled";

import colors from "styles/colors";

export const Container = styled.div`
  overflow-y: scroll;
  padding: 20px 24px 24px;
  background: ${colors.grayscale.white};

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  padding-bottom: 22px;
  color: ${colors.grayscale.gray8};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.33px;
`;
