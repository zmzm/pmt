import { render } from '@testing-library/react';

import { ListItemContent } from './list-item-content';

describe('ListItemContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItemContent />);
    expect(baseElement).toBeTruthy();
  });
});
