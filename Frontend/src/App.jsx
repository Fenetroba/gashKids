import './App.css'
import Home from './pages/gust/Home'
import ParentHome from './pages/Parents/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent" element={<ParentHome />}/>
      </Routes>

  )
}

export default App
