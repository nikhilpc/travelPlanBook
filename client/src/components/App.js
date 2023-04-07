import HomePage from './HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import BlogsPage from './BlogsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:country" element={<BlogsPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
