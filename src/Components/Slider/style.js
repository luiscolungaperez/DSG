import styled, { css } from 'styled-components';
import { intoScreen, outScreen } from '../../style/animation';
import { HiX } from 'react-icons/hi';


export const SidebarStyle = styled.section`
  position: fixed;
  z-index: 0;
  top: 60px;
  height: calc(100vh - 60px);
  width: 230px;
  background-color:  rgba(0,0,0,0.8);
  box-shadow: 3px 0px 5px rgba(0,0,0,0.4);
  
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 2;

    ${props => props.state === '' && css`
      margin-left: -100%;
    `}
    ${props => props.state === 'true' && css`
      ${intoScreen()};
    `};

    ${props => props.state === 'false' && css`
      ${outScreen()};
    `};

  
`;

export const BtnClose = styled(HiX)`
    float: right;
    font-size: 35px;
    color: white;
    margin: .4em .8em 0px 0px;
    left: 18px;
`;

