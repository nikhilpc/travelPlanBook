import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About'
import BlogsPage from './BlogsPage'
const country = "Togo"
const App = ()=> {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path= {`${country}/blog`} element={<BlogsPage/>} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
        
  )
}

export default App
