import React from 'react';
import {
  HeaderSection,
  Title,
  List,
  Item,
  Email,
  Phone,
  Anchor
} from './style';


const Header = () => {
  return(
    <HeaderSection>
      <Title>Bienvenido a DSG Solución</Title>
      <List>
        <Item>
          <Anchor to='#'>
            <Email />
            &nbsp;info@dsg-solucion.com
          </Anchor>
        </Item>
        <Item>
          <Anchor to='#'>
            <Phone />
            &nbsp; 1601-609 6780
          </Anchor>
        </Item>
        <Item>
          <div>
            <span>Item</span>
            <span>Fa</span>
            <span>G+</span>
          </div>
        </Item>
      </List>
    </HeaderSection>
  );
}

export default Header;
