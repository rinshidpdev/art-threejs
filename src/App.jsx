// import React from 'react'
// import Hero from './components/Hero'
// import Showcase from './components/Showcase'
// import Performance from './components/Performance'
// import ArtflexShowcase from './components/ArtflexShowcase'
// import CansDisplay from './components/CansDisplay/CansDisplay'
// import LaunchBrand from './components/LaunchBrand/LaunchBrand'
// import AboutHero from './components/AboutHero'
// import ScrollSection from './components/ScrollSection/ScrollSection'
// import VideoHero from './components/VideoHero'
// import UniBackground from './components/UniBackground'
// import FAQ from './components/FAQ'


// const App = () => {
//   return (
//     <>
//     <Hero/>
//     <CansDisplay/>
//     <Showcase/>
//     <Performance/>
//     <ArtflexShowcase/>
//     <LaunchBrand/>
//     {/* <AboutHero/> */}
//     {/* <ScrollSection/> */}
//     <VideoHero/>
//     {/* <UniBackground/> */}
//     <FAQ/>
    
  
//     </>
//   )
// }

// export default App
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/ServicesSec";
import CyberSecurityPage from "./components/services/CyberSecurity";
import AMCPage from "./components/services/Amc";
import Cloud from "./components/services/Cloud";
import Infrastructure from "./components/services/Infrastructure";


import BlogDetailPage from "./components/Blogs/BlogDetailPage";
import BlogPage from "./components/Blogs/BlogPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ServiceSec from "./pages/About";
import Contact from "./pages/Contact";
import FooterWithStyles from "./components/Footer";




const App = () => {
  return (
     
      <>
       <Navbar/>
    <Routes>
    
       <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<About/>}/>
      <Route path="/about" element={<ServiceSec/>}/>
      <Route path="/contact" element={<Contact/>}/>
     


      <Route path="/services/cybersecurity" element={<CyberSecurityPage/>}/>
      <Route path="/services/amc" element={<AMCPage/>}/>
      <Route path="/services/cloud" element={<Cloud/>}/>
      <Route path="/services/infrastructure" element={<Infrastructure/>}/>

      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/blog/:id" element={<BlogDetailPage/>}/>


     
    </Routes>
    <FooterWithStyles/>
    </>
  );
};

export default App;
