import styled, { keyframes } from "styled-components";
import { colors } from "styles/colors";
import { fonts } from "styles/font";

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(90%);
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;
export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 2s;
`;

export const Container = styled.div`
  @media (max-width: 976px) {
    max-width: 960px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  background-color: #fff;
  padding: 20px 40px;
`;

export const LogoImage = styled.img`
  width: 130px;
`;

export const Profile = styled.div`
  @media (min-width: 976px) {
    width: 16rem;
  }
  display: flex;
  align-items: center;
  width: 10rem;
`;

export const UserName = styled.div`
  @media (min-width: 976px) {
    display: flex;
  }
`;

export const Name = styled.p`
  color: ${colors.darkSmoke};
  font-family: ${fonts.CaptionBold};
  font-weight: bold;
  font-size: 12px;
`;

export const Description = styled.p`
  @media (min-width: 976px) {
    margin-left: 0.5rem;
  }

  color: ${colors.darkSmoke};
  font-family: ${fonts.CaptionBold};
  font-weight: 400;
  font-size: 12px;
`;

export const Options = styled.div`
  margin-left: 1rem;
  border: 1px solid ${colors.snow};
  background-color: ${colors.snow};
  border-radius: 4px;
  padding: 5px;
`;

export const Option = styled.p`
  color: ${colors.darkSmoke};
  font-size: 15px;
  font-family: ${fonts.CaptionBold};
  font-weight: bold;
`;

export const Content = styled.section`
  margin-bottom: 100px;
`;

export const ContentWeb = styled.div`
  @media (max-width: 976px) {
    display: none;
  }
`;

export const ContentMobile = styled.div`
  @media (min-width: 976px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  height: 10vh;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
`;
