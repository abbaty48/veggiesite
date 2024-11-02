import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import { Header } from '@components/header'
import Menu from "@sections/veggies/menu"
import Center from "@components/center"
import styled from "styled-components"
import { useRef } from 'react'

const Section = styled.section`
    padding: 4rem 0;
`

export default function Veggies() {
    const ref = useRef<HTMLElement | null>(null)
    const isIntersected = useIntersectionObserver(ref, { threshold: .5 })
    return (
        <Section id={'veggies'} ref={ref}>
            <Header as={'h4'}>Veggies</Header>
            <Center>
                {
                    isIntersected && (
                        <Menu>
                            <Menu.Header />
                            <Menu.MenuContent />
                        </Menu>
                    )
                }
            </Center>
        </Section>
    )
}
