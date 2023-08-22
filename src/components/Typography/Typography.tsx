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

const typographyCommonStyles = (typographyProps: TextProps) => {
  return css`
    color: ${(props) => props.theme.colors.grayScale.digitalBlack};
    text-align: ${typographyProps.align};
  `;
};

/**
 * Internal component styling
 */
const CaptionComponent = styled.caption<TextProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent1 = styled.h1<TextProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent2 = styled.h2<TextProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent3 = styled.h3<TextProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent4 = styled.h4<TextProps>`
  ${typographyCommonStyles};
`;
const ParagraphComponent1 = styled.p<TextProps>`
  ${typographyCommonStyles};
`;
const ParagraphComponent2 = styled.p<TextProps>`
  ${typographyCommonStyles};
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
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
  variant: 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2';
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

  switch (variant) {
    case 'caption':
      return <CaptionComponent {...props}>{children}</CaptionComponent>;
    case 'h1':
      return <HeaderComponent1 {...props}>{children}</HeaderComponent1>;
    case 'h2':
      return <HeaderComponent2 {...props}>{children}</HeaderComponent2>;
    case 'h3':
      return <HeaderComponent3 {...props}>{children}</HeaderComponent3>;
    case 'h4':
      return <HeaderComponent4 {...props}>{children}</HeaderComponent4>;
    case 'p1':
      return <ParagraphComponent1 {...props}>{children}</ParagraphComponent1>;
    case 'p2':
      return <ParagraphComponent2 {...props}>{children}</ParagraphComponent2>;
  }
};
