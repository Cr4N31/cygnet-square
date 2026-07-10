import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from './Layout'
function App() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // animation happens only once, not on every scroll
    })
  }, [])

  return (
    <>
      <Layout/>
    </>
  )
}

export default App
