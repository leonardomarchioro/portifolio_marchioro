import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    color: #00adb5;
  }
  > p {
    margin-bottom: 10px;
    color: #eeeeee;
    line-height: 1.3;
  }
  > div {
    > h3 {
      color: #00adb5;
    }
    > span {
      font-size: 12px;
      color: #00adb5;
    }
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
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: space-around;
    width: 100%;
    height: 190px;
    > li {
      background-color: #00adb5;
      padding: 3px;
      border-radius: 4px;
      color: #393e46;
      margin: 3px;
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
