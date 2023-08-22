import React from 'react';
import styled from 'styled-components';
import { pxToRem, ComponentBaseProps, typography } from '../../shared';
import { Box, BoxVariant } from '../Box';

/**
 * Dimensions of card component
 */
const cardDimensions = {
  cardCategory: {
    paddingTop: 24,
    paddingRight: 0,
    paddingBottom: 16,
    paddingLeft: 24,
  },
  cardTitle: {
    paddingTop: 0,
    paddingRight: 24,
    paddingBottom: 16,
    paddingLeft: 24,
  },
  cardContent: {
    paddingTop: 0,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
  },
};

/**
 * Card component properties
 * Extends html div element attributes
 */
export interface CardProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Box variant
   */
  variant?: BoxVariant;

  /**
   * Header content node
   */
  header?: React.ReactNode;

  /**
   * Category label
   */
  category?: string;

  /**
   * Component title
   */
  title?: string;

  /**
   * Component content node
   */
  content?: React.ReactNode;
}

/**
 * Card category label wrapper
 */
const CardCategory = styled.div<CardProps>`
  padding-top: ${pxToRem(cardDimensions.cardCategory.paddingTop)};
  padding-right: ${pxToRem(cardDimensions.cardCategory.paddingRight)};
  padding-bottom: ${pxToRem(cardDimensions.cardCategory.paddingBottom)};
  padding-left: ${pxToRem(cardDimensions.cardCategory.paddingLeft)};
`;

/**
 * Card title wrapper
 */
const CardTitle = styled.div<CardProps>`
  padding-top: ${pxToRem(cardDimensions.cardTitle.paddingTop)};
  padding-right: ${pxToRem(cardDimensions.cardTitle.paddingRight)};
  padding-bottom: ${pxToRem(cardDimensions.cardTitle.paddingBottom)};
  padding-left: ${pxToRem(cardDimensions.cardTitle.paddingLeft)};
`;

/**
 * Card content node wrapper
 */
const CardContent = styled.div<CardProps>`
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  padding-top: ${pxToRem(cardDimensions.cardContent.paddingTop)};
  padding-right: ${pxToRem(cardDimensions.cardContent.paddingRight)};
  padding-bottom: ${pxToRem(cardDimensions.cardContent.paddingBottom)};
  padding-left: ${pxToRem(cardDimensions.cardContent.paddingLeft)};
`;

/**
 * Card component
 */
export const Card = ({
  variant = 'rectangle',
  header,
  category,
  title,
  content,
  ...restProps
}: CardProps) => {
  return (
    <Box variant={variant} {...restProps}>
      {header}
      <CardCategory>
        <caption>{category}</caption>
      </CardCategory>
      <CardTitle>
        <h4>{title}</h4>
      </CardTitle>
      <CardContent>{content}</CardContent>
    </Box>
  );
};
