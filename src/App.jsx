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
import About from "./pages/About";
import CyberSecurityPage from "./components/services/CyberSecurity";
import AMCPage from "./components/services/Amc";
import Cloud from "./components/services/Cloud";
import Infrastructure from "./components/services/Infrastructure";




const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About/>}/>


      <Route path="/services/cybersecurity" element={<CyberSecurityPage/>}/>
      <Route path="/services/amc" element={<AMCPage/>}/>
      <Route path="/services/cloud" element={<Cloud/>}/>
      <Route path="/services/infrastructure" element={<Infrastructure/>}/>


     
    </Routes>
  );
};

export default App;
