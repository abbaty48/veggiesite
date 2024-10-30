import styled from "styled-components"
import { PropsWithChildren } from "react"
import { MenuItem } from "@sections/recipes/menuItem"
import MenuContent from "@sections/recipes/menuContent"

const Wrapper = styled.div``
const MenuHeader = styled.menu`
    gap: .1rem;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
`

export default function Menu({ children }: PropsWithChildren) {
    return (<Wrapper>{children}</Wrapper>)
}

Menu.Header = MenuHeader;
Menu.MenuItem = MenuItem;
Menu.MenuContent = MenuContent;
