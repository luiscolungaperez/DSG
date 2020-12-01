import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, ContentImage, Image, Title, Description} from './style';

const Card = ({ img, title, description, link }) => {
  return(
    <CardContent>
      <ContentImage>
        <Image src={img} />
      </ContentImage>
      <Title>{title}</Title>
      <Description>
        {description}
      </Description>
      <Link to={link}>Ver mas...</Link>
    </CardContent>
  );
}

export default Card;
