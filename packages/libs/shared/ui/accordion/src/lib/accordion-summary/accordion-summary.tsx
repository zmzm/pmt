import JoyAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/joy/AccordionSummary';

export const AccordionSummary = ({
  children,
  ...rest
}: AccordionSummaryProps) => (
  <JoyAccordionSummary {...rest}>{children}</JoyAccordionSummary>
);
