import { ReactNode } from 'react';
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
  experimental_extendTheme as materialExtendTheme,
} from '@mui/material/styles';
import {
  CssVarsProvider as JoyCssVarsProvider,
  extendTheme,
  extendTheme as joyExtendTheme,
} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { GlobalAppStyles } from '@task-flow/shared/ui/global-app-styles';
import { JoyTheme } from '@task-flow/shared/themes/joy';

export interface MuiProviderProps {
  children: ReactNode;
  includeCssBaseline?: boolean;
  materialTheme?: ReturnType<typeof materialExtendTheme>;
  joyTheme?: ReturnType<typeof joyExtendTheme>;
  defaultMode?: 'light' | 'dark' | 'system';
}

export function MuiProvider({
  children,
  includeCssBaseline = true,
  materialTheme = materialExtendTheme(),
  joyTheme = JoyTheme,
  defaultMode = 'system',
}: MuiProviderProps) {
  return (
    <MaterialCssVarsProvider
      theme={{ [MATERIAL_THEME_ID]: materialTheme }}
      defaultMode={defaultMode}
    >
      <JoyCssVarsProvider theme={joyTheme} defaultMode={defaultMode}>
        {includeCssBaseline && <CssBaseline />}
        <GlobalAppStyles />
        {children}
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
