import gsap from 'gsap'

async function changeText(words: string[], index: number) {
    return new Promise(resolve => {
        gsap.to('#initial .title>.dynamic>.value', {
            duration: 1,
            text: words[index]
        })

        const animationCursor = gsap.timeline({ repeat: 3, repeatDelay: 0.001 })

        animationCursor.from('#initial .title>.dynamic>.cursor', {
            opacity: 0
        })

        animationCursor.to('#initial .title>.dynamic>.cursor', {
            opacity: 1
        })

        gsap.to('#initial .title>.dynamic>.value', {
            delay: 4,
            duration: 1,
            ease: 'none',
            text: {
                rtl: true,
                value: ''
            },
            onComplete() {
                resolve(true)
            }
        })
    })
}

export default changeText