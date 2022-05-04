import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > .Infos > h1 {
    font-family: "Rubik", sans-serif;
    font-size: 30px;
    color: #00adb5;
  }

  > .Infos > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
  }
  > .Img {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > .Img {
      display: flex;
      img {
        width: 100%;
      }
    }
  }
`;
