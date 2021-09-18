import styled from 'styled-components';
import { Nugget } from '../common/common.nugget';
import { Modifier } from '../common/common.modifier';

export const TokeSearchStyles = styled.div`
  width: 100%;
  padding: 30px 0;

  input {
    font-size: 18px;
    padding: 0 30px;
    margin: 15px;
    width: calc(100% - 30px);
    height: 50px;
    border-radius: 25px;
    border: none;
  }

  div.results {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
  }
`;

export function TokeSearch() {
  return (
    <TokeSearchStyles>
      <input type="text" placeholder="Search For Dank Nuggets" />
      
      <div className="results">
        <Nugget type="toke" />
        <Modifier type="toke" />
      </div>
    </TokeSearchStyles>
  )
}