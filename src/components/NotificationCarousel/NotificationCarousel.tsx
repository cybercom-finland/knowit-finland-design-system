import React from 'react';
import styled from 'styled-components';
import { ComponentBaseProps, generateRandomString } from '../../shared';
import { Notification } from '../Notification/Notification';
import { Wrapper, WrapperProps } from '../Wrapper';
import { notificationSpacing } from './styles';

/**
 * Notification carousel component properties
 * Extends html label attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes
 */
export interface NotificationCarouselProps
  extends WrapperProps,
    ComponentBaseProps<HTMLLabelElement>,
    React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * List of items (notifications) to stack to each other
   */
  carouselItems?: CarouselItem[];

  /**
   * Maximum height of the whole carousel component, so the notifications won't cover the whole view if there are many (only most recent ones would be visible)
   */
  maxHeight?: string;
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
`;

/**
 * Hide a notification after specified amount of time
 */
const TimedNotification = ({
  title,
  message,
  closeButtonAriaLabel,
  duration,
}: CarouselItem) => {
  const [isVisible, setIsVisible] = React.useState(true);
  duration &&
    setTimeout(() => {
      setIsVisible(false);
    }, duration);
  return (
    isVisible && (
      <Notification
        title={title}
        message={message}
        closeButtonAriaLabel={closeButtonAriaLabel}
      />
    )
  );
};

/**
 * NotificationCarousel component
 * @param props NotificationCarousel props
 * @returns NotificationCarousel component
 */
export const NotificationCarousel = ({
  carouselItems,
  maxHeight,
  ...restProps
}: NotificationCarouselProps) => {
  const props = {
    carouselItems,
    maxHeight,
    ...restProps,
  };

  return (
    <Wrapper
      style={{
        maxHeight: maxHeight || '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {carouselItems &&
        carouselItems.map((item) => (
          <NotificationCarouselItemWrapper
            key={item.id || generateRandomString(5)}
            style={{ pointerEvents: 'auto' }}
          >
            <TimedNotification
              title={item.title}
              message={item.message}
              closeButtonAriaLabel={item.closeButtonAriaLabel}
              duration={item.duration}
            />
          </NotificationCarouselItemWrapper>
        ))}
    </Wrapper>
  );
};
