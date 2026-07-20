import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./components/shared/Header"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import Team  from "./pages/Team"
import Contact from "./components/Home/Contact"
import Footer from "./components/shared/Footer"
function App() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // animation happens only once, not on every scroll
    })
  }, [])

  return (
    <>
      <Header/>
        <main className="bg-mist">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </main>
      <Footer/>
    </>
  )
}

export default App
