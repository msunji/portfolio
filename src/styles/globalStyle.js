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
        font-size: 2rem;
        line-height: 1.0;
    }
`;

export default GlobalStyle;
