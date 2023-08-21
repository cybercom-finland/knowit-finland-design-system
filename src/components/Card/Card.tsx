import React from 'react';
import styled from 'styled-components';
import { pxToRem, ComponentBaseProps } from '../../shared';
import { Box, BoxVariant } from '../Box';

/**
 * Dimensions of card component
 */
const cardDimensions = {
  cardCategory: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16),
    padding: `${pxToRem(24)} ${pxToRem(0)} ${pxToRem(16)} ${pxToRem(24)}`,
  },
  cardTitle: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(32),
    padding: `${pxToRem(0)} ${pxToRem(24)} ${pxToRem(16)} ${pxToRem(24)}`,
    fontWeight: 700,
  },
  cardContent: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    padding: `${pxToRem(0)} ${pxToRem(24)} ${pxToRem(24)} ${pxToRem(24)}`,
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
  category?: React.ReactNode;

  /**
   * Component title
   */
  title?: React.ReactNode;

  /**
   * Component content node
   */
  content?: React.ReactNode;
}

/**
 * Card category label wrapper
 */
const CardCategory = styled.div<CardProps>`
  font-size: ${cardDimensions.cardCategory.fontSize};
  line-height: ${cardDimensions.cardCategory.lineHeight};
  padding: ${cardDimensions.cardCategory.padding};
`;

/**
 * Card title wrapper
 */
const CardTitle = styled.div<CardProps>`
  font-size: ${cardDimensions.cardTitle.fontSize};
  line-height: ${cardDimensions.cardTitle.lineHeight};
  padding: ${cardDimensions.cardTitle.padding};
  font-weight: ${cardDimensions.cardTitle.fontWeight};
`;

/**
 * Card content node wrapper
 */
const CardContent = styled.div<CardProps>`
  font-size: ${cardDimensions.cardContent.fontSize};
  line-height: ${cardDimensions.cardContent.lineHeight};
  padding: ${cardDimensions.cardContent.padding};
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
      <CardCategory>{category}</CardCategory>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </Box>
  );
};
