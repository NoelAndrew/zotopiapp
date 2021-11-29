import { v4 as uuidv4 } from 'uuid';

import React, { FC, useState } from 'react';

import styles from './trabajamos.module.scss';

import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';

import {Breadcrumb, ListGroup, Badge} from 'react-bootstrap'

const Zoom = require(`react-reveal/Zoom`);
function Reglas() {
  return (
    <>
      <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    
    <div className={styles.container_trabajamos}>
    <Breadcrumb>
    <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
    <Breadcrumb.Item>
    Reglamento
    </Breadcrumb.Item>
    </Breadcrumb>
    <h1>Reglamento del zoologico</h1><br/>
    <ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">No alimentar a los animales</div>
      Esta estrictamente prohibido alimentar a los animales fuera de las horas
      permitidas
    </div>
    <Badge variant="primary" pill>
      1
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">No introduzcas animales</div>
      No introduzcas animales de compañía al Zoológico, ya que pones en riesgo la salud de los animales que se albergan.
    </div>
    <Badge variant="primary" pill>
      2
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">No ingerir sustancias alcoholicas</div>
      No introduzcas ni consumas bebidas alcohólicas o cualquier tipo de droga al interior del Zoológico.
    </div>
    <Badge variant="primary" pill>
      3
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">No introducir armas</div>
      Por seguridad de los demás visitantes, está prohibido introducir cualquier tipo de arma al Zoológico.
    </div>
    <Badge variant="primary" pill>
      4
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">No molestar a los animales</div>
      No hagas ruido, no molestes a los animales, no les grites ni golpees los cristales, ya que las especies se alteran fácilmente.
    </div>
    <Badge variant="primary" pill>
      5
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Respetar los barandales</div>
      Los albergues cuentan con medidas de seguridad para beneficio de los visitantes, evita rebasar los barandales.
    </div>
    <Badge variant="primary" pill>
      6
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Consumir alimentos en areas especificas</div>
      Las bebidas y alimentos de cualquier tipo sólo pueden ser consumidos en áreas específicas, no los introduzcas a los biomas.
    </div>
    <Badge variant="primary" pill>
      7
    </Badge>
  </ListGroup.Item>
</ListGroup>

    </div>
    </>
  );
};

export default Reglas;
