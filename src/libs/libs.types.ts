export type TVeggies = {
    category: string,
    veggies: TVeggie[]
}[]

export type TVeggie = { name: string, title: string, price: number, type: string, ingredients: string[], imageUrl: string }
