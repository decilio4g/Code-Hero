import styled from "styled-components";
import { colors } from "styles/colors";
import { fonts } from "styles/font";

export const Container = styled.div``;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 976px) {
    align-items: flex-start;
    margin-left: 80px;
  }
`;

export const ContentTitle = styled.h1`
  @media (min-width: 976px) {
    font-size: 32px;
  }
  text-align: center;
  margin-top: 24px;

  font-size: 24px;
  font-family: ${fonts.CaptionBold}, sans-serif;
  font-weight: bold;
  color: ${colors.darkSmoke};
`;

export const ContentSearch = styled.div``;

export const ContentList = styled.div`
  margin: 72px 0;
`;

export const ContainerProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
