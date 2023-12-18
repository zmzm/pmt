import { render } from '@testing-library/react';

import TopLoader from './top-loader';

describe('SharedUiTopLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopLoader />);
    expect(baseElement).toBeTruthy();
  });
});
