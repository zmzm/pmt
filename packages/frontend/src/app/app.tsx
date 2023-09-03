import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { TopBar } from '@pmt/main/features/top-bar';
import { Dashboard } from './components/Dashboard';

const defaultTheme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div>
        <TopBar />
        <main style={{ position: 'relative' }}>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
