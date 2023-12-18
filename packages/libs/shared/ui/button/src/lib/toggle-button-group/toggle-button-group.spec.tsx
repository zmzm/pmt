import { render } from '@testing-library/react';

import { Button } from '../button/button';

import { ToggleButtonGroup } from './toggle-button-group';

describe('ToggleButtonGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ToggleButtonGroup>
        <Button value="Button 1" />
        <Button value="Button 2" />
        <Button value="Button 3" />
      </ToggleButtonGroup>
    );
    expect(baseElement).toBeTruthy();
  });
});
