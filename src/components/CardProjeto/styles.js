import styled from "styled-components";

export const Container = styled.div`
  background-color: #393e46;
  padding: 15px;
  border-radius: 6px;
  width: 250px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  > h2 {
    width: 100%;
    color: #00adb5;
    font-weight: 200;
    margin-bottom: 5px;
  }
  > div > img {
    width: 200px;
    border-radius: 4px;
  }
  @media screen and (min-width: 1024px) {
    transition: 0.5s;
    margin: 20px;
    &:hover {
      transform: scale(1.25);
      cursor: pointer;
    }
  }
`;
