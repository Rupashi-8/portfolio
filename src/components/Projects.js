import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import CollapsibleExample from './Header.js';
import Projapi from './ProjectApi.js';


const Project =()=>{
    return(
        <>
        <CollapsibleExample/>
        
        {/* <div className='card mt-3'> */}
        <CardGroup className='Card mt-5 '>
        <Row xs={1} md={2} className='g-4 ' >
        {Projapi.map(currentVal =>(
            <Card >
      <Card.Header style={{color:'blue'}}>Project-{currentVal.id}</Card.Header>
      <Card.Body>
        <Card.Title>{currentVal.name}</Card.Title>
        <Card.Text>
          {currentVal.description}
        </Card.Text>
        <Button variant="info">Click to see</Button>
      </Card.Body>
    </Card>

        ))}
        
    </Row>
        </CardGroup>
    {/* </div> */}

        </>
    )
}
export default Project;