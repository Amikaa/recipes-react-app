import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#558b2f',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h3: {
      fontSize: '1rem',
      margin: '1em',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Bradley Hand ITC',
      fontWeight: 'bold',
      fontSize: '2rem',
      margin: '0.5em',
      textAlign: 'center',
    },
    h5: {
      fontFamily: 'Bradley Hand ITC',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    h6: {
      fontFamily: 'Bradley Hand ITC',
      fontSize: '3rem',
    },
    body2: {
      textAlign: 'center',
    }
  },
};
const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
