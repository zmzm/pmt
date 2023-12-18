import { useState } from 'react';
import { TabsProps as JoyTabsProps } from '@mui/joy/Tabs';
import Stack from '@mui/joy/Stack';
import {
  KeyboardArrowLeft as LeftArrow,
  KeyboardArrowRight as RightArrow,
} from '@mui/icons-material';

import { ArrowButton } from './styled';
import { useScrollNavigation } from './hooks/use-scroll-navigation';
import { useTabsValues } from './hooks/use-tabs-values';
import { useStateObserver } from './hooks/use-state-observer';
import { TabListElement } from './types/tab-list-element';

type ScrollableTabListProps = {
  originalTabList: TabListElement;
  value?: JoyTabsProps['value'];
  defaultValue: JoyTabsProps['defaultValue'];
};

export const ScrollableTabList = ({
  originalTabList,
  value,
  defaultValue,
}: ScrollableTabListProps) => {
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);
  const values = useTabsValues({ originalTabList });
  const selectedItem = value ?? (defaultValue || 0);

  const {
    isScrollLeftEnabled,
    isScrollRightEnabled,
    setScrollRightEnabled,
    setScrollLeftEnabled,
    handleScrollLeft,
    handleScrollRight,
    ref,
  } = useScrollNavigation();

  useStateObserver({
    ref,
    setButtonsVisible,
    setScrollRightEnabled,
    setScrollLeftEnabled,
    selectedItem,
    values,
  });

  return (
    <Stack
      sx={{
        width: '100%',
      }}
      direction="row"
      alignItems="baseline"
      gap={6}
      ref={ref}
    >
      {originalTabList}
      {buttonsVisible && (
        <Stack direction="row" gap={5}>
          <ArrowButton
            variant="outlined"
            onClick={handleScrollLeft}
            disabled={!isScrollLeftEnabled}
          >
            <LeftArrow />
          </ArrowButton>
          <ArrowButton
            variant="outlined"
            onClick={handleScrollRight}
            disabled={!isScrollRightEnabled}
          >
            <RightArrow />
          </ArrowButton>
        </Stack>
      )}
    </Stack>
  );
};
