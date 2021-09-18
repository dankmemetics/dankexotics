import styled from 'styled-components';
import { Myrcene, Caryophyllene, Linalool, Pinene, Humulene, Limonene, Indica, Sativa } from '../brand/brand.colors';

export const TraitStyles = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 15px 0 0;

  div.trait-color {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 10px 0 0;

    &.myrcene {
      background: ${Myrcene};
    }
    &.caryophyllene {
      background: ${Caryophyllene};
    }
    &.linalool {
      background: ${Linalool};
    }
    &.pinene {
      background: ${Pinene};
    }
    &.humulene {
      background: ${Humulene};
    }
    &.limonene {
      background: ${Limonene};
    }
    &.indica {
      background: ${Indica};
    }
    &.sativa {
      background: ${Sativa};
    }
  }
`;

export function Trait({ type, label }) {
  return (
    <TraitStyles>
      <div className={`trait-color ${type.toLowerCase()}`}></div>
      {label}
    </TraitStyles>
  )
}