import React from 'react'
import { LoadingIndicatorBaseProps} from "../../shared";

/**
 * Linear loading indicator component properties
 */
export interface CircularLoadingIndicatorBaseProps
    extends LoadingIndicatorBaseProps {
}

export const CircularLoadingIndicatior = ({  progress,
    determinate,
    indicatorStyle, ...restProps}:LoadingIndicatorBaseProps) => {

    return (
        <></>
    )

}