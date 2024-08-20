import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import words from './words'
import changeText from './changeText'

function useAnimation() {
    useGSAP(() => {
        gsap.registerPlugin(useGSAP,TextPlugin)

        async function start() {
            while (true) {
                for (let word in words) {
                    await changeText(words, Number(word))
                }
            }
        }

        start().then()
    }, [])
}

export default useAnimation