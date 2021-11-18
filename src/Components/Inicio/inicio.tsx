import React, { FC } from 'react';

import styles from './inicio.module.scss';

const Fade = require(`react-reveal/Fade`);

const Inicio: FC = () => (
  <div id="inicio" className={styles.container_inicio}>
    <div className={styles.container_titulo}>
      <Fade left>
        <div className={styles.titulo}>
          PROGRAMACIÓN <br />
          <span> Y DISEÑO WEB </span>
        </div>
        <div className={styles.subtitulo}>
          Scripting es un nuevo startup que surge con el propósito de ofrecerle
          a los clientes una opción cómoda y sencilla para el diseño y
          desarrollo de su página web, sin la obligación de comprar servicios
          que no agreguen valor a tus necesidades.
        </div>
      </Fade>
    </div>
    <div className={styles.container_img}>
      <img src="/assets/inicio.png" alt="imagen principal" />
    </div>
  </div>
);

export default Inicio;
