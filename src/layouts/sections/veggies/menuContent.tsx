import { memo } from "react"
import styled from "styled-components"
import { TVeggie } from '@libs/libs.types'
import { useMenu } from "@hooks/useMenu"
import { useVeggies } from "@hooks/useData"
import { Spinner } from "@components/spinner"

const Container = styled.article`
    gap: 1em;
    display: grid;
    text-align: left;
    @media screen and (min-width: 60em){
        grid-template-columns: repeat(2, 1fr);
    }
    `
const Wrapper = styled.article`
    margin: 2rem 0;
    text-align: center;
`
const DefinitionList = styled.dl`
    margin: .6rem 0;
    border-bottom: 1px solid #eee;
    transition: all .3s ease-in;
    &:hover {background: #f9f9f9; padding: 1rem 1.5rem; scale: 0.9; cursor: pointer; border-radius: .5rem;}
    @media screen and (min-width: 60em){
        border-bottom: none;
    }
`
const DefinitionTable = styled.dt`
    display: flex;
    font-size: 1.8rem;
    font-weight: lighter;
    line-height: 5.4rem;
    align-items: center;
    justify-content: space-between;
    & > span {color: orange; align-self: flex-end;}
`
const DefinitionData = styled.dd`
    font-style: italic;
    font-weight: 200;
    font-size: 1.4rem;
    word-break: break-all;
    word-wrap: break-word;
`

const Veggies = memo(function ({ items }: { items: TVeggie[] }) {
    return items.map(({ name, price, ingredients, title, imageUrl }, index) => (
        <DefinitionList key={index} title={title}>
            <DefinitionTable>{name} <span>{price}$</span> </DefinitionTable>
            <DefinitionData>{ingredients.join(',')}</DefinitionData>
        </DefinitionList>)
    )
})

export default function MenuContent() {
    const { selectMenu } = useMenu()
    const { isLoading, data } = useVeggies(selectMenu)
    return (
        <Wrapper>
            {
                isLoading ? <Spinner /> :
                        data && !data.length ? <p>No available data for '${selectMenu}' yet.</p> :
                            data && data.length ? <Container><Veggies items={data} /></Container> : null
            }
        </Wrapper>
    )
}
