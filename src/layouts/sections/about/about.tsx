import styled from "styled-components"
import Center from "../../../components/center"
import f012 from '../../../assets/features/f012.webp'
import f013 from '../../../assets/features/f013.webp'
import f002 from '../../../assets/features/f002.webp'

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

const Header = styled.h2`
    font-size: 4rem;
    position: relative;
    font-weight: 300;
    line-height: 5.5rem;
    margin: 8rem auto;
    margin-top: 0;

    &::after {
        content: '';
        left: 50%;
        width: 50%;
        display: block;
        position: absolute;
        padding-bottom: 8rem;
        transform: translateX(-50%);
        background: url(${f002}) 50% 10px / 50% no-repeat;
    }
`

const Description = styled.p`
    font-weight: 300;
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
    return (<Section id={'us'}>
        <Container>
            <Article>
                <Header>About us</Header>
                <Description>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</Description>
                <Signature src={f013} />
            </Article>
            <Feature src={f012} />
        </Container>
    </Section>)
}
