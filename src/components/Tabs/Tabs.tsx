import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentBaseProps, generateRandomString } from '../../shared';
import styled from 'styled-components';
import { IconButton } from '../IconButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { TabProps } from '../Tab';
import { useTabs } from './useTabs';

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
  align-items: center;
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
  const {
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
  } = useTabs();

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
  // Disable arrows if navigating to last tab
  useEffect(() => {
    const tabCount = tabRefs.current.length - 1;
    if (selectedTab === 0) {
      setDisableLeftArrow(true);
    }
    if (selectedTab === tabCount) {
      setDisableRightArrow(true);
    }
    if (selectedTab > 0) {
      setDisableLeftArrow(false);
    }
    if (selectedTab < tabCount) {
      setDisableRightArrow(false);
    }
  }, [selectedTab]);

  const handleButtonPress = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      tabsWrapperRef.current?.scrollBy(-91, 0);
    }
    if (direction === 'right') {
      tabsWrapperRef.current?.scrollBy(91, 0);
    }
    setDisableLeftArrow(false);
    setDisableRightArrow(false);
  };

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
    const tabCount = tabRefs.current.length - 1;
    if (event.key === 'ArrowLeft') {
      const next = selectedTab === 0 ? 0 : selectedTab - 1;
      handleNextTab(next);
    }
    if (event.key === 'ArrowRight') {
      const next = selectedTab === tabCount ? tabCount : selectedTab + 1;
      handleNextTab(next);
    }
  };

  const handleNextTab = (nextTab: number) => {
    setSelectedTab(nextTab);
    tabRefs.current[nextTab]?.focus();
  };

  return (
    <>
      <TabsComponentWrapper id={componentId} {...restprops} value={value}>
        {showArrows && (
          <IconButton
            size='large'
            disabled={disableLeftArrow}
            onClick={() => handleButtonPress('left')}
            aria-label='Navigate left'
          >
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
          <IconButton
            size='large'
            disabled={disableRightArrow}
            onClick={() => handleButtonPress('right')}
            aria-label='Navigate right'
          >
            <MdKeyboardArrowRight />
          </IconButton>
        )}
      </TabsComponentWrapper>
    </>
  );
};
