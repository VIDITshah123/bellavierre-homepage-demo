import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Projects from './components/Projects/Projects'
import Experts from './components/Experts/Experts'
import Testimonials from './components/Testimonials/Testimonials'
import InstagramFeed from './components/Instagram/Instagram'
import Faq from './components/Faq/Faq'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Projects />
        <Experts />
        <Testimonials />
        <InstagramFeed />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
