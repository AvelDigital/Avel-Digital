import blogs from '../../services/blogs'
import { Container, Title, Blogs, Blog, BlogImage, BlogTitle, BlogDescription } from './style'
import { ButtonLink } from '../Button'

function Insights() {
    return (
        <Container id="insights">
            <Title>Insights</Title>
            <Blogs>
                {blogs.map((blog, index) => (
                    <Blog href={`/blog/${blog.slug}`} key={index}>
                        <BlogImage placeholder="blur" src={blog.image.src} alt={blog.image.alt}/>
                        <BlogTitle>{blog.title}</BlogTitle>
                        <BlogDescription>{blog.description}</BlogDescription>
                    </Blog>
                ))}
            </Blogs>
            <ButtonLink $align="center" href="/contact">Quero uma consultoria gratuita</ButtonLink>
        </Container>
    )
}

export default Insights