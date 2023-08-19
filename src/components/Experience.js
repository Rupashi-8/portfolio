import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import CollapsibleExample from './Header.js';
const Experience = () =>{
    return(
        <>
        <CollapsibleExample/>
    <ListGroup className="mt-5" as="ol"  numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start ">
        <div className="ms-2 me-auto">
          <div className="fw-bold">NIC Internship(15-07-2022 - 4-09-2022)</div>
          Worked as Frontend developer Intern as well as worked on PostgreSQL and .NET MVC to build website.
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
         action variant="info">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Codsoft Internship(10-08-2023 - 10-09-2023)</div>
          Web Development Intern
        </div>
      </ListGroup.Item>
    </ListGroup>
        </>
    )
}
export default Experience;