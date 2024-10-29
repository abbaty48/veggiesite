import f002 from '../../../assets/features/f002.webp'
import f006 from '../../../assets/features/f006.webp'
import f007 from '../../../assets/features/f007.webp'
import f008 from '../../../assets/features/f008.webp'
import f009 from '../../../assets/features/f009.webp'
import f010 from '../../../assets/features/f010.webp'
import f011 from '../../../assets/features/f011.webp'
import Center from "../../../components/center"
import styled from "styled-components"

const Section = styled.section`
    padding: 5em 0;
`

const Header = styled.h1`
    margin: 3em auto;
    margin-top: 0;
    text-align: center;
    position: relative;
    font-weight: 200;
    font-size: 4rem;
    width: auto;

    &::after {
        content: '';
        width: 80%;
        display: block;
        position: absolute;
        left: 50%;
        padding-bottom: 8rem;
        transform: translateX(-50%);
        background: url(${f002}) 50% 10px / 50% no-repeat;
    }

    @media screen and (min-width: 60em){
            &::after {
                width: 80%;
                background: url(${f002}) 50% 20px / 20% no-repeat;
            }
    }
`

const GridContainer = styled(Center)`
    display: grid;
    gap: 1em;

    @media screen and (min-width: 60em) {gap: 0;}
`

const Figure = styled.figure<{ $col: number, $row: number }>`
    display: flex;
    flex-flow: wrap;

    @media screen and (min-width: 60em){
        display: grid;
        align-items: stretch;
        grid-template-columns: repeat(2,1fr);
        grid-row: ${props => props.$row};
        grid-column: ${props => props.$col};
    }
`

const Image = styled.img`
    flex: 1;
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
`

const FigContent = styled.figcaption`
    flex: 1;
    gap: 3rem;
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    padding: .5rem 2rem;
    justify-content: center;
    flex-direction: column;
    background: #ebebeb;
`

const Caption = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    position: relative;
    &::after {
        left: 50%;
        content: '';
        height: .5px;
        width: 80%;
        display: block;
        position: absolute;
        margin: .3rem auto;
        transform: translateX(-50%);
        background: hsl(0, 0%, 24%);
    }
`

const Description = styled.p`
    font-weight: lighter;
    /* line-height: 1.8rem; */
    font-size: 100%;
`

const Price = styled.p`
    font-weight: bold;
    line-height: 30px;
    font-size: 1.8rem;
`

export default function Specials() {
    return (<Section id={"specials"}>
        <Header>This Month Specials</Header>
        <GridContainer>
            <Figure $col={1} $row={1}>
                <Image src={f006} />
                <FigContent>
                    <Caption>Greens Fava</Caption>
                    <Description>Lorem Ipsum dolor sit Pallentesque vel enim a.</Description>
                    <Price>17$</Price>
                </FigContent>
            </Figure>
            <Figure $col={2} $row={1}>
                <Image src={f007} />
                <FigContent>
                    <Caption>Celery Quandong</Caption>
                    <Description>Lorem Ipsum dolor sit Pallentesque vel enim a.</Description>
                    <Price>30$</Price>
                </FigContent>
            </Figure>
            <Figure $col={3} $row={1}>
                <Image src={f008} />
                <FigContent>
                    <Caption>Pea Horseradish</Caption>
                    <Description>Lorem Ipsum dolor sit Pallentesque vel enim a.</Description>
                    <Price>25$</Price>
                </FigContent>
            </Figure>
            <Figure $col={1} $row={2}>
                <FigContent>
                    <Caption>Soko Ridicciho</Caption>
                    <Description>Lorem Ipsum dolor sit Pallentesque vel enim a.</Description>
                    <Price>7$</Price>
                </FigContent>
                <Image src={f009} />
            </Figure>
            <Figure $col={2} $row={2}>
                <FigContent>
                    <Caption>Tiger Nut</Caption>
                    <Description>Lorem Ipsum dolor sit Pallentesque vel enim a.</Description>
                    <Price>3$</Price>
                </FigContent>
                <Image src={f010} />
            </Figure>
            <Figure $col={3} $row={2}>
                <FigContent>
                    <Caption>Yellow Sweet</Caption>
                    <Description>Lorem Ipsum dolor sit Pallentesque vel enim a.</Description>
                    <Price>5$</Price>
                </FigContent>
                <Image src={f011} />
            </Figure>
        </GridContainer>
    </Section>
    )
}
