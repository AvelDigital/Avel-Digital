import Head from '../components/Head'
import Header from '../components/Header'
import { Main, Texts, Title, Subtitle } from '../styles/pages/contact'
import FormContact from '../components/FormContact'
import About from '../components/About'
import Footer from '../components/Footer'

function Contact() {
    return <>
        <Head title="Fale Conosco" description="Fale Conosco" url="/contact"/>
        <Header black/>
        <Main>
            <Texts>
                <Title>Fale Conosco</Title>
                <Subtitle>Tem uma dúvida ou desafio? Fale com a gente e descubra como podemos levar sua empresa ao próximo nível.</Subtitle>
            </Texts>
            <FormContact/>
            <About CTA={false}/>
        </Main>
        <Footer/>
    </>
}

export default Contact