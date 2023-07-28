import { useEffect } from "react"

export const useNoScroll = (condition:boolean) => {
    useEffect(() => {
        document.body.style.overflowY = condition ? "hidden" : "visible";
    }, [condition]);
};