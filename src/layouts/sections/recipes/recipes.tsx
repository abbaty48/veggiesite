import { Header } from '../../../components/header'
import Center from "../../../components/center"
import styled from "styled-components"
import Menu from "./menu"

const Section = styled.section`
    padding: 4rem 0;
`

export default function Recipes() {
    return (<Section id={'recipes'}>
        <Header>Recipes</Header>
        <Center>
            <Menu>
                <Menu.Header>
                    <Menu.MenuItem>Starters</Menu.MenuItem>
                    <Menu.MenuItem>Main Dishes</Menu.MenuItem>
                    <Menu.MenuItem>Desserts</Menu.MenuItem>
                    <Menu.MenuItem>Drinks</Menu.MenuItem>
                </Menu.Header>
                <Menu.MenuContent />
            </Menu>
        </Center>
    </Section>)
}
