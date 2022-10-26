import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/globalStore.styles.js';
import globalVariables from './components/styles/globalVariables.js';
import "./components/styles/googlefonts.css";
import { Provider } from "react-redux";
import store from "./redux/store";



const theme = {
  ...globalVariables,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
);