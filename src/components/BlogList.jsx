import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs,title}) => {

//    const blogs = props.blogs
//    const title = props.title
  return (
    <div>
      {blogs.map((blog)=>(

        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{title}</h1>
            <h2>{blog.title}</h2>
            <p>created by {blog.author}</p>
          </Link>
           
        </div>
      ))}
    </div>
  )
}

export default BlogList
