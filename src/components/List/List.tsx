import React from 'react';
import styled from 'styled-components';
import { ComponentBaseProps, typography } from '../../shared';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { listItemPadding } from './styles';

/**
 * ListItem component properties
 * Extends html li attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attributes
 */
export interface ListItemProps
  extends ComponentBaseProps<HTMLLIElement>,
    React.HTMLAttributes<HTMLLIElement> {
  /**
   * Text of the list item
   */
  text?: string;

  /**
   * If true, show the expand button so the sub items can be shown or hidden by user
   */
  expandable?: boolean;

  /**
   * Is the list item by default expanded (true) or unexpanded (false)
   */
  expanded?: boolean;

  /**
   * Children of the element, if any
   */
  children?: React.ReactNode;
}

/**
 * Style for the area which contains the list item's text
 */
const TextWrapper = styled.div`
  font-size: ${typography.size.li};
  line-height: ${typography.lineHeight.li};
  padding: ${listItemPadding};
  flex: 0 1 auto;
`;

/**
 * Style for the area which contains the list item's expand icon
 */
const ExpandIconWrapper = styled.div`
  display: flex;
  font-size: ${typography.size.li};
  flex: 0 0 auto;
`;

/**
 * Style for the list item li-element, which contains the text and the expand button
 */
const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: listItemSpacing;
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  &:hover {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack400};
  }
  &:focus-visible {
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack200};
  }
  cursor: pointer;
`;

/**
 * Style for the ul-element that contains the sub items (creates indentation)
 */
const ListSubItemWrapper = styled.ul`
  padding-left: ${listItemPadding};
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

/**
 * List component's main ul-element, containing all the ListItems
 */
export const ListWrapper = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

/**
 * ListItem component (may contain other ListItems hiearchially as children)
 * @param props ListItem props
 * @returns ListItem component
 */
export const ListItem = React.forwardRef(
  (
    { text, expandable, expanded, children }: ListItemProps,
    ref: ListItemProps['ref']
  ) => {
    const [expandedState, setExpandedState] = React.useState(expanded);

    return (
      <>
        <ListItemWrapper
          ref={ref}
          onClick={() => {
            expandable && setExpandedState(!expandedState);
          }}
          onKeyDown={(e) => {
            if (expandable && (e.code === 'Enter' || e.code === 'Space')) {
              setExpandedState(!expandedState);
            }
          }}
          tabIndex={0}
        >
          <TextWrapper>{text}</TextWrapper>
          {expandable && (
            <ExpandIconWrapper>
              {expandedState ? (
                <MdOutlineExpandLess />
              ) : (
                <MdOutlineExpandMore />
              )}
            </ExpandIconWrapper>
          )}
        </ListItemWrapper>
        {expandedState && (
          <li>
            <ListSubItemWrapper>{children}</ListSubItemWrapper>
          </li>
        )}
      </>
    );
  }
);

/**
 * ListProps
 * Extends html ul attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */
type ListProps = ComponentBaseProps<HTMLUListElement> &
  React.HTMLAttributes<HTMLUListElement>;

/**
 * List component
 */
export const List = React.forwardRef(
  ({ children }: ListProps, ref: ListProps['ref']) => {
    return <ListWrapper ref={ref}>{children}</ListWrapper>;
  }
);
