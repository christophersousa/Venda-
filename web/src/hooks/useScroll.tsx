import { useState } from "react";

export function useScroll(){

    const [viewBtScroll, setViewBtScroll] = useState('none')

    function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
            setViewBtScroll("block");
        } else {
            setViewBtScroll("none");
        }
    }

    function backToTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }

    return{viewBtScroll, scrollFunction, backToTop}
}