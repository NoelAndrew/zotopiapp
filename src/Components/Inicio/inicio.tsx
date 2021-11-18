import React, { FC } from 'react';

import styles from './inicio.module.scss';

const Fade = require(`react-reveal/Fade`);

const Inicio: FC = () => (
  <div id="inicio" className={styles.container_inicio}>
    <div className={styles.container_titulo}>
      <Fade left>
        <div className={styles.titulo}>
          Bienvenido al Zoologico <br />
        </div>
        <div className={styles.subtitulo}>
          Bienvenido al Zoologico más popular de Amalucan Beach, el Zoologico presenta
          esta aplicación para hacer tu experiencia lo más cómoda posible, podrás encontrar
          todo lo que ofrecemos, desde tours, hasta Informacion de los productos y sus 
          habitats.
        </div>
      </Fade>
    </div>
    <div className={styles.container_img}>
      <img src="/assets/inicio.png" alt="imagen principal" />
    </div>
  </div>
);

export default Inicio;
