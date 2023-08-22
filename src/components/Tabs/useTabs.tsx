import React, { createRef, useRef } from 'react';

export const useTabs = () => {
  const tabsWrapperRef = createRef<HTMLDivElement>();
  const [showArrows, setShowArrows] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [disableRightArrow, setDisableRightArrow] = React.useState(false);
  const [disableLeftArrow, setDisableLeftArrow] = React.useState(false);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  return {
    tabsWrapperRef,
    showArrows,
    setShowArrows,
    selectedTab,
    setSelectedTab,
    disableRightArrow,
    setDisableRightArrow,
    disableLeftArrow,
    setDisableLeftArrow,
    tabRefs,
  };
};
