import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import CollapsibleExample from './Header.js';
import Portfolio from './PortfolioApi';

const Skills = () => {
    return(
        <>
        <CollapsibleExample />
       
        <CardGroup className='mt-5 ms-5'>
        <Row xs={1} md={3} className="g-4">
        {Portfolio.map(item => (
        < div key={item.id}>
         <Card style={{ width: '20rem',height:'20rem' }}>
        <Card.Img variant="top" src={item.image} style={{ width: '15rem',height:'15rem' }}  />
        <Card.Body> 
        <Card.Title>{item.sname}</Card.Title>
        </Card.Body>
        </Card>
        </div>
        ))}
        </Row>
        </CardGroup>
        </>
    );
}
export default Skills;