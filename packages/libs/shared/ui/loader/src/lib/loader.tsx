import { Stack } from '@task-flow/shared/ui/stack';

import { LoaderItem, LoaderContent } from './styled';

export interface LoaderProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

export const Loader = ({ width, height, color }: LoaderProps) => {
  return (
    <Stack
      data-testid="loader"
      alignItems="center"
      justifyContent="center"
      position="relative"
      style={{ width, height }}
    >
      <LoaderContent>
        <LoaderItem style={{ background: color }}></LoaderItem>
        <LoaderItem style={{ background: color }}></LoaderItem>
        <LoaderItem style={{ background: color }}></LoaderItem>
      </LoaderContent>
    </Stack>
  );
};
