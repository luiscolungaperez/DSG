import React from 'react';

import { HeaderStyle, Brand, BtnMenu, IconMenu, /*IconMenuOpen*/ } from './style';

const Header = ({ openState, setState }) => {

  const handleOpen = () => {
    setState('true');
  }

  return (
    <HeaderStyle>
      <Brand/>
      <BtnMenu>
        <IconMenu type='button' onClick={handleOpen} />
      </BtnMenu>
    </HeaderStyle>
  );
};
export default Header;

