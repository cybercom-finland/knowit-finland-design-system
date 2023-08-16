import React from 'react';
import styled from 'styled-components';
import { ComponentBaseProps, Severity, typography } from '../../shared';
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
   * Style/state of the notification
   */
  notificationStyle?: Severity;

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
const NotificationIcon = ({ notificationStyle }: NotificationProps) => {
  switch (notificationStyle) {
    case 'success':
      return (
        <NotificationIconDiv notificationStyle={notificationStyle}>
          <MdOutlineCheckCircle />
        </NotificationIconDiv>
      );
    case 'warning':
      return (
        <NotificationIconDiv notificationStyle={notificationStyle}>
          <MdWarning />
        </NotificationIconDiv>
      );
    case 'error':
      return (
        <NotificationIconDiv notificationStyle={notificationStyle}>
          <MdError />
        </NotificationIconDiv>
      );
    case 'info':
      return (
        <NotificationIconDiv notificationStyle={notificationStyle}>
          <MdInfo />
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
    NotificationIconColor(props.notificationStyle || 'default', props.theme)};
  padding-right: ${notificationIconSpacing};
`;

/**
 * The paragraph that contains the title text. Applies proper color, padding and font.
 */
const NotificationTitleParagraph = styled.p<NotificationProps>`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  font-size: ${typography.size.paragraph};
  line-height: ${typography.lineHeight.paragraph};
  margin-top: 0;
`;

/**
 * The paragraph that contains the message text. Applies proper color, padding and font.
 */
const NotificationMessageParagraph = styled.p<NotificationProps>`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  margin-top: 0;
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
  notificationStyle,
  showLoadingIndicator,
  closeButtonAriaLabel,
  ...restProps
}: NotificationProps) => {
  const props = {
    title,
    message,
    notificationStyle,
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
            notificationStyle={props.notificationStyle}
          ></NotificationIcon>
          <NotificationMessageWrapper>
            <NotificationTitleParagraph>{title}</NotificationTitleParagraph>
            <NotificationMessageParagraph>
              {message}
            </NotificationMessageParagraph>
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
            indicatorStyle={props.notificationStyle}
          ></LinearLoadingIndicator>
        )}
      </Wrapper>
    )
  );
};
