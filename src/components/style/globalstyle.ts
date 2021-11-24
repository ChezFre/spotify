import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    :root {
        --spotify-black: 25, 20, 20;
        --spotify-brand: 29, 185, 84;
        --spotify-white: 255 255 255;

        --text-color: rgb(var(--spotify-white));
        --body-bg: rgb(var(--spotify-black));

        --z-index-1: 10;
        --z-index-2: 20;
        --z-index-3: 30;
        --z-index-4: 40;
        --z-index-5: 50;
        --z-index-6: 60;
        --z-index-7: 70;
        --z-index-8: 80;
        --z-index-9: 90;
        --z-index-10: 100;

        --spacing-base: 4px;
        --spacing-1: var(--spacing-base);
        --spacing-2: calc(var(--spacing-base) * 2);
        --spacing-3: calc(var(--spacing-base) * 3);
        --spacing-4: calc(var(--spacing-base) * 4);
        --spacing-5: calc(var(--spacing-base) * 5);
        --spacing-6: calc(var(--spacing-base) * 6);
        --spacing-7: calc(var(--spacing-base) * 7);
        --spacing-8: calc(var(--spacing-base) * 8);
        --spacing-9: calc(var(--spacing-base) * 9);
        --spacing-10: calc(var(--spacing-base) * 10);
        --spacing-11: calc(var(--spacing-base) * 11);
        --spacing-12: calc(var(--spacing-base) * 12);
        --spacing-13: calc(var(--spacing-base) * 13);
        --spacing-14: calc(var(--spacing-base) * 14);
        --spacing-15: calc(var(--spacing-base) * 15);
        --spacing-16: calc(var(--spacing-base) * 16);
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
  
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        color: var(--text-color);
        background-color: var(--body-bg);

        font-size: 1.6rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input {
        font-size: inherit;
        font-family: inherit;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: min-content 1fr;
        gap: var(--spacing-10);
    }
`;

export default GlobalStyle;
