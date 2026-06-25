import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Audience } from './components/Audience'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Audience />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
