import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Tucan() {


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
        <Breadcrumb.Item>Tucan</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/tucan.jpg" />
        <Card.Body>
            <Card.Title>Tucan</Card.Title>
            <Card.Text>
            Los tucanes son una familia de aves ranfástidas del orden de los piciformes 
            es muy amplia ya que alberga seis géneros y cuarenta y
            dos especies diferentes de tucanes. Se caracterizan por poseer un pico muy desarrollado y de vivos colores.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong>  Ramphastidae</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>130 - 680 g.</ListGroupItem>
            <ListGroupItem><strong>Altura: </strong>65  cm</ListGroupItem>
            <ListGroupItem><strong>Tamaño del pico: </strong>20cm.</ListGroupItem>
            <ListGroupItem><strong>Alimentación: </strong>Hervivoro</ListGroupItem>
            <Card.Img variant="" src="/assets/animales/leon.jpg" />

        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </div>
    </>
  );
}

export default Tucan;
