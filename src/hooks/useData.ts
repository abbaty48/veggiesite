import { useQuery } from "@tanstack/react-query";
import { TVeggie } from "src/libs/libs.types";

export function useVeggies(category: string) {
    const { isLoading, isError, data } = useQuery<TVeggie[]>({
        queryKey: ['veggies', { category }],
        queryFn: () => fetch(`/veggies/${category}`).then(res => res.json()).then(res => res as TVeggie[]),
    })
    return { isLoading, isError, data }
}
export function useSpecials() {
    const { isLoading, isError, data } = useQuery<TVeggie[]>({
        queryKey: ['specials-veggies'],
        queryFn: () => fetch(`/specials`).then(res => res.json()).then(res => res as TVeggie[]),
    })
    return { isLoading, isError, data }
}
