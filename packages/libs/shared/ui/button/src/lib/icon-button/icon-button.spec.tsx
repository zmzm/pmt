import { render } from '@testing-library/react';

import { IconButton } from './icon-button';

describe('IconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconButton>icon</IconButton>);
    expect(baseElement).toBeTruthy();
  });
});
