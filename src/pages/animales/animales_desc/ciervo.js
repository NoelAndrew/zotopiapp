import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Ciervo() {


  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="animales-container">
    <Breadcrumb>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/animales/">Animales</Breadcrumb.Item>
        <Breadcrumb.Item>Ciervo</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/venado.jpg" />
        <Card.Body>
            <Card.Title>Ciervo</Card.Title>
            <Card.Text>
            El ciervo común, también llamado ciervo europeo, ciervo rojo, 
            ciervo colorado o venado, es una especie de cérvido ampliamente distribuida por el hemisferio norte. 
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong>  Cervus elaphus</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>200 kg </ListGroupItem>
            <ListGroupItem><strong>Longitud: </strong>2.1 m</ListGroupItem>
            <ListGroupItem><strong>Alimentación: </strong>Hervivoro</ListGroupItem>
            <Card.Img variant="" src="/assets/mapasH/mv.jpg" />

        </ListGroup>
        </Card>
    </div>
    </>
  );
}

export default Ciervo;
