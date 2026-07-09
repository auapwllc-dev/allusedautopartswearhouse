import Header from './components/Header'
import Hero from './components/Hero'
import Inventory from './components/Inventory'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Inventory />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
