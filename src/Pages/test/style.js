import styled from 'styled-components';

export const ContentCards = styled.section`
  width: 100%;
  margin: 3% 0;
  padding: 0 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 0;
  @media screen and (max-width: 575.98px) and (orientation: portrait){
    grid-template-columns: 1fr;
  }
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
    grid-template-columns: 1fr;
  }

`