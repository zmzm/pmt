import { render } from '@testing-library/react';

import { Menu } from '../menu/menu';

import { MenuItem } from './menu-item';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Menu>
        <MenuItem>First menu item</MenuItem>
      </Menu>
    );
    expect(baseElement).toBeTruthy();
  });
});
