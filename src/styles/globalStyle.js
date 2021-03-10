import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // Main colours
    :root {
        --main-bg-color: #F3EFE3;
        --main-text-color: #0D443D;
        --primary-red: #E0540F;
        --primary-yellow: #edd219;
        --primary-blue: #2E60A4;
        --primary-pink: #F6C9BE;
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
        color: var(--primary-blue);
        text-decoration: none;
        border-bottom: 2px solid var(--primary-red);
    }

    .boxLink {
        padding: 1rem 2rem 1rem 2rem;
        border: 2px solid var(--primary-blue);
        box-shadow: 5px 5px var(--primary-blue);
        background: linear-gradient(to left top, white 50%, var(--primary-yellow) 50%);
        background-size: 200% 200%;
        background-position: bottom right;
        transition: all 0.5s ease-in-out;

        &:hover {
            background-position: top left;
        }
    }

    .container {
        width: 90%;
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
