import styled from "styled-components";
import {
  backgroundColor,
  primaryColor,
  secondaryColor,
  disableColor,
} from "../../global.Style";

export const Container = styled.div`
  margin-top: 25px;

  h2 {
    font-size: 20px;
    margin-left: 15px;
  }
  p {
    margin: 10px 29px;
    text-align: justify;
    color: ${secondaryColor};
    line-height: 1.3;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;

export const ContainerTechs = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    font-size: 16px;
    color: ${primaryColor};
  }

  h2 {
    margin: 15px;
  }

  > ul {
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
  @media screen and (min-width: 1024px) {
    > ul {
      width: 90%;
    }
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    > ul {
      width: 75%;
    }
    h3 {
      width: 100%;
    }
    span {
      width: 100%;
    }
  }
`;
