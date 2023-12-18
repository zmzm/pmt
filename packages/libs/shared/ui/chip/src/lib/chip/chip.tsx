import JoyChip, { ChipProps as JoyChipProps } from '@mui/joy/Chip';
import { Skeleton } from '@task-flow/shared/ui/skeleton';
import { forwardRef } from 'react';
import { SxProps } from '@mui/material';

export interface ChipProps extends JoyChipProps {
  skeleton?: boolean;
  skeletonSx?: SxProps;
  /**
   * If `true` draws a line at the bottom of the component. Color can be optionally defined by `colorCode` property
   */
  underlined?: boolean;
  /**
   * CSS color code to use for line color when `underlined`property is set to `true`
   */
  colorCode?: string;
}

export const Chip = forwardRef<HTMLDivElement | null, ChipProps>(
  ({ skeleton, skeletonSx, ...rest }: ChipProps, ref) =>
    skeleton ? (
      <Skeleton variant="inline" sx={skeletonSx}>
        <JoyChip ref={ref} {...rest} />
      </Skeleton>
    ) : (
      <JoyChip ref={ref} {...rest} />
    )
);
