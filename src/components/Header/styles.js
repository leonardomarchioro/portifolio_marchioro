import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;

  > a {
    color: #00adb5;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    transition: 0.8s;
    &:hover {
      transform: scale(1.25);
    }
  }

  > button {
    background-color: transparent;
    color: #00adb5;
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
