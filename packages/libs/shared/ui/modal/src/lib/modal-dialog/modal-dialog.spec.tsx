import { render } from '@testing-library/react';

import { ModalDialog } from './modal-dialog';

describe('ModalDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalDialog />);
    expect(baseElement).toBeTruthy();
  });
});
