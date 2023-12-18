import { forwardRef } from 'react';
import JoyButton, { ButtonProps as JoyButtonProps } from '@mui/joy/Button';
import { Skeleton } from '@task-flow/shared/ui/skeleton';

export interface ButtonProps extends JoyButtonProps {
  label?: string;
  href?: string;
  skeleton?: boolean;
  skeletonPlaceholder?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label, children, skeleton, skeletonPlaceholder, ...rest }: ButtonProps,
    ref
  ) =>
    skeleton ? (
      <JoyButton
        {...rest}
        ref={ref}
        disabled
        loading={false}
        className="skeleton"
      >
        {skeletonPlaceholder ? skeletonPlaceholder : [label, children]}
        <Skeleton overlay />
      </JoyButton>
    ) : (
      <JoyButton ref={ref} {...rest}>
        {[label, children]}
      </JoyButton>
    )
);
// @ts-expect-error: internal logic for ToggleButtonGroup
Button.muiName = 'Button';
