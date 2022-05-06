import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #00adb5;
  > a {
    padding: 8px;
    background-color: #00adb5;
    color: #181818;
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
    background-color: #00adb5;
    color: #181818;
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
