import { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

import { scrollToItem } from '../utils/scroll-to-item';
import { canScrollRight } from '../utils/can-scroll-right';
import { canScrollLeft } from '../utils/can-scroll-left';

import { useResizeObserver } from './use-resize-observer';

export type Props = {
  ref: React.RefObject<HTMLDivElement>;
  setButtonsVisible: (value: React.SetStateAction<boolean>) => void;
  setScrollRightEnabled: (value: React.SetStateAction<boolean>) => void;
  setScrollLeftEnabled: (value: React.SetStateAction<boolean>) => void;
  selectedItem: string | number;
  values: (string | number)[];
};

export function useStateObserver({
  ref,
  setButtonsVisible,
  setScrollRightEnabled,
  setScrollLeftEnabled,
  selectedItem,
  values,
}: Props) {
  useResizeObserver({
    ref,
    setButtonsVisible,
    setScrollRightEnabled,
    setScrollLeftEnabled,
  });

  const debouncedCheckButtonsState = useMemo(() => {
    return debounce(() => {
      if (ref.current) {
        const container: HTMLElement = ref.current.children[0] as HTMLElement;
        setScrollRightEnabled(canScrollRight(container));
        setScrollLeftEnabled(canScrollLeft(container));
      }
    }, 50);
  }, [ref, setScrollLeftEnabled, setScrollRightEnabled]);

  useEffect(() => {
    if (ref.current) {
      const container: HTMLElement = ref.current.children[0] as HTMLElement;
      if (selectedItem) {
        scrollToItem(container, values.indexOf(selectedItem));
      }
      setScrollRightEnabled(canScrollRight(container));
      setScrollLeftEnabled(canScrollLeft(container));

      if (
        container &&
        ref.current &&
        ref.current.clientWidth < container.scrollWidth
      ) {
        setButtonsVisible(true);
      } else {
        setButtonsVisible(false);
      }

      if (container) {
        container.addEventListener('scroll', debouncedCheckButtonsState);
        return () =>
          container.removeEventListener('scroll', debouncedCheckButtonsState);
      }
    }
  }, [
    debouncedCheckButtonsState,
    ref,
    selectedItem,
    setButtonsVisible,
    setScrollLeftEnabled,
    setScrollRightEnabled,
    values,
  ]);
}
