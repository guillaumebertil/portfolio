import './App.css'
import Header from './components/Header'
import About from './sections/About'
import Skills from './sections/Skills'
import Hero from './sections/Hero'
import Contact from './sections/Contact'
import Portfolio from './sections/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Header />

        <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </main>

        <Footer />
    </>
  )
}

export default App
