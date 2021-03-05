import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // Main colours
    :root {
        --main-bg-color: #F4EFE1;
        --main-text-color: #2B230D;
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
        line-height: 1.2;
    }
`;

export default GlobalStyle;
