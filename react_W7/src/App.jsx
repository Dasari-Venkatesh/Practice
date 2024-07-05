import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import { Landing } from "./components/landing.jsx"
const LazyDashboard = React.lazy(() => import('./components/Dashboard.jsx'))

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/dashboard' 
          element={
            <Suspense fallback={<div> loading....... </div> }>
              <LazyDashboard />
            </Suspense>} />
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
