import './App.css';
import React, { useRef } from 'react';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CarouselComponent from './components/SlidingComponent';
import FAQs from './components/FAQs';
import Contact from './components/contact';


function App() {

  return (
    <div className='App'>
      <NavbarComponent text="SHRAVAN" />

      <Header text="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" /> 
      <ProfileSection  text="I’m an India-based web designer and developer focused on creating 
        clean & user-friendly experiences. I love to design beautiful and 
        functional websites for clients and businesses." /> 

      <Header text="PROJECTS" />
      <ProjectGrid />
      <CarouselComponent />      
      <FAQs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
