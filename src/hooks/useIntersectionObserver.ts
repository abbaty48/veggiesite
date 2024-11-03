import { useEffect, useState } from "react";

type TRef = React.MutableRefObject<HTMLElement | null>;
type TCallback = CallableFunction;
type TObserverInit = IntersectionObserverInit

export function useIntersectionObserver(ref: TRef | TRef[], options?: TObserverInit, whenIntersectCallback?: TCallback): boolean
{
    const [isIntersected, setIsIntersected] = useState(false)

    useEffect(() => {
        if ('length' in ref) {
            const observer = new IntersectionObserver((entries) => {
                if(entries.some(entry => entry.isIntersecting)) {
                    whenIntersectCallback?.();
                }
            }, options)
            ref.forEach(ref => {
                if (observer && ref.current) { observer.observe(ref.current) }
            })
            return () => {
                ref.forEach(ref => {
                    if (observer && ref.current) { observer.unobserve(ref.current) }
                })
            }
        } else {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersected(true)
                    whenIntersectCallback?.();
                }
            }, options)
            if (observer && ref.current) { observer.observe(ref.current) }
            return () => {
                setIsIntersected(false)
                if (observer && ref.current) { observer.unobserve(ref.current) }
            }
        }
    }, [ref])

    return isIntersected
}
