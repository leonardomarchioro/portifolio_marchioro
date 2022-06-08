import styled from "styled-components";
import { backgroundColor, primaryColor } from "../../global.Style";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  > a {
    padding: 8px;
    width: 115px;
    text-align:center;
    background-color: ${primaryColor};
    color: ${backgroundColor};
    border-radius: 7px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    transition: 0.8s;
    &:hover {
      transform: scale(1.25);
    }
  }

  > button {
    padding: 8px;
    width: 115px;
    background-color: ${primaryColor};
    color: ${backgroundColor};
    border-radius: 7px;
    font-family: "Inter", sans-serif;
    border: transparent;
    font-size: 16px;
    font-weight: 600;
    transition: 0.8s;
    &:hover {
      transform: scale(1.25);
    }
  }
  @media screen and (min-width: 768px) {
    margin: 35px;
  }
`;
