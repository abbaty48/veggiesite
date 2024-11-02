import { useQuery } from "@tanstack/react-query";
import { useMenu } from "@hooks/useMenu";
import { useEffect } from "react";

export function useCategory() {
    const { setSelectedMenu } = useMenu()

    const { isLoading, isError, data } = useQuery<string[]>({
        queryKey: ['categories'],
        queryFn: () => fetch('/categories').then(res => res.json()).then(res => Array.from(res)),
    })

    useEffect(() => {
        // data && data.length && setSelectedMenu(data[0])
     }, [data, isLoading])

    return { isLoading, isError, data }
}
