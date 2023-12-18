import { render } from '@testing-library/react';

import { Menu } from '../menu/menu';

import { MenuButton } from './menu-button';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Menu>
        <MenuButton>First menu item</MenuButton>
      </Menu>
    );
    expect(baseElement).toBeTruthy();
  });
});
