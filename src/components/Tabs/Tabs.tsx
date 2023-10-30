import React, { useEffect, useLayoutEffect } from 'react';
import { InputComponentBaseProps, generateRandomString } from '../../shared';
import styled from 'styled-components';
import { IconButton } from '../IconButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { TabProps } from './Tab';
import { useTabs } from './useTabs';

export interface TabsProps
  extends Omit<InputComponentBaseProps<HTMLDivElement>, 'onChange' | 'value'> {
  /**
   * Tabs value
   */
  value?: number;

  /**
   * Children
   */
  children?: React.ReactNode;

  /**
   * Change event
   * @param event Mouse or Keyboard event
   * @param value New selected value
   * @returns
   */
  onChange?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
    value: number
  ) => void;
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
export const Tabs = ({
  id,
  value,
  children,
  onChange,
  ...restprops
}: TabsProps) => {
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

  /**
   * Automatically show or hide arrows on initial render
   */
  useLayoutEffect(() => {
    if (tabsWrapperRef.current != null) {
      if (
        tabsWrapperRef.current.scrollWidth > tabsWrapperRef.current.clientWidth
      ) {
        setShowArrows(true);
      }
    }
  }, []);

  /**
   * Disable arrows if navigating to last tab
   */
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

  /**
   * Update value based on given value property
   */
  useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
      tabRefs.current[value]?.focus();
    }
  }, [value]);

  /**
   * Handle arrow button press
   * @param direction
   */
  const handleArrowButtonPress = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      tabsWrapperRef.current?.scrollBy(-tabsWrapperRef.current.clientWidth, 0);
    }
    if (direction === 'right') {
      tabsWrapperRef.current?.scrollBy(tabsWrapperRef.current.clientWidth, 0);
    }
    setDisableLeftArrow(false);
    setDisableRightArrow(false);
  };

  /**
   * Create navigation tabs
   */
  const createNavigationTabs = React.Children.map(children, (child, i) => {
    if (!React.isValidElement<TabProps>(child)) {
      return child;
    }
    const elementChild = React.cloneElement(child, {
      ...child.props,
      role: 'tab',
      tabIndex: selectedTab === i ? 0 : -1,
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        handleSelectTab(event, i),
      'aria-selected': i === selectedTab,
      selected: i === selectedTab,
      ref: (ref: HTMLButtonElement) => {
        tabRefs.current[i] = ref;
      },
    });

    return elementChild;
  });

  /**
   * Handle key press
   * Function to handle keyboard input
   * @param event Press event
   */
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const tabCount = tabRefs.current.length - 1;
    if (event.key === 'ArrowLeft') {
      const next = selectedTab === 0 ? 0 : selectedTab - 1;
      handleSelectTab(event, next);
    }
    if (event.key === 'ArrowRight') {
      const next = selectedTab === tabCount ? tabCount : selectedTab + 1;
      handleSelectTab(event, next);
    }
  };

  /**
   * Handle select tab
   * @param event // Mouse or keyboard event
   * @param value
   */
  const handleSelectTab = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
    value: number
  ) => {
    setSelectedTab(value);
    tabRefs.current[value]?.focus();
    onChange && onChange(event, value);
  };

  return (
    <>
      <TabsComponentWrapper id={componentId} {...restprops} value={value}>
        {showArrows && (
          <IconButton
            size='large'
            disabled={disableLeftArrow}
            onClick={() => handleArrowButtonPress('left')}
            aria-hidden={true}
            tabIndex={-1}
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
            onClick={() => handleArrowButtonPress('right')}
            aria-hidden={true}
            tabIndex={-1}
          >
            <MdKeyboardArrowRight />
          </IconButton>
        )}
      </TabsComponentWrapper>
    </>
  );
};
