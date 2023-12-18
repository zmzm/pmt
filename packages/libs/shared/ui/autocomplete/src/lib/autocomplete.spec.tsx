import { render } from '@testing-library/react';

import Autocomplete from './autocomplete';

describe('SharedUiAutocomplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Autocomplete options={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
