import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent({text}) {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className='text-white' style={{ fontSize: '50px' }}>{text}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
          <Button className="rounded-pill bg-white">
                <Nav.Link href="#contact" className='text-black'>Resume</Nav.Link>
            </Button>
            <Button className="rounded-pill bg-white">
                <Nav.Link href="#contact" className='text-black'>Projects</Nav.Link>
            </Button>
            <Button className="rounded-pill bg-white">
                <Nav.Link href="#contact" className='text-black'>Contact</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
