import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Badge, Card, ListGroupItem, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Espectaculos() {


  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="animales-container">
    <center>
    <Breadcrumb>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/actividades/">Actividades</Breadcrumb.Item>
        <Breadcrumb.Item>Espectaculos</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="/assets/espec.jpg" /> */}
        <Card.Body>
            <Card.Title>Espectaculos</Card.Title>
            <Card.Text>
            Por el momento contamos con tres espectaculos principales:
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>1. </strong> Espectcaulo con aves.</ListGroupItem>
                    <ListGroupItem><strong>2. </strong> Alimenta a pequeñas especies.</ListGroupItem>
                    <ListGroupItem><strong>3. </strong> Conoce a un leon.</ListGroupItem>
                </ListGroup>

            Proximamente podrá encontrar más espectaculos!!!
            </Card.Text>
        </Card.Body>
        <Card.Img variant="" src="/assets/espec.jpg" /><br/><br/>
        </Card>
        <h3>Para conocer más revisa <Badge bg="secondary">Eventos</Badge></h3>
        </center>
    </div>
    </>
  );
}

export default Espectaculos;
