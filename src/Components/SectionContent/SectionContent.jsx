import React from 'react';
import { Container, InfoContent, ImageContent, Image, Title, Text, Button } from './style';

const SectionContent = ({ direction, title, description, textButton, endpoint, logo }) => {
  if(direction === 'left'){
    return(
      <Container>
        <InfoContent>
          <Title orientation={direction}>{title}</Title>
          <Text orientation={direction}>
            {description}
          </Text>
          <Button to={endpoint} orientation={direction}>
            {textButton}
          </Button>
        </InfoContent>
        <ImageContent>
          <Image src={logo} alt={logo} />
        </ImageContent>
      </Container>
    );
  }

  return(
    <Container>
      <ImageContent>
        <Image src={logo} alt={logo} />
      </ImageContent>
      <InfoContent>
        <Title orientation={direction}>{title}</Title>
        <Text orientation={direction}>
          {description}
        </Text>
        <Button to={endpoint} orientation={direction}>
          {textButton}
        </Button>
      </InfoContent>
    </Container>
  );
}

export default SectionContent;
