import GlobalStyles from '@mui/joy/GlobalStyles';

export function GlobalAppStyles() {
  return (
    <GlobalStyles
      styles={{
        [`&::-webkit-scrollbar`]: {
          width: '2px',
          height: '2px',
        },
        [`&::-webkit-scrollbar-track`]: {
          backgroundColor: `var(--joy-palette-primary-softBg)`,
        },
        [`&::-webkit-scrollbar-thumb`]: {
          WebkitBoxShadow: `inset 0 0 6px var(--joy-palette-primary-outlinedColor)`,
        },
      }}
    />
  );
}
