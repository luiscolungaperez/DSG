import styled, { css, keyframes  } from 'styled-components';

const MoveUpDown  = keyframes `
0%, 100% { bottom: -100%; }
50% { bottom: -107%; }
`
const MoveRightLeft   = keyframes `
0%, 100% { left: -60%; }
50% { left: -67%; }
`
const MoveLeftRight   = keyframes `
0%, 100% { left: 60%; }
50% { left: 67%; }
`
export const Containter = styled.div`
width: 100%;
height: 100vh;
display: block;
overflow: visible;
margin: 0;
`;

export const Object_one = styled.div`
width: 85%;
height: 100%;
background: rgb(98,119,124,.8);
transform: rotate(45deg);
animation: ${MoveUpDown} 12s linear infinite;
position: absolute;
left: 12%;
`
export const Object_two = styled.div`
width: 100%;
height: 140%;
background: rgb(98,119,124,.8);
transform: rotate(55deg);
animation: ${MoveRightLeft} 12s linear infinite;
position: absolute;
top: -90%
`
export const Object_three = styled.div`
width: 85%;
height: 100%;
background: rgb(98,119,124,.8);
transform: rotate(32deg);
animation: ${MoveLeftRight} 12s linear infinite;
position: absolute;
top: 10%
`

