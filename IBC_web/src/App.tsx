import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StudioPage } from './sanity/StudioPage'
import { ScrollTop } from './components/ScrollTop'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'

import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className='bg-white min-h-screen flex flex-col'>
        <Navbar />
        <main className='grow pt-14'>
          <Routes>
            {/* Normal Route */}
            <Route path="/" element={<Home />} />

            <Route path="*" element={<ErrorPage />} />
            
            {/* Studio'Route (importante el *) */}
            <Route path="/studio/*" element={<StudioPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
