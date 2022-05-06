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
        background-color: #181818;

    }   
    #root{
        width: 100%;
        height:100%;
    }
    h1, h2, h3, h4, h5, h6{
        font-family: 'Rubik', sans-serif;
        color: #037bbd;
        font-size: 25px;
    }
    p, span, li{
        font-family: 'Rubik', sans-serif;
        color: #95b3dc;
    }
    li {
        list-style: none;
    }

`;
