import { useIntersectionObserver } from "@hooks/useIntersectionObserver"
import { Spinner } from "@components/spinner"
import { useSpecials } from "@hooks/useData"
import Center from "@components/center"
import f002 from '@features/f002.webp'
import { useMemo, useRef } from "react"
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
    min-height: 100px;
    min-width: 100px;
    object-fit: cover;
    background: #f9f9f9;
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
    font-size: 100%;
`

const Price = styled.p`
    font-weight: bold;
    line-height: 30px;
    font-size: 1.8rem;
`

export default function Specials() {
    const ref = useRef<HTMLElement | null>(null)
    const isIntersected = useIntersectionObserver(ref)
    const { isLoading, data } = useSpecials()

    const SpecialVeggies = useMemo(() => {
        let col = 1;
        let row = 1;
        return (
            data && data.length && data.map(({ name, title, price, imageUrl }, i) => {
                col = i % 3 === 0 ? 1 : col + 1;
                row = i % 3 === 0 ? row + 1 : row;
                return (
                    <Figure key={i} $col={col} $row={row}>
                        <Image src={imageUrl} alt={title} />
                        <FigContent>
                            <Caption>{name}</Caption>
                            <Description>{title}</Description>
                            <Price>{price}$</Price>
                        </FigContent>
                    </Figure>
                )
            }
            )
        )
    }, [data, isLoading])

    return (<Section id={"specials"} ref={ref}>
        <Header>This Month Specials</Header>
        {isLoading && <Spinner />}
        {isIntersected &&
            <GridContainer>
                {SpecialVeggies}
            </GridContainer>
        }
    </Section>
    )
}
