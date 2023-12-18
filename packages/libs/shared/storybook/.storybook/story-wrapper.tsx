import { ReactElement, useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { useColorScheme } from '@mui/joy';
import { useColorScheme as useColorSchemeMaterial } from '@mui/material';
import { MuiProvider } from '@task-flow/shared/providers/mui';

export const useStorybookThemeMode = () => (useDarkMode() ? 'dark' : 'light');

interface Props {
  children: ReactElement;
}

const ColorSchemeProvider = ({ children }: Props) => {
  const { setMode } = useColorScheme();
  const { setMode: setModeMaterial } = useColorSchemeMaterial();
  const mode = useStorybookThemeMode();

  useEffect(() => {
    setMode(mode);
    setModeMaterial(mode);
  }, [mode, setMode, setModeMaterial]);

  return children;
};

export const StoryWrapper = ({ children }: Props) => (
  <MuiProvider>
    <ColorSchemeProvider>{children}</ColorSchemeProvider>
  </MuiProvider>
);
