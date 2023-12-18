import { render } from '@testing-library/react';

import { ModalClose } from './modal-close';

describe('ModalClose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalClose />);
    expect(baseElement).toBeTruthy();
  });
});
