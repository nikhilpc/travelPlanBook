import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'



const App = ()=> {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => setBackendData(data))
  }, [])
  return (
        <HomePage />
  )
}

export default App
