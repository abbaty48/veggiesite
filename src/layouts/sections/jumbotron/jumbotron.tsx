import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import { forwardRef, PropsWithChildren, Ref, useCallback, useRef } from 'react'
import f003 from '@features/f003.webp'
import f004 from '@features/f004.webp'
import f005 from '@features/f005.webp'
import Center from '@components/center'
import styled from 'styled-components'

const Section = styled.section`
    min-height: 40vh;
    background: hsl(49, 93%, 52%);
`

const Container = styled(Center)`
    gap: 4rem;
    display: grid;
    padding: 5rem 0;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(min(80%, 20em), 1fr));

    > figure {
        gap: 1em;
        display: flex;
        flex-flow: column;
        align-items: center;
        figcaption {font-size: 1.8rem; font-weight: bold; margin: 1rem auto; text-transform: uppercase;}
        article p {font-size: 1.6rem; font-weight: lighter; text-align: justify;}
        img {width: 100%; object-fit: contain; object-position: center; height: 100px; scale: .5}
    }
`

const Card = forwardRef(function ({ src, caption, children }: PropsWithChildren & {
    src: string, caption: string
}, ref: Ref<HTMLElement>) {
    return (<figure ref={ref}>
        <img src={src} />
        <figcaption>{caption}</figcaption>
        <article><p>{children}</p></article>
    </figure>)
})

export default function Jumbotron() {
    const ref0004 = useRef<HTMLElement | null>(null)
    const ref0005 = useRef<HTMLElement | null>(null)
    const ref0006 = useRef<HTMLElement | null>(null)

    useIntersectionObserver([ref0004, ref0005, ref0006], () => {
        animate([ref0004, ref0005, ref0006])
    })

    const animate = useCallback((refs: React.MutableRefObject<HTMLElement | null>[]) => {
        refs.forEach(ref => {
            ref.current?.animate([
                { transform: 'translateY(0px)', opacity: '0' },
                { transform: 'translateY(-30px)', opacity: 1 },
            ], { duration: 500, fill: 'both' })
        })
    }, [])

    return (<Section>
        <Container>
            <Card src={f003} caption={'Turnip Greens'} ref={ref0004}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora distinctio consequuntur officia nemo reprehenderit ullam veniam magni quos libero similique est sunt ducimus quia iste, neque harum doloremque voluptatibus mollitia?
            </Card>
            <Card src={f004} caption={'BeetRoot Water'} ref={ref0005}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem corrupti esse vel commodi dicta corporis maxime molestiae unde laudantium quam minus animi, quis, aliquid mollitia, earum excepturi alias officia.
            </Card>
            <Card src={f005} caption={'Get Social'} ref={ref0006}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati voluptates corporis amet vitae, commodi maxime minima, id architecto libero eligendi, hic consequatur ratione nam odit veniam impedit soluta tenetur.
            </Card>
        </Container>
    </Section>)
}
