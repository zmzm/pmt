import { render } from '@testing-library/react';

import { ChipDelete } from './chip-delete';

describe('ChipDelete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChipDelete />);
    expect(baseElement).toBeTruthy();
  });
});
