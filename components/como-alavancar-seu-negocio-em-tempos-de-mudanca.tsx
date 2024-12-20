import blogs from '../services/blogs'
import Head from './Head'
import Header from './Header'
import { Main, Title, About, Image, Subtitle, Paragraph, List, ListItem, Bold } from '../styles/pages/blogs/blog'
import Footer from './Footer'

function Blog() {
    const blog = blogs[0]

    return <>
        <Head
            title={blog.title}
            author={blog.author}
            url={`/blog/${blog.slug}`}
            image={blog.image.src.src}
            description={blog.description}
        />
        <Header black/>
        <Main>
            <Title>{blog.title}</Title>
            <About>{blog.author} • {blog.date}</About>
            <Image placeholder="blur" src={blog.image.src} alt={blog.image.alt}/>
            <Subtitle>A Nova Era dos Negócios</Subtitle>
            <Paragraph>Vivemos em uma época de mudanças constantes, onde a adaptabilidade se tornou a chave para o sucesso. As transformações tecnológicas e comportamentais têm impactado profundamente a forma como fazemos negócios, exigindo que empresas de todos os tamanhos repensem suas estratégias e abordagens. Nesse cenário, entender as tendências e saber como aplicá-las pode ser a diferença entre estagnar ou crescer.</Paragraph>
            <Subtitle>Entendendo o Novo Consumidor</Subtitle>
            <Paragraph>O consumidor de hoje está mais informado, exigente e conectado. Ele busca não apenas produtos ou serviços, mas experiências que agreguem valor à sua vida. A capacidade de entender o comportamento do consumidor e antecipar suas necessidades tornou-se essencial para qualquer negócio que deseja se manter relevante.</Paragraph>
            <List>
                <ListItem><Bold>Personalização</Bold>: Ofereça experiências personalizadas para criar conexões mais profundas com seus clientes.</ListItem>
                <ListItem><Bold>Valor agregado</Bold>: Não basta vender; é preciso entregar algo a mais, seja na forma de conteúdo útil, suporte de qualidade ou inovação.</ListItem>
            </List>
            <Subtitle>A Importância de Uma Estratégia Adaptativa</Subtitle>
            <Paragraph>Em um ambiente de constante mudança, ter uma estratégia adaptativa é crucial. Isso significa estar preparado para ajustar suas táticas rapidamente, com base em dados reais e feedback contínuo. A flexibilidade permite que sua empresa responda às novas demandas do mercado com agilidade e eficiência.</Paragraph>
            <List>
                <ListItem><Bold>Análise de dados</Bold>: Utilize ferramentas de análise para entender o que está funcionando e onde há espaço para melhorias.</ListItem>
                <ListItem><Bold>Inovação constante</Bold>: Mantenha-se atualizado com as tendências e seja proativo na implementação de novas ideias.</ListItem>
            </List>
            <Subtitle>Construindo Parcerias Estratégicas</Subtitle>
            <Paragraph>Nenhuma empresa cresce sozinha. Formar parcerias estratégicas pode ser um diferencial competitivo, permitindo acesso a novos mercados, compartilhamento de conhecimento e recursos, além de fortalecer sua presença no mercado.</Paragraph>
            <List>
                <ListItem><Bold>Colaboração</Bold>: Busque parcerias com empresas que compartilhem dos mesmos valores e que possam complementar sua oferta.</ListItem>
                <ListItem><Bold>Redes de contatos</Bold>: Expanda sua rede de contatos e aproveite as oportunidades que surgem a partir dessas conexões.</ListItem>
            </List>
            <Subtitle>O Papel da Inovação na Sustentabilidade do Negócio</Subtitle>
            <Paragraph>A inovação não é apenas sobre tecnologia, mas também sobre processos, produtos e modelos de negócios. Empresas que investem em inovação são mais capazes de se adaptar às mudanças e garantir a sustentabilidade a longo prazo.</Paragraph>
            <List>
                <ListItem><Bold>Investimento em tecnologia</Bold>: Considere investir em novas tecnologias que possam otimizar suas operações e melhorar a experiência do cliente.</ListItem>
                <ListItem><Bold>Cultura de inovação</Bold>: Incentive uma cultura interna que valorize a criatividade e a experimentação.</ListItem>
            </List>
            <Subtitle>Prepare Seu Negócio para o Futuro</Subtitle>
            <Paragraph>O sucesso em tempos de mudança requer visão, adaptabilidade e a vontade de inovar. Ao entender o novo cenário, ajustar sua estratégia e formar parcerias estratégicas, você estará preparando sua empresa para enfrentar os desafios do futuro com confiança.</Paragraph>
            <Paragraph><Bold>Call-to-Action:</Bold> Pronto para transformar seu negócio? Descubra como podemos ajudá-lo a se adaptar e crescer em um mercado em constante evolução. Fale conosco hoje mesmo e saiba mais sobre nossas soluções.</Paragraph>
            <Paragraph>Esse texto é genérico o suficiente para atrair uma variedade de leads, ao mesmo tempo em que guia o leitor de forma sutil para a importância de serviços como assessoria ou consultoria, sem ser explícito demais.</Paragraph>
        </Main>
        <Footer/>
    </>
}

export default Blog