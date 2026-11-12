import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollTop } from './components/ScrollTop'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Elements/Navbar'
import Footer from './components/Elements/Footer'

const StudioPage = lazy(() => import('./sanity/StudioPage').then((module) => ({ default:module.StudioPage})))

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className='bg-white min-h-screen flex flex-col'>
        <Navbar />
        <main className='grow pt-20'>
          <Routes>
            {/* Normal Route */}
            <Route path="/" element={<Home />} />

            <Route path="*" element={<ErrorPage />} />
            
            {/* Studio Route (importante el *) */}
            <Route path="/studio/*" 
              element={
                <Suspense fallback={<div className='p-8 text-center'>Cargando Sanity Studio...</div>}>
                  <StudioPage />
                </Suspense>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
