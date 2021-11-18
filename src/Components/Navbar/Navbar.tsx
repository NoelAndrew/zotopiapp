import React, { FC, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  const [active, setactive] = useState(`inicio`);
  const [open, setopen] = useState(false);
  return (
    <div>
      <div className={styles.container_navbar}>
        <img className={styles.logo} alt="scripting" src="/assets/Logo.png" />
        <div className={styles.burger}>
          <button type="button" onClick={() => setopen(!open)}>
            <div className={`${styles.bar1} ${open ? styles.change : ``}`} />
            <div className={`${styles.bar2} ${open ? styles.change : ``}`} />
            <div className={`${styles.bar3} ${open ? styles.change : ``}`} />
          </button>
        </div>
        <div className={styles.links}>
          <Link href="#inicio">
            <button
              type="button"
              onClick={() => {
                setactive(`inicio`);
              }}
            >
              <a className={active === `inicio` ? styles.active : ``}>Inicio</a>
            </button>
          </Link>
          <Link href="#como">
            <button
              type="button"
              onClick={() => {
                setactive(`trabajamos`);
              }}
            >
              <a className={active === `trabajamos` ? styles.active : ``}>
                ¿Como trabajamos?
              </a>
            </button>
          </Link>
          <Link href="#productos">
            <button
              type="button"
              onClick={() => {
                setactive(`productos`);
              }}
            >
              <a className={active === `productos` ? styles.active : ``}>
                Productos
              </a>
            </button>
          </Link>
          <Link href="#porque">
            <button
              type="button"
              onClick={() => {
                setactive(`porque`);
              }}
            >
              <a className={active === `porque` ? styles.active : ``}>
                ¿Por qué nosotros?
              </a>
            </button>
          </Link>
          <Link href="#contactanos">
            <button
              type="button"
              onClick={() => {
                setactive(`contacto`);
              }}
            >
              <a className={active === `contacto` ? styles.active : ``}>
                Contactanos
              </a>
            </button>
          </Link>
        </div>
      </div>
      <div className={`${styles.container_mobile} ${open ? styles.open : ``}`}>
        <Link href="#inicio">
          <button
            type="button"
            onClick={() => {
              setactive(`inicio`);
              setopen(!open);
            }}
          >
            <a className={active === `inicio` ? styles.active : ``}>Inicio</a>
          </button>
        </Link>
        <Link href="#como">
          <button
            type="button"
            onClick={() => {
              setactive(`trabajamos`);
              setopen(!open);
            }}
          >
            <a className={active === `trabajamos` ? styles.active : ``}>
              ¿Como trabajamos?
            </a>
          </button>
        </Link>
        <Link href="#productos">
          <button
            type="button"
            onClick={() => {
              setactive(`productos`);
              setopen(!open);
            }}
          >
            <a className={active === `productos` ? styles.active : ``}>
              Productos
            </a>
          </button>
        </Link>
        <Link href="#porque">
          <button
            type="button"
            onClick={() => {
              setactive(`porque`);
              setopen(!open);
            }}
          >
            <a className={active === `porque` ? styles.active : ``}>
              ¿Por qué nosotros?
            </a>
          </button>
        </Link>
        <Link href="#contactanos">
          <button
            type="button"
            onClick={() => {
              setactive(`contacto`);
              setopen(!open);
            }}
          >
            <a className={active === `contacto` ? styles.active : ``}>
              Contactanos
            </a>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
