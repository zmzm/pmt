import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Routes } from '../routes/routes';

const defaultTheme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
