import React from 'react';
import styled from 'styled-components';
import { ComponentBaseProps, ComponentState } from '../../shared';
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
  notificationMessageFontSize,
  notificationMessageLineHeight,
  notificationMinWidth,
  notificationTitleFontSize,
  notificationTitleLineHeight,
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
  notificationStyle?: ComponentState;

  /**
   * Has the notification a loading indicator
   */
  loadingIndicator?: boolean;

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
      return <div />;
    case 'default':
      return <div />;
    default:
      return <div />;
  }
};

/**
 * The div that contains the notification icon. Applies padding and proper color.
 */
const NotificationIconDiv = styled.div<NotificationProps>`
  color: ${(props) =>
    NotificationIconColor(props.notificationStyle || 'default', props.theme)};
  float: left;
  padding-right: ${notificationIconSpacing}px;
`;

/**
 * The paragraph that contains the title text. Applies proper color, padding and font.
 */
const NotificationTitleParagraph = styled.p<NotificationProps>`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  font-size: ${notificationTitleFontSize}px;
  line-height: ${notificationTitleLineHeight}px;
  margin-top: 0;
`;

/**
 * The paragraph that contains the message text. Applies proper color, padding and font.
 */
const NotificationMessageParagraph = styled.p<NotificationProps>`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  font-size: ${notificationMessageFontSize}px;
  line-height: ${notificationMessageLineHeight}px;
  margin-top: 0;
  margin-bottom: 0;
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
  loadingIndicator,
  closeButtonAriaLabel,
  ...restProps
}: NotificationProps) => {
  const props = {
    title,
    message,
    notificationStyle,
    loadingIndicator,
    closeButtonAriaLabel,
    ...restProps,
  };

  const [hidden, setHidden] = React.useState(false);

  if (hidden == true) return <div />;

  return (
    <Wrapper
      style={{
        display: 'inline-block',
        minWidth: notificationMinWidth,
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
        }}
      >
        <div
          style={{
            float: 'left',
          }}
        >
          <NotificationIcon
            notificationStyle={props.notificationStyle}
          ></NotificationIcon>
        </div>
        <div style={{ float: 'left', flex: '1' }}>
          <NotificationTitleParagraph>{title}</NotificationTitleParagraph>
          <NotificationMessageParagraph>{message}</NotificationMessageParagraph>
        </div>
        <div
          style={{
            float: 'right',
            paddingLeft: notificationIconSpacing,
          }}
        >
          <IconButton
            onClick={() => setHidden(true)}
            aria-label={
              closeButtonAriaLabel || 'Close button for a notification'
            }
            size='large'
          >
            <MdClose />
          </IconButton>
        </div>
      </div>
      {props.loadingIndicator && (
        <div
          style={{ marginTop: notificationMessageLineHeight, marginBottom: 0 }}
        >
          <LinearLoadingIndicator
            indicatorStyle={props.notificationStyle}
          ></LinearLoadingIndicator>
        </div>
      )}
    </Wrapper>
  );
};
