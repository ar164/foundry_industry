import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Title from './components/Title/Title'
import Productspage from './components/Products/Productspage'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero/>
      <About />
      <Title subTitle='OUR PRODUCTS' title='What we offer'/>
      <Productspage/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App


