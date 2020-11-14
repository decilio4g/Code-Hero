import styled from "styled-components";
import { colors } from "styles/colors";
import { fonts } from "styles/font";

export const Container = styled.div`
  @media (max-width: 976px) {
    align-items: center;
  }

  display: flex;
  flex-direction: column;

  #input {
    &::placeholder {
      font-style: italic;
      color: ${colors.smoke};
    }
  }

  .MuiInputBase-root {
    width: 397px;
    height: 32px;
    background: #fff;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #fff;
  }
`;

export const SearchTitle = styled.p`
  @media (max-width: 976px) {
    font-size: 16px;
  }
  padding: 20px 0 10px;
  color: ${colors.darkSmoke};
  font-family: ${fonts.CaptionBold};
  font-weight: bold;
`;
