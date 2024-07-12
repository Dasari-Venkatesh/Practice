import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { VideoCard } from './components/VideoCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <VideoCard/>
    </>
  )
}

export default App
