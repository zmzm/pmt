import { render } from '@testing-library/react';

import { Switch } from './joyswitch';

describe('SharedUiSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Switch />);
    expect(baseElement).toBeTruthy();
  });
});
