import Head from '../components/Head'
import Header from '../components/Header'
import { Main, FormContainer } from '../styles/pages'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import Initial from '../components/Initial'
import FormContact from '../components/FormContact'
import Showcase from '../components/Showcase'
import About from '../components/About'
import Branches from '../components/Branches'
import Partners from '../components/Partners'
import Strategies from '../components/Strategies'
import Marketing from '../components/Marketing'
import Community from '../components/Community'
import Insights from '../components/Insights'
import Footer from '../components/Footer'

function Home() {
    return <>
        <Head/>
        <Header/>
        <Main>
            <ButtonWhatsapp/>
            <Initial/>
            <FormContainer>
                <FormContact/>
            </FormContainer>
            <Showcase/>
            <About/>
            <Branches/>
            <Partners/>
            <Strategies/>
            <Marketing/>
            <Community/>
            <Insights/>
        </Main>
        <Footer/>
    </>
}

export default Home