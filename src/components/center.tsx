import { PropsWithChildren } from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: block;
    width: 80%;
`;


export default function Center({ children, className }: PropsWithChildren & { className?: string }) {
    return (<Wrapper className={className}>{children}</Wrapper>)
}
