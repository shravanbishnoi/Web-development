import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import ProjectGrid from './components/ProjectGrid';


function App() {

  return (
    <>
    <div className='App'>
      <NavbarComponent text="Portfolio"/>
      <Header text="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" />
      <ProfileSection text="I’m an India-based web designer and developer focused on creating 
            clean & user-friendly experiences. I love to design beautiful and 
            functional websites for clients and businesses."/>
      <Header text="PROJECTS" />
      <ProjectGrid />
    </div>
    </>
  )
}

export default App
