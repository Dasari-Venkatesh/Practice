import { Dashboard } from './components/Dashboard.jsx'
import { Landing } from "./components/landing.jsx"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

function Topbar() {
  const navigate = useNavigate();

  return <div>
    <button onClick={() => navigate("/")}>Landing</button>
    <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
  </div>
}
export default App
