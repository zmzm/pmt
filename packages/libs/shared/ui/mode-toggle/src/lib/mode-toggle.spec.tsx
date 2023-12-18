import { customRender } from '@task-flow/shared/test-utils/render';

import { ModeToggle } from './mode-toggle';

describe('ModeToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<ModeToggle />);
    expect(baseElement).toBeTruthy();
  });
});
