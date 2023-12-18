import { render } from '@testing-library/react';

import { CardOverflow } from './card-overflow';

describe('CardOverflow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardOverflow />);
    expect(baseElement).toBeTruthy();
  });
});
