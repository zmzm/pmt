import { render } from '@testing-library/react';

import { ListItemDecorator } from './list-item-decorator';

describe('ListItemDecorator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItemDecorator />);
    expect(baseElement).toBeTruthy();
  });
});
