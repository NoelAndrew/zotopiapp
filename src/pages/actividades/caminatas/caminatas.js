import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Caminatas() {


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
        <Breadcrumb.Item>Caminatas</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="/assets/camin.jpg" /> */}
        <Card.Body>
            <Card.Title>Caminatas</Card.Title>
            <Card.Text>
            Realiza una caminata por nuestras zonas verdes designadas y convive contando tu experiencia
            con otros visitantes o simplemente tomate un descanso para continuar con tu visita despues!
            </Card.Text>
        </Card.Body>
        <Card.Img variant="" src="/assets/camin.jpg" />
        </Card>
        </center>
    </div>
    </>
  );
}

export default Caminatas;
