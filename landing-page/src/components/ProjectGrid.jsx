import React from 'react'
import { Card } from 'react-bootstrap';
import '../styles/ProjectGrid.css';

function ProjectComponent() {
    return (
        <div className='project-component'>
            <div className='project-body'>
                <div className='project-card-first'>
                    <Card style={{ width: '28rem', border: 'none', borderRadius: '0' }} className="mb-10">
                        <Card.Img variant="top" src="src\assets\p3.jpeg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>Creative Studio Website</Card.Title>
                            <Card.Text> 
                                Website Design
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '28rem', border: 'none', borderRadius: '' }} className="mb-5">
                        <Card.Img variant="top" src="src\assets\p2.jpeg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>Creative Studio Website</Card.Title>
                            <Card.Text>
                                Website Design
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div className='project-card-second'>
                    <Card style={{ width: '28rem', border: 'none', borderRadius: '0' }} className="mb-10">
                        <Card.Img variant="top" src="src\assets\p2.jpeg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>Creative Studio Website</Card.Title>
                            <Card.Text>
                                Website Design
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '28rem', border: 'none', borderRadius: '0' }} className="mb-5">
                        <Card.Img variant="top" src="src\assets\p3.jpeg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>Creative Studio Website</Card.Title>
                            <Card.Text>
                                Website Design
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectComponent