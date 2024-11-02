import styled from 'styled-components'
import f002 from '../assets/features/f002.webp'

export const Header = styled.h2`
    margin: 2em auto;
    text-align: center;
    font-weight: 100;
    position: relative;
    font-size: 4rem;
    margin-top: 0;
    width: auto;

    &::after {
        content: '';
        left: 50%;
        width: 80%;
        display: block;
        position: absolute;
        padding-bottom: 8rem;
        transform: translateX(-50%);
        background: url(${f002}) 50% 10px / 50% no-repeat;
    }

    @media screen and (min-width: 60em){
            &::after {
                width: 80%;
                background: url(${f002}) 50% 20px / 20% no-repeat;
            }
    }
`
