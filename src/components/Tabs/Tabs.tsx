import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentBaseProps, generateRandomString } from '../../shared';
import styled from 'styled-components';
import { IconButton } from '../IconButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { TabProps } from './Tab';
import { useTabs } from './useTabs';

export interface TabsProps
  extends Omit<ComponentBaseProps<HTMLDivElement>, 'onChange'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Tabs value. Index of selected tab if any.
   */
  value: number;

  /**
   * Children
   */
  children: React.ReactNode;

  /**
   * Change event
   * @param event Mouse or Keyboard event
   * @param value New selected value
   * @returns
   */
  onChange: (event: React.SyntheticEvent, value: number) => void;
}

/**
 * Component wrapper
 */
const TabsComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

/**
 * Wrapper for tabs
 */
const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none; // Safari + Chrome
  }
`;

/**
 * Returned component
 */
export const Tabs = React.forwardRef(
  (
    { id, value, children, onChange, ...restprops }: TabsProps,
    ref: TabsProps['ref']
  ) => {
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
    } = useTabs(value);

    /**
     * Helper for using Tab container meta info
     * @returns Meta info
     */
    const getTabsMeta = () => {
      let tabsMeta;
      if (tabsWrapperRef.current) {
        tabsMeta = {
          scrollLeft: tabsWrapperRef.current.scrollLeft,
          scrollWidth: tabsWrapperRef.current.scrollWidth,
          clientWidth: tabsWrapperRef.current.clientWidth,
        };
      }

      return {
        tabsMeta,
      };
    };

    /**
     * Initialize Tabs.
     * Show or hide arrows on initial render.
     */
    useLayoutEffect(() => {
      const { tabsMeta } = getTabsMeta();

      if (tabsMeta) {
        if (tabsMeta.scrollWidth > tabsMeta.clientWidth) {
          setShowArrows(true);
          updateArrows();
        }
      }
    }, []);

    /**
     * Handle Tabs container scroll
     * @param event
     */
    const handleTabsScroll = (event: React.SyntheticEvent): void => {
      event.preventDefault();
      updateArrows();
    };

    /**
     * Update arrows when scroll position changes
     */
    const updateArrows = () => {
      const { tabsMeta } = getTabsMeta();

      if (tabsMeta?.scrollLeft !== undefined) {
        // Scrolled to the left
        if (tabsMeta?.scrollLeft === 0) {
          setDisableLeftArrow(true);
          setDisableRightArrow(false);
        }
        if (tabsMeta?.scrollLeft > 0) {
          setDisableLeftArrow(false);
        }
        if (
          tabsMeta.scrollWidth - tabsMeta.clientWidth >
          tabsMeta?.scrollLeft
        ) {
          setDisableRightArrow(false);
        }
        // Scrolled to the right
        if (
          tabsMeta.scrollWidth - tabsMeta.clientWidth ===
          tabsMeta?.scrollLeft
        ) {
          setDisableRightArrow(true);
        }
      }
    };

    /**
     * Update value based on given value property
     */
    useEffect(() => {
      setSelectedTab(value);
    }, [value]);

    /**
     * Create navigation tabs
     */
    const createNavigationTabs = React.Children.map(
      children,
      (child, index) => {
        if (!React.isValidElement<TabProps>(child)) {
          return child;
        }
        const elementChild = React.cloneElement(child, {
          ...child.props,
          role: 'tab',
          tabIndex: selectedTab === index ? 0 : -1,
          onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSelectTab(event, index),
          'aria-selected': index === selectedTab,
          selected: index === selectedTab,
          ref: (ref: HTMLButtonElement) => {
            tabRefs.current[index] = ref;
          },
        });

        return elementChild;
      }
    );

    /**
     * Handle arrow button press
     * @param direction
     */
    const handleArrowButtonPress = (direction: 'left' | 'right') => {
      const { tabsMeta } = getTabsMeta();
      const tabsContainer = tabsWrapperRef.current;

      if (tabsMeta && tabsContainer) {
        if (direction === 'left') {
          scrollBy(-tabsMeta.clientWidth);
        }
        if (direction === 'right') {
          scrollBy(tabsMeta.clientWidth);
        }
      }
    };

    /**
     * scrollBy helper function
     * @param value
     */
    const scrollBy = (value: number) => {
      const tabsContainer = tabsWrapperRef.current;

      if (tabsContainer) {
        tabsContainer.scrollBy({
          left: value,
          behavior: 'smooth',
        });
      }
    };

    /**
     * Handle key press
     * Function to handle keyboard input
     * @param event Press event
     */
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const tabCount = tabRefs.current.length - 1;
      const focusedTabIndex = tabRefs.current.indexOf(
        document.activeElement as HTMLButtonElement
      );

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        let next = focusedTabIndex === 0 ? 0 : focusedTabIndex - 1;
        // Prevent disabled tab selection
        if (tabRefs.current[next]?.disabled && next > 0) {
          next = next - 1;
        }

        handleFocusTab(event, next);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        let next =
          focusedTabIndex === tabCount ? tabCount : focusedTabIndex + 1;

        // Prevent disabled tab selection
        if (tabRefs.current[next]?.disabled && next < tabCount) {
          next = next + 1;
        }
        handleFocusTab(event, next);
      }
    };

    /**
     * Handle select tab
     * @param event // Mouse or keyboard event
     * @param value
     */
    const handleSelectTab = (event: React.SyntheticEvent, value: number) => {
      setSelectedTab(value);
      tabRefs.current[value]?.focus();
      // Make sure that selected Tab is visible
      scrollIntoView(value);

      onChange && onChange(event, value);
    };

    /**
     * Handle focus tab
     * @param event
     * @param value
     */
    const handleFocusTab = (event: React.SyntheticEvent, value: number) => {
      tabRefs.current[value]?.focus();
      // Make sure that focused Tab is visible
      scrollIntoView(value);
    };

    /**
     * Scroll into view helper function
     * @param value
     */
    const scrollIntoView = (value: number) => {
      tabRefs.current[value]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    };

    return (
      <TabsComponentWrapper id={componentId} ref={ref} {...restprops}>
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
          onKeyDown={(event) => {
            handleKeyPress(event);
          }}
          role={'tablist'}
          ref={tabsWrapperRef}
          // TODO: change this to onScrollEnd when it is supported
          onScroll={handleTabsScroll}
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
    );
  }
);
