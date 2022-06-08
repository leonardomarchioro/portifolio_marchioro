import styled from "styled-components";
import { primaryColor, secondaryColor, disableColor } from "../../global.Style";

export const ContainerTechs = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    font-size: 16px;
    color: ${primaryColor};
    margin-right: 5px;
  }

  h2 {
    margin: 15px;
  }

  .ListsContainer > ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    > li {
      padding: 3px;
      border-radius: 4px;
      background-color: ${disableColor};
      color: ${secondaryColor};
      margin: 3px;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 768px) {
    .ListsContainer {
      margin: 0 30px;
    }
    .ListsContainer > ul > li {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1024px) {
    .ListsContainer > ul {
      width: 90%;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 80%;
    display: flex;
    align-items: flex-start;
    margin-top: 25px;

    .ListsContainer > ul {
      width: 100%;

      > li {
        font-size: 18px;
      }
    }

    h3 {
      font-size: 22px;
    }
  }
`;
