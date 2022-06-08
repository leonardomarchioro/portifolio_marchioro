import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  header {
    margin: 20px;
  }

  @media screen and (min-width: 1440px) {
    align-items: center;

    header {
      width: 60%;
      align-items: center;
      justify-content: flex-end;
      gap: 70px;
    }

    .Desktop {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 80%;
      height: 450px;
    }
  }
`;
