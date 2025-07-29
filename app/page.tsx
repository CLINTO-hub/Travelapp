import React from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import PackageList from './Components/Package/PackageList'
import Venders from './Components/Vendors/Venders'
import TestimonialSlider from './Components/TestimonialSlider/TestimonialSlider'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactSection from './Components/ContactForm/ContactSection'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <PackageList/>
      <Venders/>
      <TestimonialSlider/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page