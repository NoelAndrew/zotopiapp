import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, Card, Image} from 'react-bootstrap'

function Actividades() {




  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="actividades-container">
    <Container>
        <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>
                <Image src="../../../assets/investigacion.png" roundedCircle/>
            </Col>
        </Row>
    </Container>
    <p>nepe 2</p>
    
    </div>
    </>
  );
}

export default Actividades;
