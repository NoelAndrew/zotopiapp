import { v4 as uuidv4 } from 'uuid';

import React, { FC, useState } from 'react';

import styles from './trabajamos.module.scss';

import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Breadcrumb} from 'react-bootstrap'

const Zoom = require(`react-reveal/Zoom`);

const Tienda: FC = () => {
  const [cards] = useState([
    {
      titulo: `Souvenirs`,
      descripcion: `En nuestras tiendas tenemos distintos tipos de souvenir, desde peluches, hasta tazas y recuerdos que podrás atesorar por siempre con los tuyos`,
      img: `/assets/tienda/peluche.jpg`,
    },
    {
      titulo: `Outfits`,
      descripcion: `Un safari no está completo sin su traje, así que recuerda pasar a la tienda para acompletar tu look!`,
      img: `/assets/tienda/outfit.jpg`,
    },
    {
      titulo: `Localizaciones`,
      descripcion: `Podrás encontrar todo esto en solo dos ubicaciones de nuestra tienda`,
      img: `/assets/desarrollo.png`,
    },
  ]);
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
    Tienda
    </Breadcrumb.Item>
    </Breadcrumb>
      {cards.map((e, index) => (
        <div
          key={uuidv4()}
          className={
            index % 2 === 0
              ? styles.container_text_izquierda
              : styles.container_text_derecha
          }
        >
          <Zoom>
            <div className={styles.container_text}>
              <h3 className={index % 2 === 0 ? styles.rosa : styles.azul}>
                {e.titulo}
              </h3>
              <p>{e.descripcion}</p>
            </div>
            <div className={styles.container_img}>
              <img src={e.img} alt="Img" />
            </div>
          </Zoom>
        </div>
      ))}
    </div>
    </>
  );
};

export default Tienda;
