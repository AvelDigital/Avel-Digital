import blogs from '../../services/blogs'
import { Container, Title, Blogs, Blog, BlogImage, BlogTitle, BlogDescription, Button } from './style'

function Insights() {
    return (
        <Container id="insights">
            <Title>Insights</Title>
            <Blogs>
                {blogs.map((blog, index) => (
                    <Blog href={`/blog/${blog.slug}`} key={index}>
                        <BlogImage src={blog.image.src} alt={blog.image.alt}/>
                        <BlogTitle>{blog.title}</BlogTitle>
                        <BlogDescription>{blog.description}</BlogDescription>
                    </Blog>
                ))}
            </Blogs>
            <Button>Quero uma consultoria gratuita</Button>
        </Container>
    )
}

export default Insights