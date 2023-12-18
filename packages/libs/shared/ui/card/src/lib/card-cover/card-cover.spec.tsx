import { render } from '@testing-library/react';

import { CardCover } from './card-cover';

describe('CardCover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardCover />);
    expect(baseElement).toBeTruthy();
  });
});
