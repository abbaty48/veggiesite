import { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

interface IProps extends PropsWithChildren {
    className?: string;
    styles?: React.CSSProperties;
}

const Rotate = keyframes`
        0% {transform: rotate(0deg);
        }100% {transform: rotate(360deg);}
`

const DefaultSpinner = styled.div`
    width: 50px;
    height: 50px;
    margin: auto;
    min-width: 10px;
    min-height: 10px;
    border-radius: 50%;
    border: 0 solid transparent;
    border-top: 0.1rem solid #333333;
    animation: ${Rotate} 1s linear infinite;
`

export const Spinner: React.FC<IProps> = (props) => {
    return (
        <DefaultSpinner
            style={props.styles}
            className={props.className}
        >{props.children}</DefaultSpinner>
    );
};
