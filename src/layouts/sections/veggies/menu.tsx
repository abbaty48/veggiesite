import { memo, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react"
import { MenuContext } from "@states/context/menuContext"
import MenuContent from "@sections/veggies/menuContent"
import { MenuItem } from "@sections/veggies/menuItem"
import TextLoading from "@components/textLoading"
import { useCategory } from "@hooks/useCategory"
import { useMenu } from '@hooks/useMenu'
import styled from "styled-components"

const Wrapper = styled.div``
const Header = styled.menu`
    gap: .1rem;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
`

export default function Menu({ children }: PropsWithChildren) {
    const [selectMenu, setSelectMenu] = useState('' as string);
    const setSelectedMenu = useCallback((menu: string) => setSelectMenu(menu), [])
    return (
        <MenuContext.Provider value={{ selectMenu, setSelectedMenu }}>
            <Wrapper>{children}</Wrapper>
        </MenuContext.Provider>
    )
}

const MenuHeader = memo(() => {
    const { data, isLoading, isError } = useCategory();
    const { setSelectedMenu } = useMenu()

    const MenuItems = useMemo(() => {
        if (isLoading) return <TextLoading>Getting Veggies menu</TextLoading>
        else if (isError) return 'Veggies menu not available yet.'
        else if (data && data.length) {
            return data.map(cat => <Menu.MenuItem key={cat.toLowerCase()}>{cat}</Menu.MenuItem>)
        } else {
            return 'Menus not available at the moment.'
        }
    }, [data])

    useEffect(() => {
        data && data.length && setSelectedMenu(data[0]);
    }, [data])

    return <Header>
        {MenuItems}
    </Header>
})

Menu.Header = MenuHeader;
Menu.MenuItem = MenuItem;
Menu.MenuContent = MenuContent;
