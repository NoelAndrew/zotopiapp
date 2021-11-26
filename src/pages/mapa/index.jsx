import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, CardGroup, Card, Button, Image} from 'react-bootstrap'
import MetaTags from 'react-meta-tags';

function Mapa() {
  magnifying_area.addEventListener("mousemove",function(event){
    clientX = event.clientX - magnifying_area.offsetLeft
    clientY = event.clientY - magnifying_area.offsetTop
     
    var mWidth = magnifying_area.offsetWidth
    var mHeight = magnifying_area.offsetHeight
    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100
    var magnifying_area =  document.getElementById("magnifying_area");
    var magnifying_img =  document.getElementById("magnifying_img");
    
    
    magnifying_area.addEventListener("mouseleave",function(){
      magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)'
    })   
    //magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
    magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
  })
  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
        <MetaTags name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=1"></MetaTags>

      </Head>
    <Navbar/>
    
<figure id={styles.magnifying_area}>
	<img id={styles.magnifying_img} src=""/>
</figure>
    </>
  );
}

export default Mapa;
