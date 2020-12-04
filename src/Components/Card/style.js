import styled from 'styled-components';

export const Image = styled.img`
  transition: 0.3s ease-in-out;
`;

export const CardContent = styled.section`
  width: 90%;
  height: 350px;
  max-height: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 20px 10px;
  &:hover ${Image}{
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }
`;


export const ContentImage = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;


export const Title = styled.h3`

`

export const Description = styled.p`

`;

