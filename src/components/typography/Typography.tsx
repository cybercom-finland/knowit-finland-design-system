import React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '../../shared';

/**
 * Internal properties for styles
 */
interface InnerProps {
  /**
   * Alignment of text
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  /**
   * Color of text
   */
  color?: string;
  /**
   * Margin as defined spacing
   */
  margin?: number | number[];
}

/**
 * Internal component styling
 */
const CaptionComponent = styled.caption<InnerProps>`
  color: ${({ color }) => color || 'inherit'};
  margin: ${({ margin }) => spacing(margin)};
  text-align: ${({ align }) => align};
`;
const HeaderComponent1 = styled.h1<InnerProps>`
  margin: ${({ margin }) => spacing(margin)};
  text-align: ${({ align }) => align};
`;
const HeaderComponent2 = styled.h2<InnerProps>`
  margin: ${({ margin }) => spacing(margin)};
  text-align: ${({ align }) => align};
`;
const HeaderComponent3 = styled.h3<InnerProps>`
  margin: ${({ margin }) => spacing(margin)};
  text-align: ${({ align }) => align};
`;
const HeaderComponent4 = styled.h4<InnerProps>`
  margin: ${({ margin }) => spacing(margin)};
  text-align: ${({ align }) => align};
`;
const ParagraphComponent1 = styled.p<InnerProps>`
  color: ${({ color }) => color || 'inherit'};
  margin: ${({ margin }) => spacing(margin)};
  text-align: ${({ align }) => align};
`;
const ParagraphComponent2 = styled.p<InnerProps>`
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  margin: ${({ margin }) => spacing(margin)};
  text-align: ${({ align }) => align};
`;

/**
 * External properties
 */
interface Props extends InnerProps {
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
export const Typography = ({ children, variant = 'p1', ...props }: Props) => {
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
