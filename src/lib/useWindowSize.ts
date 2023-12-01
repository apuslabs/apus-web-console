import {useEffect, useState } from "react";

export default function useWindowSize() {
    const [state, setState] = useState<{ width: number; height: number }>({
        width: 1024,
        height: 1024,
    });
    useEffect(() => {
        setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        const listener = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])
    return state;
}