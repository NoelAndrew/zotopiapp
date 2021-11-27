import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Tour() {


  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="actividades-container">
        <center>
    <Breadcrumb>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/actividades/">Actividades</Breadcrumb.Item>
        <Breadcrumb.Item>Tour</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="/assets/tour.jpg" /> */}
        <Card.Body>
            <Card.Title>Tour</Card.Title>
            <Card.Text>
            ¿Quieres conocer por completo nuestro zoologico en manos de un conocedor?
            Si tu respuesta es "SI", este es tu momento y realiza un tour completo recorriendo
            todas las zonas y animales del zoologico acompañado de uno de nuestros guías.
            <br/><br/>
            Pregunta en recepción las opciones de tour que puedes tomar ya sea a pie o en vehiculo,
            no te lo puedes perder!
            </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="/assets/tour.jpg" />
        </Card>
        </center>
    </div>
    </>
  );
}

export default Tour;
