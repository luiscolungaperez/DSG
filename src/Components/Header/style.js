import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdEmail, MdLocalPhone } from 'react-icons/md';

export const HeaderSection = styled.header`
  width: 100%;
  height: 60px;
  background-color: #132A3E;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
`;

export const List = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  list-style: none;
`;

export const Anchor = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover{
    color: #019CA9;
  }
`;

const Icon = css`
  font-size: 25px;
`
export const Email = styled(MdEmail)`
  ${Icon}
`;

export const Phone = styled(MdLocalPhone)`
  ${Icon}
`;