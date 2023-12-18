import { render } from '@testing-library/react';

import { DialogContent } from './dialog-content';

describe('DialogContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogContent>Content</DialogContent>);
    expect(baseElement).toBeTruthy();
  });
});
