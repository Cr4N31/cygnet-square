import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/shared/Header"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import Team  from "./pages/Team"
import Contact from "./components/Home/Contact"
import Footer from "./components/shared/Footer"
function Layout(){
    return(
        <BrowserRouter>
            <Header/>
            <main className="bg-[#E0F2F1]">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default Layout