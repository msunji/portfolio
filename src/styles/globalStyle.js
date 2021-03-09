import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // Main colours
    :root {
        --main-bg-color: #e7e7e7;
        --main-text-color: #2A251C;
    }

    *,
    *::before,
    *::after{
        box-sizing: border-box;
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
        font-size: 1.951em;
    }
    h2 {
       font-size: 1.688em;
    }
    h3 {
        font-size: 1.5em;
    }
    h4 {
        font-size: 1.301em;
    }
    h5 {
        font-size: 1.125em;
    }

    p {
        font-size: 1.5rem;
        line-height: 1.6;
        margin-bottom: 1em;
    }

    a {
        color: var(--main-text-color);
    }

    .container {
        width: 100%;
        max-width: 1200px;
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem 2rem 1rem 2rem;
    }
`;

export default GlobalStyle;
