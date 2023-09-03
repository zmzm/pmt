import { render } from '@testing-library/react';

import { SideNav } from './side-nav';

describe('LibsMainFeaturesSideNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideNav />);
    expect(baseElement).toBeTruthy();
  });
});
