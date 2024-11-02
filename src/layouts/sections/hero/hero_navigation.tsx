import styled, { css } from "styled-components";
import { useCallback, useState } from "react";
import f002 from '@features/f002.webp';

const Nav = styled.nav`
    position: relative;
    height: 100%;
`

const Hamburger = styled.a<{ $isOpen: boolean }>`
    top: .6em;
    z-index: 3;
    right: 0rem;
    display: flex;
    padding: 1em;
    cursor: pointer;
    position: absolute;
    justify-items: center;
    border-top-left-radius: 1px;
    transition: scale .5s ease;
    border-bottom-left-radius: 10px;
    background: ${props => props.$isOpen ? '#f9f9f9' : 'transparent'};

    &:hover {scale: .9}
    & > span {
        display: block;
        left: 50%;
        top: 50%;
        width: 70%;
        height: .008rem;
        background: #666;
        position: absolute;
        transform-origin: center center;
        transform: translate(-50%, -50%);
    }
    ${props => {
        switch (props.$isOpen) {
            case true: return css`
            & > span:nth-child(1) {margin: 8px -4px; rotate: 45deg; transform: translate(-12px, 0px)}
            & > span:nth-child(2) {display: none;}
            & > span:nth-child(3) {margin: 5px 0; rotate: -45deg; transform: translate(-5px, -12px)}
            `
            case false: return css`
            & > span:nth-child(1) {margin: -5px 0;}
            & > span:nth-child(2) {margin: 0 0; background: #888;}
            & > span:nth-child(3) {margin: 5px 0;}
            `
        }
    }
    }

    @media screen and (min-width: 60em) {display: none;}
`

const Menu = styled.menu<{ $isOpen: boolean }>`
    right: 0;
    top: 1rem;
    gap: 1em;
    z-index: 2;
    width: auto;
    bottom: 1rem;
    position: absolute;
    min-width: 250px;
    background: #fff;
    flex-direction: column;
    border-top-left-radius: 15px;
    padding: 3em 1em 1em 2em;
    border-bottom-left-radius: 15px;
    display: ${props => props.$isOpen ? 'flex' : 'none'};

    > a {
        color: #333;
        font-size: 1em;
        font-weight: 200;
        text-decoration: none;
        transition: all .5s ease;
        &:hover { color: orange;}
        &.active {
            position: relative;
            &::before {
                inset: 0;
                content: '';
                width: 100%;
                position: absolute;
                background: url(${f002}) no-repeat;
            }
        }
    }

    @media screen and (min-width: 60em){
        top: 0;
        gap: 4em;
        bottom: 0;
        inset: unset;
        width: 100%;
        padding: 2em;
        position: relative;
        background: none;
        flex-direction: row;
        display: inline-flex;
        align-items: center;
        padding-right: 10em;
        justify-content: flex-end;

        > a {
        &.active {
            position: relative;
            &::before {
                inset: 0;
                content: '';
                width: 100%;
                position: absolute;
                padding-bottom: 3em;
                background: url(${f002}) 50% 18px / 270% no-repeat;
                }
            }
        }
    }
`

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = useCallback((evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        evt.preventDefault();
        setIsOpen(!isOpen)
    }, [isOpen])

    return (
        <Nav>
            <Hamburger href="#" $isOpen={isOpen} onClick={handleOpen}><span></span><span></span><span></span></Hamburger>
            <Menu $isOpen={isOpen}>
                <a href="#" className={'active'}>Home</a>
                <a href="#specials">Specials</a>
                <a href="#veggies">Veggies</a>
                <a href="#us">About</a>
                <a href="#contact">Contact</a>
            </Menu>
        </Nav>
    )
}
