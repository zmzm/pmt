import { render } from '@testing-library/react';

import Textarea from './textarea';

describe('SharedUiTextarea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Textarea />);
    expect(baseElement).toBeTruthy();
  });
});
