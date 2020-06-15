import React, { useState } from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  const blog = blogs.slice(0, 2)
  console.log(blog)

  return (
    <section className="section">
      <Title title={title} />

      <div className="section-center blogs-center">
        {blogs.slice(0, 3).map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
