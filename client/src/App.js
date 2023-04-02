import React, { useEffect, useState } from 'react'
const App = ()=> {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => setBackendData(data))
  }, [])
  return (
    <div>
      {
      backendData.users === undefined? <>loadind</>:
      backendData.users.map(item => <div>{item}</div> )}
    </div>
  )
}

export default App
