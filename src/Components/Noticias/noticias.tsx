import Slider from 'react-slick';

import React, { FC } from 'react';

import styles from './noticias.module.scss';

const Flip = require(`react-reveal/Flip`);

const Noticias: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    draggable: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const customeSlider: any = React.createRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <Flip top>
      <div className={styles.container_noticias}>
        <div className={styles.prev}>
          <button
            type="button"
            onClick={() => {
              gotoPrev();
            }}
          >
            <img src="/assets/flecha.svg" alt="" />
          </button>
        </div>
        <Slider
          className={styles.container_carrousel}
          {...settings}
          ref={customeSlider}
        >
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/pingu.jpg" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Ven con nosotros y conoce el nuevo habitat
                de los pingüinos, ellos vienen directamente de la 
                antártica donde fueron rescatados.
              </p>
            </div>
          </div>
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/espec.jpg" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Observa la demostración del vuelo de aves.
                Esto solo pasa 2 veces al día, así que apúrate
                y asegura tu lugar.
              </p>
            </div>
          </div>
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/bby.jpg" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Dile hola a Elmo!
                Elmo es el nuevo inegrante de la familia de los
                elefantes, puedes ir a su habitat a conocerlo, pero cuidado! Elmo es muy tímido
              </p>
            </div>
          </div>
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/ent.jpg" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Lunes de 2x1!
                Los lunes de todo el mes de diciembre podrás descubrir las
                maravillas del Zoologico al 2x1 en entradas de adulto!
              </p>
            </div>
          </div>
        </Slider>
        <div className={styles.next}>
          <button
            type="button"
            onClick={() => {
              gotoNext();
            }}
          >
            <img src="/assets/flecha.svg" alt="" />
          </button>
        </div>
      </div>
    </Flip>
  );
};

export default Noticias;
