import { ReactElement } from 'react';
import {
  DocsContainer as BaseContainer,
  DocsContextProps,
} from '@storybook/addon-docs';
import { themes } from '@storybook/theming';

import { StoryWrapper, useStorybookThemeMode } from './story-wrapper';

export interface DocsContainerProps {
  children: ReactElement;
  context: DocsContextProps;
}

export const DocsContainer = ({ children, context }: DocsContainerProps) => {
  const mode = useStorybookThemeMode();

  return (
    <BaseContainer context={context} theme={themes[mode]}>
      <StoryWrapper>{children}</StoryWrapper>
    </BaseContainer>
  );
};
