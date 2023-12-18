import JoyTypography, {
  TypographyProps as JoyTypographyProps,
} from '@mui/joy/Typography';

export function DialogDescription(props: JoyTypographyProps) {
  return (
    <JoyTypography textAlign="center" variant="plain" fontSize="md" {...props}>
      {props.children}
    </JoyTypography>
  );
}
