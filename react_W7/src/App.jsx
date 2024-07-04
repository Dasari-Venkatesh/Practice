import {Dashboard} from './components/Dashboard.jsx'
import {Landing} from "./components/landing.jsx"
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <div>
        <button onClick={() => {
          window.location.href = "/"
        }}>Landing</button>
        <button onClick={() => window.location.href = "/Dashboard"}>Dashboard</button>
      </div>
    
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element= {<Dashboard/>}/>
          
        <Route path='/' element= {<Landing/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
