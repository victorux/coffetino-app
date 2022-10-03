import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/globalStore.styles.js';
import globalVariables from './components/styles/globalVariables.js';
import "./components/styles/googlefonts.css";



const theme = {
  ...globalVariables,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
);