import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Open Sans", sans-serif;
        @media screen and (max-width: 800px) {
            padding: 10px;  
        }
    }
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    a {
    text-decoration: none;
    color: black;
    }

    * {
    box-sizing: border-box;
    }
`;
