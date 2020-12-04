import React from 'react';
import { SidebarStyle, BtnClose } from './style';

const Sidebar = ({ openState, setState }) => {
  
  const handleState = () => {
    setState('false');
  }
  
  return(
    <SidebarStyle state={openState}>
      <BtnClose type='button' onClick={handleState}/>
    </SidebarStyle>
  );
};

export default Sidebar;

