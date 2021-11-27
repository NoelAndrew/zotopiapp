import { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, CardGroup, Card, Button, Breadcrumb} from 'react-bootstrap'

function Animales() {


  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="animales-container">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>
        Animales
        </Breadcrumb.Item>
      </Breadcrumb>
      <CardGroup>
  
      <Card > 
        <Card.Img variant="top" src="/assets/animales/leon.jpg" />
        <Card.Body>
          <Card.Title>León</Card.Title>
          <Card.Text>
            El león es el rey de la selva, originalmente de África,
            vive aquí reinando su zoológico.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/leon">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/jirafa.jpg" />
        <Card.Body>
          <Card.Title>Jirafa</Card.Title>
          <Card.Text>
            La Jirafa es la más alta de todas las especies de animales terrestres 
            existentes, ya que puede alcanzar una altura de 5,8 m
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/jirafa">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/guepardo.jpg" />
        <Card.Body>
          <Card.Title>Guepardo</Card.Title>
          <Card.Text>
            El Guepardo es el animal terrestre más veloz,
             ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.​​​​
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/guepardo">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/elefante.jpg" />
        <Card.Body>
          <Card.Title>Elefante</Card.Title>
          <Card.Text>
            El Efelante son los animales terrestres más grandes que existen en la actualidad.
            El peso al nacer usualmente es 118 kg. Normalmente viven de cincuenta a setenta años.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/elefante">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/cebra.jpg" />
        <Card.Body>
          <Card.Title>Cebra</Card.Title>
          <Card.Text>
          Se conocen como cebra​ a tres especies del género Equus propias de África
          cuya característica más distintiva es su coloración a base de rayas blancas sobre un fondo negro.​
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/cebra">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/tigre.jpg" />
        <Card.Body>
          <Card.Title>Tigre</Card.Title>
          <Card.Text>
          El tigre es una de las especies​ de la subfamilia de los panterinos pertenecientes al género Panthera.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/tigre">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/tucan.jpg" />
        <Card.Body>
          <Card.Title>Tucan</Card.Title>
          <Card.Text>
          Los tucanes se caracterizan por poseer un pico muy desarrollado y de vivos colores.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/tucan">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/loro.jpg" />
        <Card.Body>
          <Card.Title>Loro</Card.Title>
          <Card.Text>
          Los psitacoideos són una superfamilia del orden Psittaciformes, 
          que incluye los loros típicos, un total de 369 especies.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/loro">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/suricata.jpg" />
        <Card.Body>
          <Card.Title>Suricata</Card.Title>
          <Card.Text>
          La suricata​​​​​​​ es una especie de mamífero carnívoro 
          de la familia Herpestidae que habita la región del desierto de Kalahari y el Namib en África. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/suricata">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/venado.jpg" />
        <Card.Body>
          <Card.Title>Ciervo</Card.Title>
          <Card.Text>
          Los cérvidos son una familia
          de mamíferos rumiantes que incluye los ciervos o venados. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/ciervo">Leer más</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/animales/jabali.jpg" />
        <Card.Body>
          <Card.Title>Jabalí</Card.Title>
          <Card.Text>
          El jabalí es un mamífero artiodáctilo de la familia de los suidos. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" href="animales/animales_desc/jabali">Leer más</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </>
  );
}

export default Animales;
