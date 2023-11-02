import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import UseFetch from './UseFetch'

const Home = () => {
    const { data : blogs,isLoading,error } = UseFetch('http://localhost:8000/blogs')
    
  return (
    <div>`
      {error && <div>{error}</div>}`
      {isLoading && <div>Loading ....</div>}
      {blogs && <BlogList blogs={blogs} title='HELLO EVERYONE!'/>}
    
    </div>
  )
}

export default Home
