import { customRender } from '@task-flow/shared/test-utils/render';

import { Loader } from './loader';

describe('Loader', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<Loader />);
    expect(baseElement).toBeTruthy();
  });
});
