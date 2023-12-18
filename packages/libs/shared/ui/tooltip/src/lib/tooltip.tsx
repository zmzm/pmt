import JoyTooltip, { TooltipProps as JoyTooltipProps } from '@mui/joy/Tooltip';

export type TooltipProps = JoyTooltipProps;
export const Tooltip = ({ children, ...rest }: TooltipProps) => (
  <JoyTooltip {...rest}>{children}</JoyTooltip>
);
