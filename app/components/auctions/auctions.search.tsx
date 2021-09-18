import styled from 'styled-components';
import { createSliderWithTooltip, Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Primary } from '../brand/brand.colors';

export const AuctionsSearchStyles = styled.div`
  padding: 30px 15px;

  input {
    font-size: 18px;
    padding: 0 30px;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
  }

  div.options {
    display: flex;
    flex-wrap: wrap;

    div.options-section {
      width: 50%;
      padding: 15px;

      &.full {
        width: 100%;
      }

      p {
        font-weight: 600;
        font-size: 14px;
        padding: 15px 0;
      }

      div.checkboxes {
        display: flex;
        flex-wrap: wrap;
      }

      a.checkbox {
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 10px 0;
        width: 50%;
        cursor: pointer;

        &.condensed {
          width: calc(100% / 4);
        }

        div.cb {
          width: 15px;
          height: 15px;
          border-radius: 2.5px;
          border: 2px solid white;
          margin: 0 10px 0 0;
        }
      }

      div.mini-inputs {
        display: flex;
        align-items: center;

        p {
          font-size: 14px;
          padding: 0 15px 0 0;
        }

        input {
          border-radius: 5px;
          height: 30px;
          padding: 0 10px;
          font-size: 14px;
          &:first-of-type {
            margin: 0 15px 0 0;
          }
        }
      }
    }
  }
`;

export function AuctionsSearch() {
  const RangeInput = createSliderWithTooltip(Range);

  return (
    <AuctionsSearchStyles>
      <input type="text" placeholder="Search for Dank Nuggets"/>
      
      <div className="options">

        <div className="options-section">
          <p>Terpene Type</p>
          <div className="checkboxes">
            <a className="checkbox">
              <div className="cb"></div>
              Myrcene
            </a>
            <a className="checkbox">
              <div className="cb"></div>
              Caryophyllene
            </a>
            <a className="checkbox">
              <div className="cb"></div>
              Linalool
            </a>
            <a className="checkbox">
              <div className="cb"></div>
              Pinene
            </a>
            <a className="checkbox">
              <div className="cb"></div>
              Humulene
            </a>
            <a className="checkbox">
              <div className="cb"></div>
              Limonene
            </a>
          </div>
        </div>

        <div className="options-section">
          <p>THC Potency</p>
          <RangeInput defaultValue={[0, 100]} trackStyle={[{ background: Primary }]} style={{ margin: '0 0 30px 0' }}/>
          <p>CBD Potency</p>
          <RangeInput defaultValue={[0, 100]} trackStyle={[{ background: Primary }]} style={{ margin: '0 0 15px 0' }}/>
        </div>

      </div>
    </AuctionsSearchStyles>
  )
}