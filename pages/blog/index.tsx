import Head from '../../components/Head'
import Header from '../../components/Header'
import { Main, Subtitle, Title, Blogs, Blog, BlogImage, BlogTexts, BlogTitle, BlogAbout, BlogDescription } from '../../styles/pages/blogs'
import blogs from '../../services/blogs'
import Community from '../../components/Community'
import Footer from '../../components/Footer'

function BlogHome() {
    return <>
        <Head url="/blog" title="Avel Digital - Blog" description="Blog de Marketing Digital"/>
        <Header black/>
        <Main>
            <Subtitle>Blog de Marketing Digital</Subtitle>
            <Title>Inspirações, ideias e insights</Title>
            <Blogs>
                {blogs.map((blog, index) => (
                    <Blog href={`/blog/${blog.slug}`} key={index}>
                        <BlogImage placeholder="blur" src={blog.image.src} alt={blog.image.alt}/>
                        <BlogTexts>
                            <BlogTitle>{blog.title}</BlogTitle>
                            <BlogAbout>Por {blog.author} • {blog.date}</BlogAbout>
                            <BlogDescription>{blog.description}</BlogDescription>
                        </BlogTexts>
                    </Blog>
                ))}
            </Blogs>
            <Community/>
        </Main>
        <Footer/>
    </>
}

export default BlogHome