import { memo } from "react"
import styled from "styled-components"

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

type TRecipe = { name: string, price: number, ingredients: string[] }
const _items: TRecipe[] = [
    { name: 'SMOKED RICOTTA TERRINE', price: 12, ingredients: ['ricotta', 'shallots', 'cheddar', 'capers'] },
    { name: 'SAMPHIRE FRITTERS WITH FENNEL CEVICHE', price: 13, ingredients: ['fresh', 'samphire', 'plain', 'flour', 'cornflower', 'eggs', 'fennel'] },
    { name: 'PAN FRIED COURGETTE FLOWERS', price: 17, ingredients: ['courgette', 'flowers', 'goats', 'cheese', 'red onion', 'pine nuts'] },
]

const __items = Array.from({ length: 20 }, () => ({ ..._items[Math.floor(Math.random() * _items.length)] }))

const Recipes = memo(function ({ items }: { items: TRecipe[] }) {
    return items.map(({ name, price, ingredients }) => <DefinitionList>
        <DefinitionTable>{name} <span>{price}$</span> </DefinitionTable>
        <DefinitionData>{ingredients.join(',')}</DefinitionData>
    </DefinitionList>
    )
})

export default function MenuContent() {
    return (<Wrapper>
        <Recipes items={__items} />
    </Wrapper>)
}
