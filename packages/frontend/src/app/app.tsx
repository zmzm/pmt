import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Dashboard } from './components/Dashboard';
import { TopNavigation } from './components/TopNavigation';

const defaultTheme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div>
        <TopNavigation />
        <main style={{ position: 'relative' }}>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
