import { Accordion } from './accordion/accordion';
import { AccordionGroup } from './accordion-group/accordion-group';
import { AccordionDetails } from './accordion-details/accordion-details';
import { AccordionSummary } from './accordion-summary/accordion-summary';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AccordionGroup> = {
  component: AccordionGroup,
  title: 'Surfaces/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Accordions let users show and hide sections of related content on a page.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AccordionGroup>;

export const Primary: Story = {
  render: (args) => (
    <AccordionGroup color="primary" variant="plain" {...args}>
      <Accordion>
        <AccordionSummary>First Header</AccordionSummary>
        <AccordionDetails>Content of First Header</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Second Header</AccordionSummary>
        <AccordionDetails>Content of Second Header</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Third Header</AccordionSummary>
        <AccordionDetails>Content of Third Header</AccordionDetails>
      </Accordion>
    </AccordionGroup>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `Use transition prop to animate the expansion. The value can be a string if you want the transition to be the same for initial and expanded states, or an object if you want to customize the transition for each state.`,
      },
    },
  },
};
