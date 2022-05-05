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
  background-color: #00adb5;
  padding: 0px;
  width: 300px;
  height: 250px;
  border-radius: 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #393e46;
    border-radius: 17px 17px 0 0;
    flex-direction: column-reverse;

    > h2 {
      color: #eeeeee;
      position: relative;
      top: -12px;
      font-size: 16px;
      font-weight: 500;
    }
    > svg {
      position: relative;
      left: 134px;
      cursor: pointer;
      color: #eeeeee;
      transition: 0.8s;
      border-radius: 50%;
      &:hover {
        transform: scale(1.2);
        color: #2c3333;
        background-color: #eeeeee;
      }
    }
  }

  > ul {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    > li {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      svg {
        margin-right: 5px;
      }
      a {
        color: #222831;
        transition: 0.8s;
        display: flex;
        align-items: center;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
