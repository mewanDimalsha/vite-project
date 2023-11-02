import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // let name = 'luvis'
  const [name, setName] = useState('mewan')
  const [age,setAge] = useState(25)

  const handleClick = () =>{
    setName('marie')
    setAge(30)
  }

  const handleClickAgain = (name) =>{
    console.log('button is clicked'+name)
  }

  return (

    <div>
      <h1>{name} is {age} years old</h1>
      
      <Link to={'/'}>Home</Link>
      <Link to={'/create'}>New blog</Link>

      <button onClick={handleClick}>clickMe</button>
      <button onClick={() => {
        handleClickAgain('mario')
      }}>goodDay</button>
    </div>
  )
}

export default Navbar
