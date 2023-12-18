import { render } from '@testing-library/react';

import { Popper } from './popper';

describe('Popper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Popper open={false} />);
    expect(baseElement).toBeTruthy();
  });
});
