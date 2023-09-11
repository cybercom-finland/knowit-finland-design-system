import React, { useState } from 'react';
import styled from 'styled-components';
import { generateRandomString } from '../../shared';
import { Notification } from '../Notification/Notification';
import { Wrapper, WrapperProps } from '../Wrapper';
import { notificationSpacing } from './styles';

/**
 * Notification carousel component properties
 */
export interface NotificationCarouselProps extends WrapperProps {
  /**
   * List of items (notifications) to stack to each other
   */
  carouselItems?: CarouselItem[];

  /**
   * Maximum amount of notifications to be shown at once
   */
  maxNotifications?: number;
}

/**
 * Each notification shown on the carousel is specified thru CarouselItem
 */
export interface CarouselItem {
  /**
   * ID for the carousel item, or randomly generated if undefined
   */
  id?: string;

  /**
   * Title for the notification
   */
  title?: string;

  /**
   * Message for the notification (optional)
   */
  message?: string;

  /**
   * Aria-label for the close button
   */
  closeButtonAriaLabel?: string;

  /**
   * How long the notification is shown (indefinitely if undefined)
   */
  duration?: number;
}

/**
 * Wrap notifications to each other vertically with padding
 */
const NotificationCarouselItemWrapper = styled.div`
  padding-bottom: ${notificationSpacing};
  pointer-events: auto;
`;

/**
 * NotificationCarousel component
 * @param props NotificationCarousel props
 * @returns NotificationCarousel component
 */
export const NotificationCarousel = ({
  carouselItems,
  maxNotifications,
}: NotificationCarouselProps) => {
  const [carouselItemsState, setCarouselItemsState] = useState(
    carouselItems || []
  );

  return (
    <Wrapper
      style={{
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {carouselItemsState
        .filter((_, index) =>
          maxNotifications ? index < maxNotifications : true
        )
        .map((item, index) => (
          <NotificationCarouselItemWrapper
            key={item.id || generateRandomString(5)}
          >
            <Notification
              title={item.title}
              message={item.message}
              closeButtonAriaLabel={item.closeButtonAriaLabel}
              duration={item.duration}
              index={index}
              deleteNotification={(deleteIndex) => {
                setCarouselItemsState(
                  carouselItemsState.filter((_, index) => index !== deleteIndex)
                );
              }}
            />
          </NotificationCarouselItemWrapper>
        ))}
    </Wrapper>
  );
};
