import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';


function App() {

  return (
    <>
    <div className='App'>
      <NavbarComponent text="Portfolio"/>
      <Header text="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" />
    </div>
    </>
  )
}

export default App
