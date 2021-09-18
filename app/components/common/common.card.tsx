import styled from 'styled-components';
import { Background, Primary, Primary3, Myrcene } from '../brand/brand.colors';

export const CardStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${Background};
  width: 320px;
  height: 420px;
  overflow: hidden;
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

  img {
    margin: 5px auto 15px auto;
    width: 180px;
    border: 5px solid white;
    border-radius: 50%;
  }

  div.text {
    background: ${Background};
    width: 100%;

    h3 {
      font-size: 16px;
      padding: 0 10px 5px 10px;
    }

    div.accent {
      width: 120px;
      height: 2px;
      background: white;
      margin: 0 10px 10px 10px;
    }

    div.traits {
      display: flex;
      flex-wrap: wrap;
    }

    div.trait {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 5px 10px;
      font-size: 14px;

      b {
        padding: 0 10px;
      }

      div.trait-color {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid white;
        margin: 0 10px 0 0;

        &.myrcene {
          background: ${Myrcene};
        }
      }

      &.marker {
        align-items: center;
        justify-content: flex-start;

        div.meter-wrap {
          width: calc(100% - 90px);
        }

        p {
          font-weight: bold;
          width: 90px;
          padding: 0 10px 0 0;
        }
      }

      &.rarity {
        background: ${Primary3};
        border-radius: 5px;
        position: absolute;
        right: 10px;
        top: 10px;
        width: auto;
        justify-content: center;
        padding: 2.5px 10px;

        font-size: 12px;
        font-weight: bold;
      }

      &.potency {
        flex-direction: column;
        align-items: flex-start;
        
        p {
          font-weight: bold;
          padding: 0 0 10px 0;
        }

        div.meter-wrap {
          width: 100%;
        }
      }
    }

    a.view-button {
      position: absolute;
      left: 15px;
      bottom: 15px;
      width: calc(100% - 30px);
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${Primary3};
      border-radius: 5px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }

  }
`;