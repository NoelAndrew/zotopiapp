import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Card, ListGroupItem,Breadcrumb, ListGroup} from 'react-bootstrap'

function Aves() {


  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="eventos-container">
    <center>
    <Breadcrumb>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/eventos/">Eventos</Breadcrumb.Item>
        <Breadcrumb.Item>Espectaculo con aves</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="/assets/espec.jpg" /> */}
        <Card.Body>
            <Card.Title>Espectaculo con aves</Card.Title>
            <Card.Text>
            Observa nuestro espctaculo con aves y podrás ver...
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>1. </strong> la coreografía de nuestros loros.</ListGroupItem>
                    <ListGroupItem><strong>2. </strong> Conocer y alimentar un tucan.</ListGroupItem>
                    <ListGroupItem><strong>3. </strong> Incluso un aguila posada en tu brazo.</ListGroupItem>
                </ListGroup>

            <Card.Img variant="" src="/assets/eve1.jpg" /><br/><br/>
            <br/>Recuerda que todo es llevado a cabo por nuestros expertos en aves así es que relajate
            y aprovecha esta experiencia.

            <br/><br/>El horario puede cambiar asi es que pregunta en recepción!
            </Card.Text>
        </Card.Body>
        
        </Card>
        
        </center>
    </div>
    </>
  );
}

export default Aves;
