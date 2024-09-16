import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from '../assets/resume.pdf';
import '../styles/NavbarComponent.css';

function NavbarComponent({ text, scrollToExperience, scrollToSkills, scrollToProjects, scrollToContact }) {
  const handleResumeClick = () => {
    window.open(resume, '_blank');
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="text-white" style={{ fontSize: '50px' }}>
          {text}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Button className="rounded-pill bg-white nav-button" onClick={scrollToSkills}>
              <Nav.Link className="text-black">Skills</Nav.Link>
            </Button>

            <Button className="rounded-pill bg-white nav-button" onClick={scrollToProjects}>
              <Nav.Link className="text-black">Projects</Nav.Link>
            </Button>

            <Button className="rounded-pill bg-white nav-button" onClick={scrollToExperience}>
              <Nav.Link className="text-black">Experience</Nav.Link>
            </Button>

            <Button className="rounded-pill bg-white nav-button" onClick={scrollToContact}>
              <Nav.Link className="text-black">Contact</Nav.Link>
            </Button>

            <Button className="rounded-pill bg-white nav-button" onClick={handleResumeClick}>
              <Nav.Link className="text-black">Resume</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
