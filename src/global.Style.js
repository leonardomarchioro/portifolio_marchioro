import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    button {
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    body{
        width: 100vw;
        height: 100vh;
        background-color: #1F0441;

    }   
    #root{
        width: 100%;
        height:100%;
    }
    h1, h2 {
        font-family: 'Rubik', sans-serif;
        color: #FC1068;
        font-size: 25px;
    }
    
    h3, h4, h5, h6{
        font-family: 'Rubik', sans-serif;
        color: #FFFFFF;
        font-size: 25px;
    }
    p, span, li{
        font-family: 'Rubik', sans-serif;
        color: #FFFFFF;
    }
    li {
        list-style: none;
    }
    *::-webkit-scrollbar {
  display: none;
}


`;

export const backgroundColor = "#1F0441";
export const primaryColor = "#FC1068";
export const secondaryColor = "#FFFFFF";
export const disableColor = "#3F3D56";
