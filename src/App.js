import './assets/styles/App.css';
import * as React from 'react';
import Form from './components/Form.js'
import TodoList from './components/TodoList'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material/';
import { grey, indigo } from '@mui/material/colors'



function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: indigo,
          divider: indigo[700],
          background: {
            default: '#0a1929',
            paper: '#1a2027',
          },
          text: {
            primary: '#8bafd0',
            secondary: grey[500],
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h1>Todo</h1>
        <Form />

        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
