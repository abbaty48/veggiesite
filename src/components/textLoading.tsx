import { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

const Ticking = keyframes`
    50% {opacity: 1;}
`

const Span = styled.span`
    gap: .1rem;
    margin: auto;
    display: inline-flex;
    align-items: first baseline;

    & > i {
        opacity: 1;
        width: .2rem;
        height: .2rem;
        border: none;
        background: #333;
        border-radius: 50%;

        &:nth-child(2),
        &:nth-child(3) {
            opacity: 0;
            animation: ${Ticking} 2s linear infinite;
        }

        &:nth-child(2) {animation-delay: 0.5s;}
        &:nth-child(3) {animation-delay: 1s;};
    }
`
export default function TextLoading({ children }: PropsWithChildren) {
    return (<Span aria-label={children as string}>{children}
        <i aria-hidden></i><i aria-hidden></i><i aria-hidden></i>
    </Span>)
}
