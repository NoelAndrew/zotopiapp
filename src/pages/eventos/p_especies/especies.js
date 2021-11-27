import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Card, ListGroupItem,Breadcrumb, ListGroup} from 'react-bootstrap'

function Especies() {


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
        <Breadcrumb.Item>Alimentas a pequeñas especies</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="/assets/espec.jpg" /> */}
        <Card.Body>
            <Card.Title>Alimenta a pequeñas especies</Card.Title>
            <Card.Text>
            No importa tu edad, acerca a alimentar a una de nuestras pequeñas especies,
            durante tu recorrido pregunta a tu guia sobre alimentar a las especies y te indicara
            cuando es posible.
            <Card.Img variant="" src="/assets/eve2.jpg" /><br/><br/>
            <br/><br/>Para más información pregunta en recepción!
            </Card.Text>
        </Card.Body>
        
        </Card>
        
        </center>
    </div>
    </>
  );
}

export default Especies;
