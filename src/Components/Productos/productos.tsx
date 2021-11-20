import { v4 as uuidv4 } from 'uuid';

import React, { FC, useState } from 'react';
import styles from './productos.module.scss';

const Tada = require(`react-reveal/Pulse`);

const productos: FC = () => {
  const [produtos] = useState([
    {
      titulo: `Animales`,
      descripcion: `Conoce a los animales que habitan en el zoologico`,
      caracteristicas: [
        `Conócelos!`,
        `Acerca de su habitat.`,
        `Su localización.`
      ],
      img: `/assets/leon.png`,
    },
    {
      titulo: `Actividades`,
      descripcion: `Descubre las actividades que puedes hacer en el zoologico`,
      caracteristicas: [
        `Caminatas.`,
        `Tour.`,
        `Espectaculos`,
      ],
      img: `/assets/camin.jpg`,
    },
  ]);
  return (
    <div className={styles.container_productos}>
      {produtos.map((e, index) => (
        <Tada key={uuidv4()}>
          <div className={styles.container_producto}>
            <h3 className={index % 2 === 0 ? styles.azul : styles.rosa}>
              {e.titulo}
            </h3>
            <div className={styles.text}>
              {e.descripcion && <p>{e.descripcion}</p>}
              <ul>
                {e.caracteristicas.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className={styles.container_img}>
              <img src={e.img} alt="img/product" />
            </div>
          </div>
        </Tada>
      ))}
    </div>
  );
};

export default productos;
