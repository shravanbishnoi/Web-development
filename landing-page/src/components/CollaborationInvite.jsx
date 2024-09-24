import React from 'react';
import '../styles/CollaborationInvite.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const CollaborationInvite = ({ btnlink }) => {
    return (
        <div className="collaboration-section">
            <h2 className='heading'>INTERESTED IN <br/>WORKING WITH ME?</h2>
            <Button className="rounded-pill btn-collaboration">
              <Nav.Link as={Link} to={btnlink} className="text-black">Start a project</Nav.Link>
            </Button>
        </div>
    );
};

export default CollaborationInvite;
