import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';

import {Container, Row, Col, Card, Badge, Breadcrumb, Button} from 'react-bootstrap'


function Actividades() {

  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>

    <div className="actividades-container">
      <center>
      <Breadcrumb style={{ width: '18rem' }}>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>
        Actividades
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>Actividades</h1><br/><br/>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/camin.jpg" />
        <Card.Header><h1>Caminatas</h1></Card.Header>
        <Card.Body>
          <Card.Text>
            Recorre nuestras zonas verdes y disfruta del paisaje.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" href="actividades/caminatas/caminatas">Leer más</Button>
        </Card.Footer>
      </Card>
      <br />

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/tour.jpg" />
        <Card.Header><h1>Tour</h1></Card.Header>
        <Card.Body>
          <Card.Text>
            Conoce todas la áreas y animales del zoologico y claro!!!
            acompañado de uno de nuestros guías.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" href="actividades/tour/tour">Leer más</Button>
        </Card.Footer>
      </Card>
      <br />

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/espec.jpg" />
        <Card.Header><h1>Espectaculos</h1></Card.Header>
        <Card.Body>
          <Card.Text>
            Disfruta de todos los espectaculos que tenemos preparados para 
            todo el público
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="actividades/espectaculos/espectaculos">Leer más</Button>
        </Card.Footer>
      </Card>
      <br />

      <h3><Badge bg="secondary">Recuerda!</Badge> Pregunta en recepción</h3>
      </center>
    
    </div>
    </>
  );
}

export default Actividades;
