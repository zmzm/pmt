import { Children, useMemo } from 'react';

import { TabListElement } from '../types/tab-list-element';
import { TabElement } from '../types/tab-element';

export type Props = {
  originalTabList: TabListElement;
};

const EMPTY_LIST: TabListElement[] = [];

export function useTabsValues({ originalTabList }: Props) {
  const tabs = originalTabList ? originalTabList.props.children : EMPTY_LIST;

  const values = useMemo(() => {
    return Children.toArray(tabs).map((child, index) => {
      if (child) {
        return (child as TabElement).props?.value || index;
      }
      return index;
    });
  }, [tabs]);

  return values;
}
