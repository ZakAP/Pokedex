import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: ${({theme: {colors}})=> colors.primary};
        --secundary: ${({theme: {colors}})=> colors.secundary};

        --background: ${({theme: {colors}})=> colors.background};
        --font: ${({theme: {colors}})=> colors.font};

        --red: ${({theme: {colors}})=> colors.red};
        --orange: ${({theme: {colors}})=> colors.orange};
        --yellow: ${({theme: {colors}})=> colors.yellow};
        --black: ${({theme: {colors}})=> colors.black};
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
   
    body, input, textarea, button {
        font-family: 'Cabin', sans-serif;
        font-weight: 400;
    }

    h1, h2 {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`