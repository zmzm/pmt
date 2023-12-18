import IconButton from '@mui/joy/IconButton';
import { useColorScheme as useJoyColorScheme } from '@mui/joy/styles';
import { useColorScheme as useMaterialColorScheme } from '@mui/material/styles';
import { DarkMode, LightMode } from '@mui/icons-material';

const DARK = 'dark';
const LIGHT = 'light';

export const ModeToggle = () => {
  const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();

  return (
    <IconButton
      onClick={() => {
        setMaterialMode(mode === DARK ? LIGHT : DARK);
        setJoyMode(mode === DARK ? LIGHT : DARK);
      }}
    >
      {mode === DARK ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};
