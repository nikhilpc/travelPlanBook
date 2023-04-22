import HomePage from './HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import BlogsPage from './BlogsPage'
import PageNotFound from './PageNotFound'
import ThankYouPage from './ThankYouPage'
import SearchingPage from './SearchingPage'
import AgencySupport from './AgencySupport'
import AllBlogs from './AllBlogs'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:country" element={<BlogsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/search" element={<SearchingPage />} />
        <Route path="/agency" element={<AgencySupport />} />
        <Route path="/allblogs" element={<AllBlogs />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
