import { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./components/shared/Header"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import Team  from "./pages/Team"
import NotTooOld from "./pages/NotTooOld"
import Contact from "./components/Home/Contact"
import Footer from "./components/shared/Footer"
function App() {
  const { pathname } = useLocation()
  const isProjectDetail = pathname === "/events/not-too-old"

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // animation happens only once, not on every scroll
    })
  }, [])

  return (
    <>
      {!isProjectDetail && <Header/>}
        <main className="bg-mist">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/events/not-too-old" element={<NotTooOld/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </main>
      {!isProjectDetail && <Footer/>}
    </>
  )
}

export default App
