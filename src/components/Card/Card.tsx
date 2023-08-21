import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { pxToRem, ComponentBaseProps } from '../../shared';
import { Box } from '../Box';
import { Label } from '../Label';

export type CardVariant = 'rectangle' | 'rounded';

/**
 * Dimensions of box component
 */
const boxDimensions = {
  rounded: {
    borderRadius: pxToRem(32),
  },
};

/**
 * Box component properties
 * Extends html div element attributes
 */
export interface CardProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Box variant
   */
  variant?: CardVariant;

  /**
   * Children
   */
  header?: React.ReactNode;

  /**
   * Children
   */
  category?: React.ReactNode;

  /**
   * Children
   */
  title?: React.ReactNode;

  /**
   * Children
   */
  content?: React.ReactNode;
}

const CardCategory = styled.div<CardProps>`
  font-size: 14px;
  line-height: 16px;
  padding: 24px 0px 16px 24px;
`;
const CardTitle = styled.div<CardProps>`
  padding: 0px 24px 16px 24px;
  line-height: 32px;
  font-weight: 700;
  font-size: 24px;
`;
const CardContent = styled.div<CardProps>`
  padding: 0px 24px 24px 24px;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
`;

/**
 * Box component
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
