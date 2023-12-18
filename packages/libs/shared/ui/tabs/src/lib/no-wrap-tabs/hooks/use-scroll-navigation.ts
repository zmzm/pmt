import { useCallback, useRef, useState } from 'react';

import { getLeftElementToScroll } from '../utils/get-left-element-to-scroll';
import { getRightElementToScroll } from '../utils/get-right-element-to-scroll';

export function useScrollNavigation() {
  const [isScrollLeftEnabled, setScrollLeftEnabled] = useState<boolean>(false);
  const [isScrollRightEnabled, setScrollRightEnabled] =
    useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const container: HTMLElement = ref.current?.children[0] as HTMLElement;

  const handleScrollLeft = useCallback(() => {
    if (container) {
      const { element: childToScroll, canScrollFurther } =
        getLeftElementToScroll(container);
      if (childToScroll) {
        container.scrollTo({
          left: (childToScroll as HTMLElement).offsetLeft,
          behavior: 'smooth',
        });
      }
      setScrollLeftEnabled(canScrollFurther);
      setScrollRightEnabled(true);
    }
  }, [container]);

  const handleScrollRight = useCallback(() => {
    if (container) {
      const { element: childToScroll, canScrollFurther } =
        getRightElementToScroll(container as HTMLElement);
      if (childToScroll) {
        container.scrollTo({
          left: (childToScroll as HTMLElement).offsetLeft,
          behavior: 'smooth',
        });
      }
      setScrollRightEnabled(Boolean(childToScroll && canScrollFurther));
      setScrollLeftEnabled(true);
    }
  }, [container]);

  return {
    isScrollLeftEnabled,
    isScrollRightEnabled,
    setScrollLeftEnabled,
    setScrollRightEnabled,
    handleScrollLeft,
    handleScrollRight,
    ref,
  };
}
