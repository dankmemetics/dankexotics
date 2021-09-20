import styled from 'styled-components';
import { Gradient1 } from './brand.gradients';

export const AppContainer = styled.div`
  font-family: Montserrat;
  color: white;
  letter-spacing: 0.5px;
  
  overflow-x: hidden;
  overflow-y: auto;
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;

  &.flex {
    display: flex;
    flex-wrap: wrap;
  }
`;