import { render } from '@testing-library/react';

import Input from './input';

describe('SharedUiInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
});
