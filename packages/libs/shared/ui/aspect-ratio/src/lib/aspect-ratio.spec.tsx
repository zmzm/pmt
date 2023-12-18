import { render } from '@testing-library/react';

import { AspectRatio } from './aspect-ratio';

describe('AspectRatio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AspectRatio />);
    expect(baseElement).toBeTruthy();
  });
});
