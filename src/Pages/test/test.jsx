import React from 'react';
import { ContentCards } from './style';
import SectionContent from '../../Components/SectionContent/SectionContent';
import Card from '../../Components/Card/Card';
import about from '../../Assets/Img/about.png';
import dataCards from '../../Utils/cardsContent';

const Test = () => {
  return(
    <>
      <SectionContent
        // Direcciones permitidas left | right
        direction='left'
        title='¿Por qué DSG Solución?'
        description='Somos una organización inspirada en la aplicación plena de la innovación, pues tenemos claro que es la forma de lograr una evolución constante. Nos apasionan las relaciones perdurables con nuestros clientes, las cuales basamos en el respeto, la cooperación y confianza mutua, elementos que consideramos clave para un extraordinario ambiente de trabajo.'
        textButton='Más de nosotros'
        endpoint='/'
        logo={about}
      />
      <ContentCards>
        {
          dataCards.services && 
            dataCards.services.map(item => {
              const {image, service, description, link} = item;
              return <Card img={image} title={service} description={description} link={link} key={service} />
            })
        }
      </ContentCards>
    </>
  );
}

export default Test;
