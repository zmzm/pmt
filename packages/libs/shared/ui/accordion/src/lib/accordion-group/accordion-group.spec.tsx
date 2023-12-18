import { render } from '@testing-library/react';

import { AccordionGroup } from './accordion-group';

describe('AccordionGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccordionGroup />);
    expect(baseElement).toBeTruthy();
  });
});
