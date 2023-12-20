import { Preview } from '@storybook/react';

import { DocsContainer } from './docs-container';
import { StoryWrapper } from './story-wrapper';

const preview: Preview = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: DocsContainer,
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
};

export default preview;
