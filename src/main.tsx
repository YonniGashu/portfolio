import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
    primaryColor: "violet",
    primaryShade: 9
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider theme={theme}
  defaultColorScheme='dark'>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MantineProvider>
);
