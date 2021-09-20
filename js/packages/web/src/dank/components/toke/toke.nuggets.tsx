import styled from 'styled-components';
import { Primary2 } from '../brand/brand.colors';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';

export const TokeNuggetsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px 15px;

  div.accent {
    width: 320px;
    border-bottom: 2px solid white;
    margin: 0 0 15px 0;
  }

  div.tokezone {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div.dropzone {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 320px;
      height: 420px;
      border: 2px dashed white;
      padding: 15px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      margin: 30px;
    }

    a.toke {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 420px;
      height: 50px;
      background: ${Primary2};
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      margin: 15px 0;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      opacity: 0.5;
    }
  }

  div.loot-chance {
    width: 100%;
    padding: 15px;

    div.section {
      display: flex;
      width: 100%;

      div.column {
        width: 50%;
      }
    }

    h3 {
      font-weight: 500;
      font-size: 24px;
      padding: 0 0 15px 0;
    }

    p {
      font-size: 14px;
      font-weight: bold;
      padding: 15px 0;
      
      img {
        height: 24px;
        margin: 0 15px 0 0;
      }

      &.label {
        display: flex;
        align-items: center;
        padding: 0;
        font-size: 24px;
        font-weight: bold;
      }
    }

    div.inline {
      display: flex;

      div.inline-section {
        width: 50%;
      }
    }

    div.traits {
      display: flex;
      padding: 0 0 15px 0;
    }

    div.loot-drops {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0 15px 0;

      div.loot {
        width: 25%;
        font-size: 14px;
      }
    }
  }
`;

export function TokeNuggets() {
  return (
    <TokeNuggetsStyles>
      <div className="tokezone">
        <div className="dropzone">
          Add Nugget<br/>(or Paraphernalia)
        </div>
        <div className="dropzone">
          Add Nugget<br/>(or Paraphernalia)
        </div>

        <a className="toke">
          Toke Dank Nuggets
        </a>
      </div>

      <div className="loot-chance">
        <h3>Toke Results</h3>
        <div className="accent"/>

        <div className="section">
          <div className="column">
            <p>Traits</p>
            <div className="traits">
              <Trait type="indica" label="Indica"/>
              <Trait type="myrcene" label="Myrcene" />
            </div>

            <div className="inline">
              <div className="inline-section">
                <p>Rarity</p>
                <p className="label">#1 of 100</p>
              </div>
              <div className="inline-section">
                <p>Estimated Value</p>
                <p className="label">
                  <img src="/images/solana.svg"/>
                  1
                </p>
              </div>
            </div>  
          </div>

          <div className="column">
            <p>THC Potency [25%]</p>
            <Meter width={25} height={25} />
            
            <p>CBD Potency [10%]</p>
            <Meter width={10} height={25} />
          </div>
        </div>
        
      </div>
    </TokeNuggetsStyles>
  )
}