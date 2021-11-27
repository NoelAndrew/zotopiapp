import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Jabali() {


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
        <Breadcrumb.Item>Jabali</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/jabali.jpg" />
        <Card.Body>
            <Card.Title>Jabali</Card.Title>
            <Card.Text>
            El jabalí es un mamífero artiodáctilo de la familia de los suidos. 
            Su distribución original se corresponde con gran parte de Eurasia y
             algunas zonas del norte de África, si bien ha sido introducido por el hombre en América y Oceanía.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong>  Sus scrofa</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong> 75 – 100 kg</ListGroupItem>
            <ListGroupItem><strong>Alimentación: </strong>Omnivoro</ListGroupItem>
            <Card.Img variant="" src="/assets/mapasH/mj.jpg" />

        </ListGroup>
        </Card>
    </div>
    </>
  );
}

export default Jabali;
