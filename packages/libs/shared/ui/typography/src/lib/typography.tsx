import { forwardRef } from 'react';
import JoyTypography, {
  TypographyProps as JoyTypographyProps,
} from '@mui/joy/Typography';
import { Skeleton } from '@task-flow/shared/ui/skeleton';

export interface TypographyProps extends JoyTypographyProps {
  skeleton?: boolean;
  skeletonPlaceholder?: string;
}

export const Typography = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  TypographyProps
>(
  (
    {
      skeleton = false,
      skeletonPlaceholder,
      children,
      ...otherProps
    }: TypographyProps,
    ref
  ) => (
    <JoyTypography ref={ref} {...otherProps}>
      <Skeleton loading={skeleton} variant="inline">
        {skeleton && skeletonPlaceholder ? skeletonPlaceholder : children}
      </Skeleton>
    </JoyTypography>
  )
);
