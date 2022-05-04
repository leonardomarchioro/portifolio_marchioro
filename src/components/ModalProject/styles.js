import styled from "styled-components";

export const ContainerModal = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  z-index: 1;
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #00adb5;
  padding: 0px;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  > header {
    background-color: #393e46;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 17px 17px 0 0;
    margin-bottom: 15px;

    > svg {
      position: relative;
      left: 135px;
      top: 2px;
      color: #eeeeee;
      cursor: pointer;
      transition: 0.8s;
      &:hover {
        transform: scale(1.2);
      }
    }

    > h2 {
      position: relative;
      top: -12px;
      color: #00adb5;
      font-weight: 100;
    }
  }
  > div {
    margin: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .Img {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
      width: 95%;
      border-radius: 4px;
    }
    > a {
      position: relative;
      top: -25px;
      left: 115px;
      color: #00adb5;
      transition: 0.8s;

      &:hover {
        transform: scale(1.25);
      }
    }
  }

  .Infos {
    width: 100%;
    padding: 10px;
    height: 100%;

    > h3 {
      color: #393e46;
      font-weight: 400;
      font-size: 22px;
    }
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > li {
        margin: 3px;
        > span {
          background-color: #393e46;
          color: #eeeeee;
          padding: 3px;
          border-radius: 6px;
          font-size: 14px;
        }
      }
    }
  }
`;
