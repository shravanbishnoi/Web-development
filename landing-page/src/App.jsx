import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CarouselComponent from './components/SlidingComponent';
import FAQs from './components/FAQs';
import CollaborationInvite from './components/CollaborationInvite';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarComponent text="SHRAVAN" btntext="Contact" btnlink="Contact" />
                <Header text="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" />
                <ProfileSection
                  text="I’m an India-based web designer and developer focused on creating clean & user-friendly experiences. I love to design beautiful and functional websites for clients and businesses."
                  btnlink="Contact"
                />
                <Header text="PROJECTS" />
                <ProjectGrid />
                <CarouselComponent />
                <FAQs />
                <CollaborationInvite btnlink="Contact" />
              </>
            }
          />
          <Route 
            path="/contact" 
            element={
              <>
                <NavbarComponent text="SHRAVAN" btntext="Home" btnlink="/" />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
