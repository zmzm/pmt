import { render } from '@testing-library/react';

import { ListDivider } from './list-divider';

describe('ListDivider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListDivider />);
    expect(baseElement).toBeTruthy();
  });
});
