import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Accordion, Carousel, Breadcrumb} from 'react-bootstrap'

function Eventos() {




  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>

    

    <div className="eventos-container">
      <center>
      <Breadcrumb style={{ width: '18rem' }}>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>
        Eventos
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>Eventos</h1><br/><br/>
    
      <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/eve1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Espectaculo con aves</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/eve2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Alimenta a pequeñas especies</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/eve3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Conoce a un leon</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel><br/><br/>
    
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Espectaculo con aves</Accordion.Header>
                <Accordion.Body>
                    Disfruta de nuestro "Espectaculo con aves" conoce acerca de nuestras
                    aves y observa su escenografía.
                    <br/><a href="eventos/e_aves/aves">Leer más</a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Alimenta a pequeñas especies</Accordion.Header>
                <Accordion.Body>
                    ¿Adulto o infante? No importa ven y alimenta a nuestras prequeñas especies
                    y pasa un rato con estos pequeños amigos.
                    <br/><a href="eventos/p_especies/especies">Leer más</a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Conoce a un leon</Accordion.Header>
                <Accordion.Body>
                    Él es el rey! no te dejes engañar por su apriencia, es muy amigable y quiere
                    conocerte, así es que ven abraza y tomate una foto con un leon.
                    <br/><a href="eventos/c_leon/leon">Leer más</a>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </center>
    </div>
    </>
  );
}

export default Eventos;
