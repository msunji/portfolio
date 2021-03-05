import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // Main colours
    :root {
        --main-bg-color: #F4EFE1;
    }

    body {
        background: var(--main-bg-color);
    }

`;

export default GlobalStyle;
