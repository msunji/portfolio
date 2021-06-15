import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // Main colours
    :root {
        --main-bg-color: #f9efdd;
        --main-text-color: #0D443D;
        --primary-red: #E0540F;
        --primary-yellow: #edd219;
        --primary-blue: #2E60A4;
        --primary-pink: #F6C9BE;
        --blob-blue: #1ac4c6;
    }

    *,
    *::before,
    *::after{
        box-sizing: border-box;
    }

    html, body {
        font: 18px/1.5 'Roboto';
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    body {
        background: var(--main-bg-color);
        color: var(--main-text-color);
        font-family: "Work Sans", sans-serif;
        font-weight: 300;
        font-size: 16px;
    }


    h1, h2, h3, h4 {
        font-family: "Sporting Grotesque", serif;
    }
    
    h1 {
        font-size: 5.06em;
        line-height: 1.19em;
        padding-top: 0.253em;
        margin-bottom: 0.0440em;
    }
    
    h2 {
        font-size: 3.39em;
        line-height: 1.33em;
        padding-top: 0.328em;
        margin-bottom: 0.115em;
    }
    
    h3 {
        font-size: 2.28em;
        line-height: 1.32em;
        padding-top: 0.317em;
        margin-bottom: 0.341em;
    }
    
    h4 {
        font-size: 1.50em;
        line-height: 2.00em;
        padding-top: 0.667em;
        margin-bottom: 0.333em;
    }
    
    p {
        font-size: 1.50em;
        line-height: 1.50em;
        padding-top: 0.389em;
        margin-bottom: 1.11em;
    }

    a {
        color: var(--primary-blue);
        text-decoration: none;
        border-bottom: 2px solid var(--primary-red);
    }

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
    }

    section {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .blob {

        &--blue {
            position: absolute;
            fill: var(--blob-blue);
            top: -550px;
            left: -200px;
            z-index: -1;
            min-width: 30rem;
            max-width: 60rem;
        }

    }

    footer {
        border-top: 1px solid brown;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`;

export default GlobalStyle;
