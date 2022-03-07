import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --black: #1a1a1a;
    --darkGray: #404040;
}
h1 {
    font-family: 'Noto Sans', sans-serif;
}

body {
    padding:0;
    margin:0;
    font-family: 'Open Sans', sans-serif;
}
a {
    color: inherit;
    text-decoration:none;
}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyles;
