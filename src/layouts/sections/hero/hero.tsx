import Slogan from './hero_slogan'
import styled from "styled-components"
import f001 from '@features/f001.webp'
import Navigation from "./hero_navigation"

const Header = styled.header`
    background: #fff url(${f001}) 100%/ cover no-repeat fixed;
    position: relative;
    height: 70vmin;

    @media screen and (min-width: 60em){
        background-size: cover;
        height: 100vh;
    }
`

export default function Hero() {
    return (<Header>
        <Navigation />
        <Slogan />
    </Header>)
}
