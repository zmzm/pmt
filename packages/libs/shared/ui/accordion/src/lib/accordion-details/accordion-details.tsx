import JoyAccordionDetails, {
  AccordionDetailsProps,
} from '@mui/joy/AccordionDetails';

export const AccordionDetails = ({
  children,
  ...rest
}: AccordionDetailsProps) => (
  <JoyAccordionDetails {...rest}>{children}</JoyAccordionDetails>
);
