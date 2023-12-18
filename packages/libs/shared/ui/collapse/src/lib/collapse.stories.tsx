import { Box } from '@task-flow/shared/ui/box';
import { useState } from 'react';
import { Switch } from '@task-flow/shared/ui/switch';
import { Card } from '@task-flow/shared/ui/card';
import { Typography } from '@task-flow/shared/ui/typography';

import { Collapse } from './collapse';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: 'Transition/Collapse',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Collapse>;

const recipe = (
  <Card>
    <Typography>Shrimp and Chorizo Paella recipe:</Typography>
    <Typography>
      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
      aside for 10 minutes.
    </Typography>
    <Typography>
      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
      large plate and set aside, leaving chicken and chorizo in the pan. Add
      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
      stirring often until thickened and fragrant, about 10 minutes. Add saffron
      broth and remaining 4 1/2 cups chicken broth; bring to a boil.
    </Typography>
    <Typography>
      Add rice and stir very gently to distribute. Top with artichokes and
      peppers, and cook without stirring, until most of the liquid is absorbed,
      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
      mussels, tucking them down into the rice, and cook again without stirring,
      until mussels have opened and rice is just tender, 5 to 7 minutes more.
      (Discard any mussels that don&apos;t open.)
    </Typography>
    <Typography>
      Set aside off of the heat to let rest for 10 minutes, and then serve.
    </Typography>
  </Card>
);

function SimpleCollapse() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <Box display="flex">
        <Switch checked={checked} onChange={handleChange} />
        <Typography sx={{ px: 2 }}>Show</Typography>
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography sx={{ py: 4 }}>Collapsed recipe</Typography>
        <Collapse in={checked} collapsedSize={40}>
          {recipe}
        </Collapse>
      </Box>
    </Box>
  );
}

export const Primary: Story = {
  render: () => <SimpleCollapse />,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Collapse component is a way to hide and reveal content on a web page using a smooth transition.',
      },
    },
  },
};
