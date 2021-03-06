import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // Main colours
    :root {
        --main-bg-color: #E9E2D5;
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

    p {
        font-size: 1.5rem;
        line-height: 1.6;
        margin-bottom: 1em;
    }

    a {
        color: var(--main-text-color);
    }

    .container {
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
