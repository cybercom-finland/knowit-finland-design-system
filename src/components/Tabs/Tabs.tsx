import React, { createRef, useLayoutEffect, useRef } from 'react';
import { ComponentBaseProps, generateRandomString } from '../../shared';
import styled from 'styled-components';
import { IconButton } from '../IconButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { TabProps } from '../Tab';

export interface TabsProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Tabs value
   */
  value?: string;
  /**
   * Children
   */
  children?: React.ReactNode;
}

/**
 * Component wrapper
 */
const TabsComponentWrapper = styled.div<TabsProps>`
  display: flex;
  flex-direction: row;
`;
/**
 * Wrapper for tabs
 */
const TabsWrapper = styled.div<TabsProps>`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
/**
 * Returned component
 */
export const Tabs = ({ value, children, id, ...restprops }: TabsProps) => {
  const componentId = id ?? generateRandomString(5);
  const tabsWrapperRef = createRef<HTMLDivElement>();
  const [showArrows, setShowArrows] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Show or hide arrows
  useLayoutEffect(() => {
    if (tabsWrapperRef.current != null) {
      if (
        tabsWrapperRef.current.scrollWidth > tabsWrapperRef.current.clientWidth
      ) {
        setShowArrows(true);
      }
    }
  }, []);

  const createNavigationTabs = React.Children.map(children, (child, i) => {
    if (!React.isValidElement<TabProps>(child)) {
      return child;
    }
    const elementChild: React.ReactElement<TabProps> = child;
    return (
      <div
        role='tab'
        aria-selected={i === selectedTab}
        tabIndex={selectedTab === i ? 0 : -1}
        onClick={() => handleClick(i)}
        ref={(ref) => (tabRefs.current[i] = ref)}
      >
        {elementChild}
      </div>
    );
  });
  const handleClick = (index: number) => {
    setSelectedTab(index);
  };
  // Function to handle keyboard input
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const tabCount = tabRefs.current.length;
    if (event.key === 'ArrowLeft') {
      const last = tabCount;
      const next = selectedTab - 1;
      handleNextTab(last, next, 0);
    }
    if (event.key === 'ArrowRight') {
      const first = 0;
      const next = selectedTab + 1;
      handleNextTab(first, next, tabCount);
    }
  };

  const handleNextTab = (
    firstTabInRound: number,
    nextTab: number,
    lastTabInRound: number
  ) => {
    const tabToSelect =
      selectedTab === lastTabInRound ? firstTabInRound : nextTab;
    setSelectedTab(tabToSelect);
    tabRefs.current[tabToSelect]?.focus();
  };

  return (
    <>
      <TabsComponentWrapper id={componentId} {...restprops} value={value}>
        {showArrows && (
          <IconButton onClick={() => tabsWrapperRef.current?.scrollBy(-91, 0)} aria-label='Navigate left'>
            <MdKeyboardArrowLeft />
          </IconButton>
        )}
        <TabsWrapper
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
          role={'tablist'}
          ref={tabsWrapperRef}
        >
          {createNavigationTabs}
        </TabsWrapper>
        {showArrows && (
          <IconButton onClick={() => tabsWrapperRef.current?.scrollBy(91, 0)} aria-label='Navigate right'>
            <MdKeyboardArrowRight />
          </IconButton>
        )}
      </TabsComponentWrapper>
    </>
  );
};
