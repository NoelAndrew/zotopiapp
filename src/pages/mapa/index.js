import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, CardGroup, Card, Button, Image, Breadcrumb} from 'react-bootstrap'
// import MetaTags from 'react-meta-tags';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


function Mapa() {
  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
        {/* <MetaTags name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=1"></MetaTags> */}

      </Head>
    <Navbar/>
    <div className="mapa-container">
        <center>
        <Breadcrumb style={{ width: "18rem"}}>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>
        Mapa
        </Breadcrumb.Item>
        </Breadcrumb>
            <h1>Mapa</h1><br/><br/>
            
            <InnerImageZoom
                    src="/assets/unsplash2.jpg"
                    zoomSrc="/assets/unsplash2-large.jpg"
                    fullscreenOnMobile={false}
                    zoomPreload={true}
                    width={400}
                    height={400}
                    hasSpacer={true}
                />
        </center>
    </div>
    </>
  );
}

export default Mapa;
