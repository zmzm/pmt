import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { AppLayout } from '@pmt/main/layouts/app';
import { Dashboard } from './components/Dashboard';

const defaultTheme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div>
        <AppLayout />
        <main style={{ position: 'relative' }}>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
