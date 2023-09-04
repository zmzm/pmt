import { render } from '@testing-library/react';

import LibsMainLayoutsApp from './app-layout';

describe('LibsMainLayoutsApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsMainLayoutsApp />);
    expect(baseElement).toBeTruthy();
  });
});
