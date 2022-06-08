import styled from "styled-components";
import { secondaryColor } from "../../global.Style";

export const Container = styled.div`
  margin-top: 25px;

  h2 {
    font-size: 20px;
    margin-left: 15px;
  }
  p {
    margin: 10px 29px;
    text-align: justify;
    color: ${secondaryColor};
    line-height: 1.3;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
      margin: 25px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 900px;
    display: flex;
    justify-content: flex-start;

    h2 {
      font-size: 28px;
    }
    p {
      font-size: 20px;
      line-height: 1.3;
    }
  }
`;
