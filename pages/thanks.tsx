import Head from '../components/Head'
import Header from '../components/Header'
import { Main, Title, Subtitle } from '../styles/pages/thanks'
import Footer from '../components/Footer'

function Thanks() {
    return <>
        <Head url="/thanks" description="Obrigado!"/>
        <Header/>
            <Main>
                <Title>Obrigado! </Title>
                <Subtitle>Seu contato foi enviado, em breve nosso time vai falar em você</Subtitle>
            </Main>
        <Footer/>
    </>
}

export default Thanks