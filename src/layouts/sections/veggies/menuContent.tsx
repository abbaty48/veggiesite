import { memo } from "react"
import styled from "styled-components"
import { TVeggie } from '@libs/libs.types'
import { useMenu } from "@hooks/useMenu"
import { useVeggies } from "@hooks/useData"
import { Spinner } from "@components/spinner"

const Wrapper = styled.article`
    gap: 1em;
    display: grid;
    margin: 2rem 0;
    @media screen and (min-width: 60em){
        grid-template-columns: repeat(2, 1fr);
    }
`
const DefinitionList = styled.dl`
    margin: .6rem 0;
    border-bottom: 1px solid #eee;
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
    return items.map(({ name, price, ingredients, title, imageUrl }, index) => <DefinitionList key={index}>
        <DefinitionTable>{name} <span>{price}$</span> </DefinitionTable>
        <DefinitionData>{ingredients.join(',')}</DefinitionData>
    </DefinitionList>
    )
})

export default function MenuContent() {
    const { selectMenu } = useMenu()
    const { isLoading, isError, data } = useVeggies(selectMenu)
    return (
        <>
            {isLoading && <Spinner />}
            {isError && 'Could not load data at the moment.'}
            {data && !data.length && `No available data for '${selectMenu}' yet.`}
            {data && data.length && <Wrapper><Veggies items={data} /></Wrapper>}
        </>
    )
}
