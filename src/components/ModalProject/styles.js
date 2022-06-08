import styled from "styled-components";
import {
  backgroundColor,
  primaryColor,
  secondaryColor,
  disableColor,
} from "../../global.Style";

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
  background-color: ${backgroundColor};
  padding: 0px;
  width: 300px;
  height: auto;
  border-radius: 20px;
  > header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 17px 17px 0 0;
    margin-bottom: 15px;

    > svg {
      position: relative;
      left: 135px;
      top: -4px;
      color: ${secondaryColor};
      cursor: pointer;
      transition: 0.8s;
      &:hover {
        transform: scale(1.2);
      }
    }

    > h2 {
      position: relative;
      top: -12px;
      color: ${primaryColor};
      font-weight: 100;
    }
  }
  .Infos {
    margin: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .Links {
    width: 80%;
    display: flex;
    justify-content: space-around;
    a > img {
      width: 35px;
      transition: 0.8s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .Sobre {
    height: auto;

    margin-bottom: 15px;
    p {
      margin-bottom: 25px;
      text-align: justify;
    }
  }

  .ListTechs {
    width: 100%;
    padding: 10px;
    height: 100%;

    > h3 {
      color: ${primaryColor};
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 5px;
    }
    ul {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      align-content: flex-start;
      > li {
        margin: 3px;
        > span {
          background-color: ${disableColor};
          color: ${secondaryColor};
          padding: 3px;
          border-radius: 6px;
          font-size: 14px;
        }
      }
    }
  }
`;
