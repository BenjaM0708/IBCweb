import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StudioPage } from './StudioPage'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Tus rutas normales */}
        <Route path="/" element={<Home />} />
        
        {/* La ruta del Studio (importante el *) */}
        <Route path="/studio/*" element={<StudioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
