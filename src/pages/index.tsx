/* eslint-disable */

import Contacto from '../Components/Contacto/contacto';
import Inicio from '../Components/Inicio/inicio';
import Subtitulo from '../Components/Subtitulos/subtitulo';
import Head from 'next/head';
import Navbar from '../Components/Navbar/Navbar';
import Trabajamos from '@/Components/Trabajamos/trabajamos';
import Productos from '@/Components/Productos/productos';
import Noticias from '@/Components/Noticias/noticias';

const Fade = require(`react-reveal/Fade`);

export default function Home() {
  return (
    <div className="body-container">
      <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <Navbar />
      <Inicio />
      <Subtitulo titulo="Últimas noticias" id="porque" />
      <Noticias />
      <Subtitulo titulo="Sobre el Zoo" id="productos" />
      <Productos />
      {/* <Subtitulo titulo="¿Como trabajamos?" id="como" /> */}
      {/* <Trabajamos /> */}
    </div>
  );
}
