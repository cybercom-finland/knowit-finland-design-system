import React from 'react';
import styled from 'styled-components';
import { typography } from '../../shared';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { listItemPadding } from './styles';

/**
 * ListItem component properties
 * Extends html li attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attributes
 */
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
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
}

/**
 * Style for the area which contains the list item's text
 */
const TextWrapper = styled.div`
  font-size: ${typography.size.paragraph};
  line-height: ${typography.lineHeight.paragraph};
  padding: ${listItemPadding};
  flex: 0 1 auto;
`;

/**
 * Style for the area which contains the list item's expand icon
 */
const ExpandIconWrapper = styled.div`
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
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

/**
 * ListItem component (may contain other ListItems hiearchially as children)
 * @param props ListItem props
 * @returns ListItem component
 */
export const ListItem = ({
  text,
  expandable,
  expanded,
  children,
}: ListItemProps) => {
  const [expandedState, setExpandedState] = React.useState(expanded);

  return (
    <>
      <ListItemWrapper
        onClick={() => {
          expandable && setExpandedState(!expandedState);
        }}
        onKeyDown={(e) => {
          if (expandable && (e.code === 'Enter' || e.code === 'Space')) {
            setExpandedState(!expandedState);
          }
        }}
        tabIndex={expandable ? 0 : -1}
      >
        <TextWrapper>{text}</TextWrapper>
        {expandable && (
          <ExpandIconWrapper>
            {expandedState ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
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
};

/**
 * List component (contains ListItems as children)
 * Extends html attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#attributes
 */
export const List = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return <ListWrapper>{children}</ListWrapper>;
};
