import React from 'react'
import AboutHero from '../components/AboutHero'
import FAQ from '../components/FAQ'
import UniBackground from '../components/UniBackground'
import ServicesHero from '../components/ServicesHero'
import LaunchBrand from '../components/LaunchBrand/LaunchBrand'
import ArtflexShowcase from '../components/ArtflexShowcase'
import Features from '../components/Features'
import VideoPinSection from '../components/VideoPinSection'

import GeminiEffectDemo from '../components/ui/GeminiEffectDemo'
import OrbitingLogos from '../components/OrbitingLogos'
import Testimonials from '../components/Testimonials/Testimonials'

import BlogPage from '../components/Blogs/BlogPage'


const About = () => {
  return (
    <>
    
    <ServicesHero/>
    <LaunchBrand/>
    <ArtflexShowcase/>
    <Features/>
    <VideoPinSection/>
 
   <OrbitingLogos/>
     <GeminiEffectDemo/>
     <BlogPage/>
   <Testimonials/>
  
   
    </>
  )
}

export default About