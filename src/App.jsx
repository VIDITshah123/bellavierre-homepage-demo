import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Projects from './components/Projects/Projects'
import RoiCalculator from './components/Calculator/RoiCalculator'
import Experts from './components/Experts/Experts'
import Testimonials from './components/Testimonials/Testimonials'
import InstagramFeed from './components/Instagram/Instagram'
import Faq from './components/Faq/Faq'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import CustomCursor from './components/Cursor/CustomCursor'
import useSmoothScroll from './hooks/useSmoothScroll'

export default function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useSmoothScroll()

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Projects />
        <RoiCalculator />
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
