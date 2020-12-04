import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 575.98px) and (orientation: portrait){
    flex-direction: column;
  }
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
    flex-direction: column;
  }
`;

export const InfoContent = styled.section`
  width: 50%;
  padding: 3% 0 3% 3%;
  @media screen and (max-width: 575.98px) and (orientation: portrait){
    width: 100%;
    text-align: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
    width: 100%;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 90%;
  margin: 0 auto;
  object-fit: cover;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  transform:scale(1);
`;

export const ImageContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 3% 2%;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 5px;
  &:hover ${Image}{
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
  }
  @media screen and (max-width: 575.98px) and (orientation: portrait){
    width: 100%;
    text-align: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 300;
  ${props => props.orientation === 'left' && css`
    text-align: left;
  `};
  ${props => props.orientation === 'right' && css`
    text-align: right;
  `};
  margin: 10px 0;
  @media screen and (max-width: 575.98px) and (orientation: portrait){
    text-align: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
    text-align: center;
  }
`;

export const Text = styled.p`
  display: inline-block;
  font-size: 15px;
  font-weight: 300;
  ${props => props.orientation === 'left' && css`
    text-align: left;
  `};
  ${props => props.orientation === 'right' && css`
    text-align: right;
  `};
  margin: 10px 0;
  line-height: 1.7;
  @media screen and (max-width: 575.98px) and (orientation: portrait){
    text-align: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
    text-align: center;
  }
`;

export const Button = styled(Link)`
  display: block;
  margin: 10px 0;
  border: none;
  outline: none;
  background-color: #044D71;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  ${props => props.orientation === 'right' && css`
    float: right;
  `};
  ${props => props.orientation === 'left' && css`
    float: left;
  `};
  @media screen and (max-width: 575.98px) and (orientation: portrait){
    display: inline-block;
    float: none;
  }
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
    display: inline-block;
    float: none;
  }
  &:hover{
    background-color: #0097CD;
    transition: 0.3s ease-in-out;
  }
`;