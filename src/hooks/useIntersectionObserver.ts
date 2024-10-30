import { useEffect } from "react";

export function useIntersectionObserver(refs: React.MutableRefObject<HTMLElement | null>[],
    whenIntersectCallback: CallableFunction ): void
export function useIntersectionObserver(refs: React.MutableRefObject<HTMLElement | null>[],
    whenIntersectCallback?: CallableFunction): void
export function useIntersectionObserver(refs: React.MutableRefObject<HTMLElement | null>[],
    whenIntersectCallback?: CallableFunction,
    options?: IntersectionObserverInit,
): void
{
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    whenIntersectCallback?.();
                }
            })
        })
        refs.forEach(ref => {
            if (observer && ref.current) { observer.observe(ref.current) }
        })
        return () => { observer.disconnect() }
    }, [refs, options])
}
