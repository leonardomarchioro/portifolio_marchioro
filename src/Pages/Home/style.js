import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2c3333;
  width: 100%;
  height: auto;

  > header {
    margin: 20px;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    overflow: hidden;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
`;
