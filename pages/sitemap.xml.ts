import { IBlog } from '../types/blog'
import blogs from '../services/blogs'

function Sitemap() {

}

function generateBlog(blog: IBlog) {
    const [day, month, year] = blog.date.split('/')
    const date = new Date(`${year}-${month}-${day}`)

    return `<url>
        <loc>${process.env.NEXT_PUBLIC_DOMAIN}/blog/${blog.slug}</loc>
        <lastmod>${date.toISOString()}</lastmod>
    </url>`
}

function generateSitemap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${process.env.NEXT_PUBLIC_DOMAIN}</loc>
                <lastmod>2024-01-04T03:28:57.455Z</lastmod>
            </url>
            <url>
                <loc>${process.env.NEXT_PUBLIC_DOMAIN}/contact</loc>
                <lastmod>2024-01-04T03:28:57.455Z</lastmod>
            </url>
            <url>
                <loc>${process.env.NEXT_PUBLIC_DOMAIN}/blog</loc>
                <lastmod>2024-01-04T03:28:57.455Z</lastmod>
            </url>
            ${blogs.map(generateBlog)}
        </urlset>`
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSitemap()

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}

export default Sitemap