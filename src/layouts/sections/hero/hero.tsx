import Slogan from './hero_slogan'
import styled from "styled-components"
import Navigation from "./hero_navigation"
import f001 from '../../../assets/features/f001.webp'

const Header = styled.header`
    background: #fff url(${f001}) no-repeat;
    background-position: 100% 100%;
    background-size: cover;
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
