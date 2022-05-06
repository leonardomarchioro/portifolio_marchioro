import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181818;
  width: 100%;
  height: auto;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    > svg {
      margin: 5px;
      color: #eeeeee;
      transition: 0.8s;
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        transform: scale(1.2);
        color: #181818;
        background-color: #eeeeee;
      }
    }
  }
  h1 {
    font-size: 30px;
    color: #00adb5;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: auto;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    width: 80%;
    height: 85%;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media screen and (min-width: 1024px) {
    width: 895px;
    height: 500px;
  }
`;
