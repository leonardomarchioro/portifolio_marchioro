import styled from "styled-components";
import {
  backgroundColor,
  primaryColor,
  secondaryColor,
  disableColor,
} from "../../global.Style";

export const Container = styled.div`
  width: 100%;

  .Infos > h1 {
    font-family: "Rubik", sans-serif;
    font-size: 22px;
    color: ${primaryColor};
    text-align: center;
  }

  .Infos > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
  }
  .Infos > div svg {
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  .Img {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Infos > h1 {
      font-size: 30px;
    }

    .Infos {
      position: relative;
      top: 50px;
    }
    .Img {
      display: flex;
      justify-content: center;
      img {
        width: 80%;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;
