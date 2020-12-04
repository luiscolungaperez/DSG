import React, { useState }  from 'react';
import {
Containter,
Object_one,
Object_two,
Object_three
} from './style';
import GDSLogo from 'public/image/DSGLOGO.png'
import './bannerstyles.css'



const Banner = () => {
  const [ham, setham] = useState('ham');
  const [navbar, setnavbar] = useState('navbar');
  return(
    <Containter>
        <img style={{ zIndex: '1', width: '10em', position: 'relative', top: '10%', left: '3.5%' }} src={GDSLogo}/>
        <div style= {{ zIndex: '1', position: 'relative', width: '92%', marginRight: 'auto', marginLeft: '3%', top: '20%', fontFamily: '"DM Sans","Arial",sans-serif', fontWeight: '700', lineHeight: '5em'}}>
          <div style= {{ width: '40%'}}>
            <h1 style= {{ color: 'white', fontSize: '4.5em'}}> 
              Digitaliza Tú Negocio
            </h1>
          </div>
          <div style={{ color: 'white', width: '45%', marginTop: '2em'}}>
            <p style={{ fontSize: '1.375rem', lineHeight: '1.2em'}}>Una organización inspirada en la aplicación plena de la innovación</p>
          </div>
        </div>
        <Object_one/>
        <Object_two/>
        <Object_three/>
    </Containter>
  );
}

export default Banner;
