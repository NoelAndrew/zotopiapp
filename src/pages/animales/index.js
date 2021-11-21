import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, CardGroup, Card} from 'react-bootstrap'

function Animales() {




  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="animales-container">
   
      <CardGroup>
      <Card className="card-style">
        <Card.Img variant="top" className="cardImg" src="/assets/animales/leon.jpg" style={{width:"300px"}}/>
        <Card.Body>
          <Card.Title><h3>Leon</h3></Card.Title>
          <Card.Text>
            El león es el rey de la selva que habita en el habitat de África
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Leer más</small>
        </Card.Footer>
      </Card>
      <Card className="card-style">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="card-style">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <p>nepe</p>
    </div>
    </>
  );
}

export default Animales;
