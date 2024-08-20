import { useState, useEffect } from 'react'

function useSlidesPerView() {
    const [slidesPerView, setSlidesPerView] = useState<number>(2)

    function handleResize() {
        setSlidesPerView(window.innerWidth <= 900 ? 2 : 5)
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return slidesPerView
}

export default useSlidesPerView