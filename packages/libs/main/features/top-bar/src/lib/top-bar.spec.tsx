import { render } from '@testing-library/react';

import { TopBar } from './top-bar';

describe('LibsMainFeaturesTopBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopBar />);
    expect(baseElement).toBeTruthy();
  });
});
