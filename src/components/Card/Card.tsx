import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { pxToRem, ComponentBaseProps } from '../../shared';
import { Box } from '../Box';

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
      {category}
      {title}
      {content}
    </Box>
  );
};
