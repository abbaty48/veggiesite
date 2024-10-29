import { PropsWithChildren } from "react"
import styled from "styled-components"

const Button = styled.button<{ $isActive?: boolean }>`
    border: none;
    cursor: pointer;
    font-size: 1.8rem;
    text-align: center;
    appearance: none;
    font-weight: 300;
    font-family: inherit;
    padding: 1.5rem 3rem;
    background: transparent;
    pointer-events: ${props => props.$isActive && 'none'};
    border: ${props => props.$isActive && '.1rem solid #000'};
    &:hover {color: orange;}
`

export function MenuItem({ children }: PropsWithChildren) {
    return <Button>{children}</Button>
}
