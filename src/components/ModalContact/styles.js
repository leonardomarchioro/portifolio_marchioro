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
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00adb5;
  padding: 0px;
  width: 300px;
  height: 250px;
  border-radius: 4px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #393e46;
    border-radius: 4px 4px 0 0;
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
      }
    }
  }
`;
