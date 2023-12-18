import { render } from '@testing-library/react';

import { ModalOverflow } from './modal-overflow';

describe('ModalOverflow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalOverflow />);
    expect(baseElement).toBeTruthy();
  });
});
