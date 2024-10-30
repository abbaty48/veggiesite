import styled from "styled-components"
import f002 from '@features/f002.webp'

const Article = styled.article`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 60em){
            & {
                left: auto;
                right: 30%;
                transform: translate(50%, -50%)
            }
    }

    &::after {
        content: '';
        width: 50%;
        position: absolute;
        padding-bottom: 5em;
        left: 50%;
        transform: translateX(-50%);
        background: url(${f002}) 50% 20px / 70% no-repeat;
    }
    h1 {
        position: relative;
        text-align: center;

        @media screen and (min-width: 60em){
            & {
                font-size: 4rem;
                font-weight: 200;
                color: #3c3c3c;
            }
        }
    }
`
export default function HeroSlogan() {
    return (
        <Article>
            <h1>
                Veggies, home of easy and healthy <br />
                meals recipes for delightful.
            </h1>
        </Article>
    )
}
