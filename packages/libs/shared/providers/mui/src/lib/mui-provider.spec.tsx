import { render, screen } from '@testing-library/react';

import { MuiProvider } from './mui-provider';

describe('MuiProvider', () => {
  it('should render the children', () => {
    const { baseElement } = render(<MuiProvider>Hello World</MuiProvider>);
    expect(baseElement).toBeTruthy();
    expect(screen.findByText('Hello World')).toBeTruthy();
  });
});
