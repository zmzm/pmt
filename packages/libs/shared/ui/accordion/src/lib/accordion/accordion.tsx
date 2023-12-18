import JoyAccordion, { AccordionProps } from '@mui/joy/Accordion';

export const Accordion = ({ children, ...rest }: AccordionProps) => (
  <JoyAccordion {...rest}>{children}</JoyAccordion>
);
