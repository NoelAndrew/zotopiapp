import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Jirafa() {


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
        <Breadcrumb.Item>Guepardo</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/guepardo.jpg" />
        <Card.Body>
            <Card.Title>Guepardo</Card.Title>
            <Card.Text>
            Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz,
             ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.​​​​
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong> Acinonyx jubatus</ListGroupItem>
            <ListGroupItem><strong>Velocidad: </strong> 80 – 130 km/h </ListGroupItem>
            <ListGroupItem><strong>Promedio de vida: </strong>20-25 años</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>21 – 72 kg</ListGroupItem>
            <ListGroupItem><strong>Altura: </strong>67 – 94 cm</ListGroupItem>
            <ListGroupItem><strong>Longitud: </strong>1.1 – 1.5 m</ListGroupItem>
            <ListGroupItem><strong>Alimentación: </strong>Carnivoro</ListGroupItem>
            <Card.Img variant="" src="/assets/mapasH/mg.jpg" />

        </ListGroup>
        </Card>
    </div>
    </>
  );
}

export default Jirafa;
