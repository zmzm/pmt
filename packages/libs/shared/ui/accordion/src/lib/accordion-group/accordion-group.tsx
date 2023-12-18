import JoyAccordionGroup, {
  AccordionGroupProps,
} from '@mui/joy/AccordionGroup';

export const AccordionGroup = ({ children, ...rest }: AccordionGroupProps) => (
  <JoyAccordionGroup {...rest}>{children}</JoyAccordionGroup>
);
