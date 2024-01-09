import { useState } from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Landing from './pages/Landing'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
