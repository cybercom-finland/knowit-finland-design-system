import React from 'react'
import {ComponentBaseProps, generateRandomString} from "../../shared";
import styled from "styled-components";

export interface BreadcrumbProps extends ComponentBaseProps<HTMLDivElement> {
    /**
     * Children
     */
    children?: React.ReactNode,
}
const BreadcrumbWrapper = styled.div<BreadcrumbProps> `
    display: flex;
  flex-direction: row;
`
export const Breadcrumb = ({id, children}:BreadcrumbProps) => {
    const componentId = id ?? generateRandomString(5);
    return (
        <BreadcrumbWrapper id={componentId}>
        {children}
        </BreadcrumbWrapper>)
}