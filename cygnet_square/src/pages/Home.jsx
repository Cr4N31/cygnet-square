import Hero from "../components/Home/Hero"
import Features from "../components/Home/Features"
import Events from "../components/Home/Events"
import About from "../components/Home/About"
import Support from "../components/Home/Support"
import Contact from "../components/Home/Contact"
function Home(){
    return(
        <>
            <Hero/>
            <Features/>
            <Events/>
            <About/>
            <Support/>
            <Contact/>
        </>
    )
}
export default Home