import styled from "styled-components";
import {
  backgroundColor,
  primaryColor,
  secondaryColor,
} from "../../global.Style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${backgroundColor};
  width: 100%;
  height: auto;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    > svg {
      margin: 5px;
      color: ${secondaryColor};
      transition: 0.8s;
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        transform: scale(1.2);
        color: ${backgroundColor};
        background-color: ${secondaryColor};
      }
    }
  }
  h1 {
    font-size: 30px;
    color: ${primaryColor};
  }
  @media screen and (min-width: 768px) {
    height: 100%;

    h1 {
      width: 80%;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: auto;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    width: 80%;
    height: 85%;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media screen and (min-width: 1024px) {
    width: 895px;
    height: 500px;
  }
`;
