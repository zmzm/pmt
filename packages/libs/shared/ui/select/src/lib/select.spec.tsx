import { render } from '@testing-library/react';

import { Select } from './select';

describe('SharedUiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Select />);
    expect(baseElement).toBeTruthy();
  });
});
