import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentBaseProps, generateRandomString } from '../../shared';
import { Notification, NotificationProps } from '../Notification/Notification';
import { notificationSpacing } from './styles';

/**
 * Notification carousel component properties
 */
export interface NotificationCarouselProps
  extends ComponentBaseProps<HTMLDivElement> {
  /**
   * List of items (notifications) to stack to each other
   */
  carouselItems?: NotificationProps[];

  /**
   * Maximum amount of notifications to be shown at once
   */
  maxNotifications?: number;
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
export const NotificationCarousel = React.forwardRef(
  (
    {
      carouselItems,
      maxNotifications,
      ...restProps
    }: NotificationCarouselProps,
    ref: NotificationCarouselProps['ref']
  ) => {
    const [carouselItemsState, setCarouselItemsState] = useState(
      carouselItems || []
    );

    return (
      <div
        style={{
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
        ref={ref}
        {...restProps}
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
                    carouselItemsState.filter(
                      (_, index) => index !== deleteIndex
                    )
                  );
                }}
              />
            </NotificationCarouselItemWrapper>
          ))}
      </div>
    );
  }
);
