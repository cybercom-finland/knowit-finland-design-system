import React from 'react';
import styled from 'styled-components';
import {
  ComponentBaseProps,
  Severity,
  pxToRem,
  typography,
} from '../../shared';
import { IconButton } from '../IconButton/IconButton';
import {
  MdClose,
  MdOutlineCheckCircle,
  MdWarning,
  MdError,
  MdInfo,
} from 'react-icons/md';
import { LinearLoadingIndicator } from '../LinearLoadingIndicator';
import {
  NotificationIconColor,
  notificationIconSize,
  notificationIconSpacing,
  notificationMinWidth,
} from './styles';

/**
 * Notification component properties
 * Extends html div attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes
 */
export interface NotificationProps
  extends ComponentBaseProps<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title text, shown in the notification
   */
  title?: string;

  /**
   * Message text, shown in the notification
   */
  message?: string;

  /**
   * Severity of the notification
   */
  notificationSeverity?: Severity;

  /**
   * Has the notification a loading indicator
   */
  showLoadingIndicator?: boolean;

  /**
   * Aria-label for the close button
   */
  closeButtonAriaLabel?: string;

  /**
   * How long the notification is shown in milliseconds (indefinitely, if undefined)
   */
  duration?: number;

  /**
   * Function that is called when notification should be deleted from view (close button, or duration elapsed)
   */
  deleteNotification?: (index: number) => void;

  /**
   * Index of the notification, which can assist with deleteNotification
   */
  index?: number;
}

/**
 * A style/state/theme dependent icon component, which can be used in the notification component
 */
const NotificationIcon = ({ notificationSeverity }: NotificationProps) => {
  switch (notificationSeverity) {
    case 'success':
      return (
        <NotificationIconContainer $notificationSeverity={notificationSeverity}>
          <MdOutlineCheckCircle size={notificationIconSize} />
        </NotificationIconContainer>
      );
    case 'warning':
      return (
        <NotificationIconContainer $notificationSeverity={notificationSeverity}>
          <MdWarning size={notificationIconSize} />
        </NotificationIconContainer>
      );
    case 'error':
      return (
        <NotificationIconContainer $notificationSeverity={notificationSeverity}>
          <MdError size={notificationIconSize} />
        </NotificationIconContainer>
      );
    case 'info':
      return (
        <NotificationIconContainer $notificationSeverity={notificationSeverity}>
          <MdInfo size={notificationIconSize} />
        </NotificationIconContainer>
      );
    case undefined:
      return;
    case 'default':
      return;
    default:
      return;
  }
};

/**
 * The div that contains the notification icon. Applies padding and proper color.
 */
const NotificationIconContainer = styled.div<{
  $notificationSeverity: Severity;
}>`
  color: ${(props) =>
    NotificationIconColor(
      props.$notificationSeverity || 'default',
      props.theme
    )};
  padding-right: ${notificationIconSpacing};
`;

/**
 * The paragraph that contains the title text. Applies proper color, padding and font.
 */
const NotificationTitleParagraph = styled.p`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  font-size: ${typography.size.label.large};
  line-height: ${typography.lineHeight.label.large};
  font-weight: ${typography.weight.bold};
  margin-top: 0;
  margin-bottom: 0;
`;

/**
 * The paragraph that contains the message text. Applies proper color, padding and font.
 */
const NotificationMessageParagraph = styled.p`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  font-size: ${typography.size.paragraph};
  line-height: ${typography.lineHeight.paragraph};
  margin-top: ${pxToRem(16)};
  margin-bottom: 0;
`;

/**
 * Contains and has style for the title and message area
 */
const NotificationMessageWrapper = styled.div`
  flex: 1;
`;

/**
 * Contains and has style for the close button area
 */
const NotificationCloseButtonWrapper = styled.div`
  padding-left: ${notificationIconSpacing};
`;

/**
 * Contains has style for the main notification area (icon, title, message, close button)
 */
const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  padding: ${notificationIconSpacing};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;

/**
 * Notification component
 * @param props Notification props
 * @returns Notification component
 */
export const Notification = React.forwardRef(
  (
    {
      title,
      message,
      notificationSeverity = 'default',
      showLoadingIndicator = false,
      closeButtonAriaLabel,
      duration,
      deleteNotification,
      index,
      ...restProps
    }: NotificationProps,
    ref: NotificationProps['ref']
  ) => {
    const [hidden, setHidden] = React.useState(false);

    duration &&
      setTimeout(() => {
        setHidden(true);
        deleteNotification && deleteNotification(index || 0);
      }, duration);

    return (
      !hidden && (
        <div
          style={{
            display: 'inline-block',
            minWidth: notificationMinWidth,
          }}
          ref={ref}
          {...restProps}
        >
          <NotificationWrapper>
            <NotificationIcon
              notificationSeverity={notificationSeverity}
            ></NotificationIcon>
            <NotificationMessageWrapper>
              <NotificationTitleParagraph>{title}</NotificationTitleParagraph>
              {message && (
                <NotificationMessageParagraph>
                  {message}
                </NotificationMessageParagraph>
              )}
            </NotificationMessageWrapper>
            <NotificationCloseButtonWrapper>
              <IconButton
                onClick={() => {
                  setHidden(true);
                  deleteNotification && deleteNotification(index || 0);
                }}
                aria-label={
                  closeButtonAriaLabel || 'Close button for a notification'
                }
                size='large'
              >
                <MdClose />
              </IconButton>
            </NotificationCloseButtonWrapper>
          </NotificationWrapper>
          {showLoadingIndicator && (
            <LinearLoadingIndicator
              indicatorSeverity={notificationSeverity}
            ></LinearLoadingIndicator>
          )}
        </div>
      )
    );
  }
);
