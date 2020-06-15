import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blog from "../components/Blog"
// ...GatsbyImageSharpFluid

const BlogPage = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        {/* <Blogs blogs={blogs} title="blogs" /> */}
        <div className="section-center blogs-center">
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "MM Do, YYYY")
        id
        category
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default BlogPage
