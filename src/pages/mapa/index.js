import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, CardGroup, Card, Button} from 'react-bootstrap'

function Mapa() {
  

  function resizeImage(img) {
    img.style.width = "500px";
    img.style.height = "500px";
  }
  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <img style={{width:"100px", height:"80px", marginTop:"100px"}} src="/assets/mapa.jpg" onclick={resizeImage()}/>
    
    </>
  );
}

export default Mapa;
