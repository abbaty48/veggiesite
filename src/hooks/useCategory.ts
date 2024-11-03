import { useQuery } from "@tanstack/react-query";

export function useCategory() {
    const { isLoading, isError, data } = useQuery<string[]>({
        queryKey: ['categories'],
        queryFn: () => fetch('/categories').then(res => res.json()).then(res => Array.from(res)),
    })
    return { isLoading, isError, data }
}
