import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
    body{
      background-color: #1A1D23;
      color: #F8F8F8;
    }
    body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    //max-width
    .box{
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .utterances{
        max-width: 720px;
    }
`;
