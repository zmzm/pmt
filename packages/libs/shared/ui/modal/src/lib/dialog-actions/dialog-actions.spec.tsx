import { render } from '@testing-library/react';

import { DialogActions } from './dialog-actions';

describe('DialogActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogActions>Actions</DialogActions>);
    expect(baseElement).toBeTruthy();
  });
});
