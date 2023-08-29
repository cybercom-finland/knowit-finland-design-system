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
import { Wrapper, WrapperProps } from '../Wrapper';

/**
 * Notification component properties
 * Extends html label attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes
 */
export interface NotificationProps
  extends WrapperProps,
    ComponentBaseProps<HTMLLabelElement>,
    React.LabelHTMLAttributes<HTMLLabelElement> {
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
}

/**
 * A style/state/theme dependent icon component, which can be used in the notification component
 */
const NotificationIcon = ({ notificationSeverity }: NotificationProps) => {
  switch (notificationSeverity) {
    case 'success':
      return (
        <NotificationIconDiv notificationSeverity={notificationSeverity}>
          <MdOutlineCheckCircle size={notificationIconSize} />
        </NotificationIconDiv>
      );
    case 'warning':
      return (
        <NotificationIconDiv notificationSeverity={notificationSeverity}>
          <MdWarning size={notificationIconSize} />
        </NotificationIconDiv>
      );
    case 'error':
      return (
        <NotificationIconDiv notificationSeverity={notificationSeverity}>
          <MdError size={notificationIconSize} />
        </NotificationIconDiv>
      );
    case 'info':
      return (
        <NotificationIconDiv notificationSeverity={notificationSeverity}>
          <MdInfo size={notificationIconSize} />
        </NotificationIconDiv>
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
const NotificationIconDiv = styled.div<NotificationProps>`
  color: ${(props) =>
    NotificationIconColor(
      props.notificationSeverity || 'default',
      props.theme
    )};
  padding-right: ${notificationIconSpacing};
`;

/**
 * The paragraph that contains the title text. Applies proper color, padding and font.
 */
const NotificationTitleParagraph = styled.p<NotificationProps>`
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
const NotificationMessageParagraph = styled.p<NotificationProps>`
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
const NotificationWrapper = styled.div<NotificationProps>`
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
export const Notification = ({
  title,
  message,
  notificationSeverity,
  showLoadingIndicator,
  closeButtonAriaLabel,
  ...restProps
}: NotificationProps) => {
  const props = {
    title,
    message,
    notificationSeverity,
    showLoadingIndicator,
    closeButtonAriaLabel,
    ...restProps,
  };

  const [hidden, setHidden] = React.useState(false);

  return (
    !hidden && (
      <Wrapper
        style={{
          display: 'inline-block',
          minWidth: notificationMinWidth,
        }}
      >
        <NotificationWrapper showLoadingIndicator={props.showLoadingIndicator}>
          <NotificationIcon
            notificationSeverity={props.notificationSeverity}
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
              onClick={() => setHidden(true)}
              aria-label={
                closeButtonAriaLabel || 'Close button for a notification'
              }
              size='large'
            >
              <MdClose />
            </IconButton>
          </NotificationCloseButtonWrapper>
        </NotificationWrapper>
        {props.showLoadingIndicator && (
          <LinearLoadingIndicator
            indicatorSeverity={props.notificationSeverity}
          ></LinearLoadingIndicator>
        )}
      </Wrapper>
    )
  );
};
