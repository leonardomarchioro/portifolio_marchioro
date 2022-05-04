import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;

  > a {
    color: #00adb5;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  > button {
    background-color: transparent;
    color: #00adb5;
    font-family: "Inter", sans-serif;
    border: transparent;
    font-size: 16px;
    font-weight: 600;
  }
`;
