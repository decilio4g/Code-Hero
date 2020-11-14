import styled from "styled-components";
import { colors } from "styles/colors";
import { fonts } from "styles/font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const NameCharacter = styled.p`
  font-size: 24px;
  color: ${colors.darkSmoke};
  font-family: ${fonts.CaptionBold};
  font-weight: bold;
`;

export const Image = styled.img`
  width: 200px;

  border-radius: 4px;
  margin: 50px 0;
  transition: all 0.7s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.smoke};
  font-family: ${fonts.PtSans};
  font-weight: 400;

  margin: 0 100px;
`;

export const Button = styled.button`
  width: 250px;
  height: 40px;
  color: ${colors.darkBlue};

  border: none;
  border-radius: 4px;

  font-family: ${fonts.CaptionBold};
  font-weight: bold;

  &:hover {
    background-color: ${colors.darkBlue};
    color: #fff;
  }
`;

export const Footer = styled.footer``;

export const ContentCenter = styled.div``;

export const ListItem = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  list-style: none;
  margin: 10px 0;
  color: ${colors.darkSmoke};
  font-family: ${fonts.PtSans};
`;

export const Title = styled.h2``;
