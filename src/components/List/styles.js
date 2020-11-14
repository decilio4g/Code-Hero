import styled from "styled-components";
import { colors } from "styles/colors";
import { fonts } from "styles/font";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContentList = styled.li`
  @media (max-width: 976px) {
    grid-template-columns: 1fr;
  }
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "IN SE EV";

  width: 90%;
  min-height: 90px;

  background-color: #fff;
  margin: 5px 0;
  box-shadow: 0px 1px 7px 3px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 1px 7px 3px rgba(0, 0, 0, 0.22);
  }
`;

export const Image = styled.img`
  margin-left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 4px;
`;

export const Name = styled.p`
  margin: 0 35px;

  color: ${colors.darkSmoke};
  font-family: ${fonts.PtSans}, sans-serif;
  font-weight: bold;
`;

export const Series = styled.div`
  @media (max-width: 976px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Item = styled.div``;

export const ItemText = styled.p`
  color: ${colors.darkSmoke};
  font-family: ${fonts.PtSans}, sans-serif;
  font-weight: 400;
`;

export const Event = styled.div`
  @media (max-width: 976px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: ${colors.smoke};
  font-size: 13px;
  font-family: ${fonts.PtSans}, sans-serif;
  font-weight: 400;
`;

export const ContainerCharacter = styled.div`
  @media (max-width: 976px) {
    #series {
      display: none;
    }

    #event {
      display: none;
    }

    #character {
      position: absolute;
      bottom: 110px;
      left: 140px;
    }
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "CH SE EV";

  width: 90%;

  #series {
    grid-area: EV;
  }

  #event {
    grid-area: SE;
  }

  #character {
    grid-area: CH;
  }
`;

export const ContentNameImage = styled.div`
  display: flex;
  align-items: center;
  grid-area: IN;
`;

export const ContentEvent = styled.div`
  display: flex;
  align-items: center;
  grid-area: EV;
`;

export const ContentSeries = styled.div`
  display: flex;
  align-items: center;
  grid-area: SE;
`;
