import { connect } from 'react-redux';
import styled from 'styled-components';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';
import { useWallet } from '@solana/wallet-adapter-react';

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

export interface ProfileTitleI {
  owned: any;
}

export function ProfileTitleComponent({ owned }: ProfileTitleI) {
  const { connected, publicKey } = useWallet();

  let type = {
    indica: 0,
    sativa: 0,
    hybrid: 0
  };

  let terpene = {
    myrcene: 0,
    caryophyllene: 0,
    linalool: 0,
    pinene: 0,
    humulene: 0,
    limonene: 0,
  };

  let thc = {
    total: 0,
    count: 0,
  };
  let cbd = {
    total: 0,
    count: 0
  };

  for (let i = 0; i < owned.length; i++) {
    const attributes: any = owned[i].attributes;    

    if (attributes) {
      for (let ii = 0; ii < attributes.length; ii++) {
        const attr: any = attributes[ii];
  
        if (attr.trait_type === 'thc') {
          thc.total += parseFloat(attr.value);
          thc.count++;
        }
    
        if (attr.trait_type === 'cbd') {
          cbd.total += parseFloat(attr.value);
          cbd.count++;
        }
    
        if (attr.trait_type === 'type') {
          type[attr.value.toLowerCase()]++;
        }
    
        if (attr.trait_type === 'terpene') {
          terpene[attr.value.toLowerCase()]++;
        }
      }
    }
  }

  let typeText = 'Indica';
  if (type.sativa > type.indica) { typeText = 'Sativa'; }
  if (type.hybrid > type.sativa) { typeText = 'Hybrid'; }

  let terpeneText = 'Myrcene';
  if (terpene.caryophyllene > terpene.myrcene) { terpeneText = 'Caryophyllene'; }
  if (terpene.linalool > terpene.caryophyllene) { terpeneText = 'Linalool'; }
  if (terpene.pinene > terpene.linalool) { terpeneText = 'Pinene'; }
  if (terpene.humulene > terpene.pinene) { terpeneText = 'Humulene'; }
  if (terpene.limonene > terpene.humulene) { terpeneText = 'Limonene'; }

  return (
    <ProfileTitleStyles>
      <h3>
        {publicKey?.toBase58()}
      </h3>
      <h4>
        has {owned.length} Dank Exotic Nuggets
      </h4>

      <div className="accent"/>

      <div className="stats">

        <div className="stat-section">
          <p>Most Common Terpene</p>
          <Trait type={terpeneText} label={terpeneText}/>
          <p>Most Common Type</p>
          <Trait type={typeText} label={typeText}/>
        </div>

        <div className="stat-section">
          <p>Average THC Potency ({Math.ceil(thc.total / thc.count)}%)</p>
          <Meter width={Math.ceil(thc.total / thc.count)} height={25}/>

          <p>Average CBD Potency ({Math.ceil(cbd.total / cbd.count)}%)</p>
          <Meter width={Math.ceil(cbd.total / cbd.count)} height={25}/>
        </div>

      </div>

      <div className="accent long"/>
    </ProfileTitleStyles>
  )
}

export const ProfileTitleState = state => ({
  owned: state.profile.nuggets.owned,
})

export const ProfileTitle = connect(ProfileTitleState)(ProfileTitleComponent);