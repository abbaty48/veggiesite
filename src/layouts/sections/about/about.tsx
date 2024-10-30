import { useIntersectionObserver } from "@hooks/useIntersectionObserver"
import { Header } from "@components/header"
import { useRef, useCallback } from "react"
import Center from "@components/center"
import styled from "styled-components"
import f012 from '@features/f012.webp'
import f013 from '@features/f013.webp'

const Section = styled.section`
    padding: 8em 0;
    min-height: 100dvh;
    background: hsl(180, 3%, 94%);
`

const Container = styled(Center)`
    display: flex;
    flex-flow: wrap;
`

const Article = styled.article`
    text-align: center;
    position: relative;
`

const Description = styled.p`
    line-height: 5.4rem;
    font-size: clamp(1.5rem, 3vw, 3.5rem);
`

const Signature = styled.img`
    right: 1rem;
    margin: 2em;
    @media screen and (min-width: 60rem) {
        position: absolute;
    }
`

const Feature = styled.img`
    width: 100%;
    object-fit: cover;

    @media screen and (min-width: 60rem) {
        width: 50%;
    }
`

export default function Us() {
    const ref0012 = useRef<HTMLElement | null>(null)
    useIntersectionObserver([ref0012], () => {
        animate([ref0012])
    })

    const animate = useCallback((refs: React.MutableRefObject<HTMLElement | null>[]) => {
        refs.forEach(ref => {
            ref.current?.animate([
                { transform: 'translateY(0px)', opacity: '0' },
                { transform: 'translateY(-30px)', opacity: 1 },
            ], { duration: 500, fill: 'both' })
        })
    }, [])
    return (<Section id={'us'}>
        <Container>
            <Article>
                <Header>About us</Header>
                <Description>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</Description>
                <Signature src={f013} />
            </Article>
            <Feature src={f012} ref={ref0012}/>
        </Container>
    </Section>)
}
