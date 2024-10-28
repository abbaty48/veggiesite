import f003 from '../../../assets/features/f003.webp'
import f004 from '../../../assets/features/f004.webp'
import f005 from '../../../assets/features/f005.webp'
import Center from '../../../components/center'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    min-height: 40vh;
    background: hsl(49, 93%, 52%);
`

const Container = styled(Center)`
    gap: 4em;
    display: grid;
    align-items: center;
    padding: 2em .50em;
    grid-template-columns: repeat(auto-fit, minmax(min(80%, 20em), 1fr));

    > figure {
        gap: 1em;
        display: flex;
        flex-flow: column;
        align-items: center;
        figcaption {font-size: 1.8em; font-weight: bold; margin: 1em auto;}
        article p {font-size: 1.6rem; font-weight: light;}
    }
`

function Card({ src, caption, children }: PropsWithChildren & { src: string, caption: string }) {
    return (<figure>
        <img src={src} />
        <figcaption>{caption}</figcaption>
        <article><p>{children}</p></article>
    </figure>)
}

export default function Jumbotron() {
    return (<Section>
        <Container>
            <Card src={f003} caption={'Turnip Greens'}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora distinctio consequuntur officia nemo reprehenderit ullam veniam magni quos libero similique est sunt ducimus quia iste, neque harum doloremque voluptatibus mollitia?
            </Card>
            <Card src={f004} caption={'BeetRoot Water'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem corrupti esse vel commodi dicta corporis maxime molestiae unde laudantium quam minus animi, quis, aliquid mollitia, earum excepturi alias officia.
            </Card>
            <Card src={f005} caption={'Get Social'}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati voluptates corporis amet vitae, commodi maxime minima, id architecto libero eligendi, hic consequatur ratione nam odit veniam impedit soluta tenetur.
            </Card>
        </Container>
    </Section>)
}
