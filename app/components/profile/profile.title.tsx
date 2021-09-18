import styled from 'styled-components';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';

export const ProfileTitleStyles = styled.div`
  padding: 30px 15px;

  @media (max-width: 1128px) {    
    padding: 30px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    padding: 15px 0;
  }

  h4 {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    padding: 0 0 30px 0;
  }

  @media (max-width: 640px) {  
    h3 {
      font-size: 14px;
    }

    h4 {
      font-size: 18px;
    }
  }

  div.accent {
    width: 320px;
    border-bottom: 2px solid white;

    &.long {
      width: 640px;
    }

    @media (max-width: 640px) {  
      width: 240px;

      &.long {
        width: 180px;
      }
    }
  }

  div.stats {
    display: flex;
    padding: 30px 0;

    div.stat-section {
      width: 50%;
    }

    p {
      font-size: 14px;
      font-weight: bold;
      padding: 15px 0;
    }

    @media (max-width: 640px) {  
      flex-wrap: wrap;

      div.stat-section {
        width: 100%;
        padding: 15px 0;
      }
    }
  }
`;

export function ProfileTitle() {
  return (
    <ProfileTitleStyles>
      <h3>
        6tUdEfy7uiGYHoLFQwSWdBwtYsDhSKj8ZJgcTtb4gktd
      </h3>
      <h4>
        has 420 Dank Exotic Nuggets
      </h4>

      <div className="accent"/>

      <div className="stats">

        <div className="stat-section">
          <p>Most Common Terpene</p>
          <Trait type="myrcene" label="Myrcene"/>
          <p>Most Common Type</p>
          <Trait type="indica" label="Indica"/>
        </div>

        <div className="stat-section">
          <p>Average THC Potency (69%)</p>
          <Meter width={69} height={25}/>

          <p>Average CBD Potency (6.9%)</p>
          <Meter width={6.9} height={25}/>
        </div>

      </div>

      <div className="accent long"/>
    </ProfileTitleStyles>
  )
}