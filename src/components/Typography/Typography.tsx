import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentBaseProps, typography } from '../../shared';

/**
 * Internal properties for styles
 */
interface TextProps {
  /**
   * Alignment of text
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
}

/**
 * Internal component styling
 */
const StyledTypography = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ align, variant, ...restProps }: TypographyProps) => {
    switch (variant) {
      case 'h1':
        return <h1 {...restProps} />;
      case 'h2':
        return <h2 {...restProps} />;
      case 'h3':
        return <h3 {...restProps} />;
      case 'h4':
        return <h4 {...restProps} />;
      case 'p1':
        return <p {...restProps} />;
      case 'p2':
        return <p {...restProps} />;
    }
  }
)`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  text-align: ${(props) => props.align};
  ${({ variant }) =>
    variant === 'p2' &&
    css`
      font-size: ${typography.size.paragraph2};
      line-height: ${typography.lineHeight.paragraph2};
    `}
`;

/**
 * Typography properties
 * Extends global html element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p#attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption#attributes
 */
interface TypographyProps
  extends TextProps,
    ComponentBaseProps<HTMLHeadingElement>,
    React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Typography content
   */
  children: React.ReactNode;

  /**
   * Text variant
   */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2';
}

/**
 * Exported component
 */
export const Typography = ({
  children,
  variant = 'p1',
  align = 'left',
  ...restProps
}: TypographyProps) => {
  const props = { variant, align, ...restProps };
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
