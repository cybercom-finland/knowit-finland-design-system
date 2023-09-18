import React from 'react';
import styled from 'styled-components';
import { typography } from '../../shared';
import { IconButton } from '../IconButton/IconButton';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { listItemPadding } from './styles';

/**
 * ListItem component properties
 * Extends html label attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes
 */
export interface ListItemProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Text of the list item
   */
  text?: string;

  /**
   * If true, show the expand button so the sub items can be shown or hidden by user
   */
  expandable?: boolean;

  /**
   * Aria-label for the expand button
   */
  expandButtonAriaLabel?: string;

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
  flex: 1;
  display: inline-block;
  padding: ${listItemPadding};
`;

/**
 * Style for the area which contains the list item's expand button
 */
const ExpandButtonWrapper = styled.div`
  padding-right: ${listItemPadding};
  flex: 1;
  display: inline-block;
`;

/**
 * Style for the list item div, which contains the text and the expand button
 */
const ListItemWrapper = styled.div`
  display: flex;
  padding: listItemSpacing;
  align-items: flex-start;
  justify-content: flex-start;
  display: inline-block;
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  &:hover {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack400};
  }
  cursor: pointer;
`;

/**
 * Style for the div that contains the sub items (creates indentation)
 */
const ListSubItemWrapper = styled.div`
  padding-left: ${listItemPadding};
`;

/**
 * List component's main div, containing all the ListItems
 */
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * List component (contains ListItems)
 */
export const List = ({
  children,
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return <ListWrapper>{children}</ListWrapper>;
};

/**
 * ListItem component (may contain other ListItems hiearchially)
 * @param props ListItem props
 * @returns ListItem component
 */
export const ListItem = ({
  text,
  expandable,
  expandButtonAriaLabel,
  children,
  expanded,
}: ListItemProps) => {
  const [expandedState, setExpandedState] = React.useState(expanded);

  return (
    <div>
      <ListItemWrapper>
        <TextWrapper>{text}</TextWrapper>
        {expandable && (
          <ExpandButtonWrapper>
            <IconButton
              onClick={() => {
                setExpandedState(!expandedState);
              }}
              aria-label={expandButtonAriaLabel || 'List expand button'}
            >
              {expandedState ? (
                <MdOutlineExpandLess />
              ) : (
                <MdOutlineExpandMore />
              )}
            </IconButton>
          </ExpandButtonWrapper>
        )}
      </ListItemWrapper>
      {expandedState && <ListSubItemWrapper>{children}</ListSubItemWrapper>}
    </div>
  );
};
