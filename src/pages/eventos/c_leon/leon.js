import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Card, ListGroupItem,Breadcrumb, ListGroup} from 'react-bootstrap'

function Leon() {


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
        <Breadcrumb.Item>Conoce un leon</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="/assets/espec.jpg" /> */}
        <Card.Body>
            <Card.Title>Conoce un leon</Card.Title>
            <Card.Text>
            ¿Listo para conocer al rey de la selva? es tu momento de acercarte a un leon de verdad
            podrás tomarte una foto incluzo podrás abrazarlo.

            <br/><br/>Recuerda lo siguiente
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>1. </strong> Se respetuoso y no moleste o agredas al leon.</ListGroupItem>
                    <ListGroupItem><strong>2. </strong> Sigue las instrucciones de tu gía.</ListGroupItem>
                    <ListGroupItem><strong>3. </strong> Si eres menor de 15 años, deberás estar acompañado por un adulto.</ListGroupItem>
                </ListGroup>

            <Card.Img variant="" src="/assets/eve3.jpg" /><br/><br/>
            <br/><br/>Recuerda que todo es llevado a cabo por nuestros expertos así es que relajate
            y aprovecha esta experiencia.

            <br/><br/>Para más información pregunta en recepción!
            </Card.Text>
        </Card.Body>
        
        </Card>
        
        </center>
    </div>
    </>
  );
}

export default Leon;
