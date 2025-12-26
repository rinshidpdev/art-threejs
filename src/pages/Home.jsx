import React from 'react'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Performance from '../components/Performance'
import ArtflexShowcase from '../components/ArtflexShowcase'
import CansDisplay from '../components/CansDisplay/CansDisplay'
import LaunchBrand from '../components/LaunchBrand/LaunchBrand'
import AboutHero from '../components/AboutHero'
import ScrollSection from '../components/ScrollSection/ScrollSection'
import VideoHero from '../components/VideoHero'
import UniBackground from '../components/UniBackground'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials/Testimonials'
import ClientLogos from '../components/ClientLogos/ClientLogos'


const Home = () => {
  return (
    <>
    <Hero/>
    <CansDisplay/>
    
    <Performance/>
    <Showcase/>
    {/* <LaunchBrand/> */}
    <ArtflexShowcase/>
   
    {/* <AboutHero/> */}
     {/* <ScrollSection/> */}
     <ClientLogos/>
    
     <Testimonials/>
    </>
  )
}

export default Home