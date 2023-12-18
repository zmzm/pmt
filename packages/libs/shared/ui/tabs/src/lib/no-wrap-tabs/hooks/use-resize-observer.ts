import { useEffect } from 'react';

import { canScrollRight } from '../utils/can-scroll-right';
import { canScrollLeft } from '../utils/can-scroll-left';

export type Props = {
  ref: React.RefObject<HTMLDivElement>;
  setButtonsVisible: (value: React.SetStateAction<boolean>) => void;
  setScrollRightEnabled: (value: React.SetStateAction<boolean>) => void;
  setScrollLeftEnabled: (value: React.SetStateAction<boolean>) => void;
};

export function useResizeObserver({
  ref,
  setButtonsVisible,
  setScrollRightEnabled,
  setScrollLeftEnabled,
}: Props) {
  useEffect(() => {
    if (ref.current) {
      const container: HTMLElement = ref.current.children[0] as HTMLElement;

      if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(() => {
          if (ref.current && ref.current.clientWidth < container.scrollWidth) {
            setButtonsVisible(true);
            setScrollRightEnabled(canScrollRight(container));
            setScrollLeftEnabled(canScrollLeft(container));
          } else {
            setButtonsVisible(false);
          }
        });

        resizeObserver.observe(container);
        return () => resizeObserver.unobserve(container);
      }
    }
  }, [ref, setButtonsVisible, setScrollLeftEnabled, setScrollRightEnabled]);
}
