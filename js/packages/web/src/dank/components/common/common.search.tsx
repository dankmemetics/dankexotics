import { createSliderWithTooltip, Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { setInput, setTerpene, setThc, setCbd } from '../../redux/redux.search';

import { Primary } from '../brand/brand.colors';

export const SearchStyles = styled.div`
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

      @media (max-width: 640px) {  
        width: 100%;
      }

      p {
        font-weight: 600;
        font-size: 14px;
        padding: 15px 0;

        &.mod-padding {
          padding: 15px 0 0 0;
        }
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

        &.active {
          div.cb {
            background: white;
          }
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

  div.range-input {
    display: flex;
    align-items: center;

    div.input {
      p {
        font-size: 11px;
        padding: 5px 0;
      }
      input {
        width: 50px;
        height: 24px;
        border-radius: 5px;
        padding: 0 0 0 5px !important;
        font-size: 14px;
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export interface SearchI {
  input: string,
  terpenes: {
    myrcene: boolean,
    caryophyllene: boolean,
    linalool: boolean,
    pinene: boolean,
    humulene: boolean,
    limonene: boolean,
  },
  thc: Array<number>,
  cbd: Array<number>,
  setInput(payload: string): void,
  setTerpene(payload: { terpene: string, value: boolean }): void,
  setThc(payload: Array<number>): void,
  setCbd(payload: Array<number>): void,
}

export function SearchComponent({
  input,
  terpenes,
  thc,
  cbd,
  setInput,
  setTerpene,
  setThc,
  setCbd,
}: SearchI) {
  const RangeInput = createSliderWithTooltip(Range);

  return (
    <SearchStyles>
      <input type="text" placeholder="Search for Dank Nuggets" value={input} onChange={e => setInput(e.target.value)}/>
      
      <div className="options">

        <div className="options-section">
          <p>Terpene Type</p>
          <div className="checkboxes">
            <a className={`checkbox ${terpenes.myrcene ? 'active' : ''}`} onClick={e => setTerpene({ terpene: 'myrcene', value: !terpenes.myrcene })}>
              <div className="cb"></div>
              Myrcene
            </a>
            <a className={`checkbox ${terpenes.caryophyllene ? 'active' : ''}`} onClick={e => setTerpene({ terpene: 'caryophyllene', value: !terpenes.caryophyllene })}>
              <div className="cb"></div>
              Caryophyllene
            </a>
            <a className={`checkbox ${terpenes.linalool ? 'active' : ''}`} onClick={e => setTerpene({ terpene: 'linalool', value: !terpenes.linalool })}>
              <div className="cb"></div>
              Linalool
            </a>
            <a className={`checkbox ${terpenes.pinene ? 'active' : ''}`} onClick={e => setTerpene({ terpene: 'pinene', value: !terpenes.pinene })}>
              <div className="cb"></div>
              Pinene
            </a>
            <a className={`checkbox ${terpenes.humulene ? 'active' : ''}`} onClick={e => setTerpene({ terpene: 'humulene', value: !terpenes.humulene })}>
              <div className="cb"></div>
              Humulene
            </a>
            <a className={`checkbox ${terpenes.limonene ? 'active' : ''}`} onClick={e => setTerpene({ terpene: 'limonene', value: !terpenes.limonene })}>
              <div className="cb"></div>
              Limonene
            </a>
          </div>
        </div>

        <div className="options-section">
          <p className="mod-padding">THC Potency</p>
          <div className="range-input">
            <div className="input">
              <p>Min</p>
              <input type="number" min={0} max={100} value={thc[0]} onChange={e => setThc([parseInt(e.target.value), thc[1]])}/>
            </div>
            <RangeInput
              onChange={value => {
                setThc(value);
              }}
              value={thc}
              trackStyle={[{ background: Primary }]}
              style={{ margin: '0 15px', padding: '20px 0 0 0' }}
            />
            <div className="input">
              <p>Max</p>
              <input type="number" min={0} max={100} value={thc[1]} onChange={e => setThc([thc[0], parseInt(e.target.value)])}/>
            </div>
          </div>

          <p className="mod-padding">CBD Potency</p>
          <div className="range-input">
              <div className="input">
                <p>Min</p>
                <input type="number" min={0} max={100} value={cbd[0]} onChange={e => setCbd([parseInt(e.target.value), cbd[1]])}/>
              </div>
              <RangeInput
                onChange={value => {
                  setCbd(value);
                }}
                value={cbd}
                trackStyle={[{ background: Primary }]}
                style={{ margin: '0 15px', padding: '20px 0 0 0' }}
              />
              <div className="input">
                <p>Max</p>
                <input type="number" min={0} max={100} value={cbd[1]} onChange={e => setCbd([cbd[0], parseInt(e.target.value)])}/>
              </div>
          </div>
        </div>

      </div>
    </SearchStyles>
  )
}

export const SearchState = state => ({
  input: state.search.input,
  terpenes: {
    myrcene: state.search.terpenes.myrcene,
    caryophyllene: state.search.terpenes.caryophyllene,
    linalool: state.search.terpenes.linalool,
    pinene: state.search.terpenes.pinene,
    humulene: state.search.terpenes.humulene,
    limonene: state.search.terpenes.limonene,
  },
  thc: state.search.thc,
  cbd: state.search.cbd,
});

export const Search = connect(SearchState, { setInput, setTerpene, setThc, setCbd })(SearchComponent);