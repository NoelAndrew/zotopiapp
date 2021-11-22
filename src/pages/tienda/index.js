import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, CardGroup, Card, Button, Nav} from 'react-bootstrap'

function Tienda() {
  

 
  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <div style={{marginTop:"100px"}}>
        <Navbar/>
            <Card>
            <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
                <Nav.Link href="../../#productos">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#contacto">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
        </Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    </>
  
  );
 
}

export default Tienda;
