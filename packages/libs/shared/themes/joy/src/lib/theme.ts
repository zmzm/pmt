import { extendTheme, Theme } from '@mui/joy/styles';

import { components } from './components/components';
import { colorSchemes } from './color-schemes';
import { typography } from './typography';
import { fontWeight } from './font-weight';
import { fontSize } from './font-size';
import { lineHeight } from './line-height';
import { radius } from './radius';

export const CustomTheme = {
  spacing: 4,
  components,
  colorSchemes,
  typography,
  fontWeight,
  fontSize,
  lineHeight,
  radius,
};

export const JoyTheme = extendTheme(CustomTheme) as Theme & typeof CustomTheme;
