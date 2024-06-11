import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/index.tsx'
import '@/assets/css/index.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

// declare module "@mui/material/styles" {
//   interface Theme {
//     palette: {
//       light: string;
//       main: string;
//       dark: string;
//       contrastText: string;
//     };
//   }
// }
  const theme = createTheme({
    palette: {
      primary: {
        light: "#CFFAFA",
        main: "#5ACCCC",
        dark: "#28B8B8",
        contrastText: "#FFFFFF",
      },
      warning: {
        light: "#FABD33",
        main: "#FABD33",
        dark: "#FAAD00",
        contrastText: "#FFFFFF",
      },
    },
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
