import styled from 'styled-components';
import { Primary } from '../brand/brand.colors';

export const MeterStyles = styled.div`
  width: 100%;
  height: 25px;
  border-radius: 12.5px;
  border: 3px solid white;
  overflow: hidden;

  div.meter-fill {
    background: ${Primary};
    height: 100%;
  }
`;

export function Meter({ width, height }) {
  return (
    <MeterStyles style={{ height, borderRadius: height / 2 }}>
      <div className="meter-fill" style={{ width: `${width}%` }}/>
    </MeterStyles>
  )
}