import JoyLink, { LinkProps as LinkPropsJoy } from '@mui/joy/Link';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps extends LinkPropsJoy {
  to?: string;
  state?: unknown;
}

export const Link = ({ to, state, ...rest }: LinkProps) =>
  to ? (
    <JoyLink
      component={RouterLink}
      slotProps={{
        root: {
          to,
          state,
        },
      }}
      {...rest}
    />
  ) : (
    <JoyLink {...rest} />
  );
