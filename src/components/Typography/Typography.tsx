import React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '../../shared';

/**
 * Internal properties for styles
 */
interface InnerProps {
  /**
   * Alignment of text
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
}

const typographyCommonStyles = (typographyProps: InnerProps) => {
  return css`
    color: ${(props) => props.theme.colors.digitalBlack};
    text-align: ${typographyProps.align};
  `;
};

/**
 * Internal component styling
 */
const CaptionComponent = styled.caption<InnerProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent1 = styled.h1<InnerProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent2 = styled.h2<InnerProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent3 = styled.h3<InnerProps>`
  ${typographyCommonStyles};
`;
const HeaderComponent4 = styled.h4<InnerProps>`
  ${typographyCommonStyles};
`;
const ParagraphComponent1 = styled.p<InnerProps>`
  ${typographyCommonStyles};
`;
const ParagraphComponent2 = styled.p<InnerProps>`
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
  extends InnerProps,
    React.HTMLAttributes<HTMLElement> {
  /**
   * Typography content
   */
  children: string;
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
  ...props
}: TypographyProps) => {
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
