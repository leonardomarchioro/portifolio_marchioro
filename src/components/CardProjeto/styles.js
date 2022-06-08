import styled from "styled-components";

import { disableColor, primaryColor } from "../../global.Style";

export const Container = styled.div`
  background-color: ${disableColor};
  padding: 15px;
  border-radius: 6px;
  width: 250px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  > h2 {
    font-size: 22px;
    width: 100%;
    color: ${primaryColor};
    font-weight: 200;
    margin-bottom: 5px;
  }
  > div > img {
    width: 200px;
    height: 115px;
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
