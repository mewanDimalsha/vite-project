import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home"
import Navbar from "./components/navBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
    
    <Router>
    <h1>app component</h1>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/blogs/:id" element={<BlogDetails/>}/>

    </Routes>
    
    </Router>
    
    </>
  )
}

export default App
