import { get } from 'superagent';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NftNugget } from '../common/common.nft.nugget';
import { useUserArts } from '../../../hooks';
import { setLoading, setConnected, setNuggets } from '../../redux/redux.profile';

import { Loading } from '../common/common.loading';
import { Connect } from '../common/common.connect';
import { useLayoutEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export const ProfileSearchStyles = styled.div`
  width: 100%;
  padding: 30px 0;
  
  @media (max-width: 1128px) {    
    padding: 30px 15px;
  }

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
    justify-content: center;
    padding: 30px 0;
  }
`;

export interface ProfileSearchI {
  loading: boolean,
  owned: Array<any>,
  created: Array<any>,
  setLoading(payload: boolean): void,
  setConnected(payload: boolean): void,
  setNuggets(payload: Array<any>): void,
}

export function ProfileSearchComponent({
  loading,
  owned,
  created,
  setLoading,
  setConnected,
  setNuggets,
}) {
  const { connected, publicKey } = useWallet();
  const ownedMetadata = useUserArts();

  setConnected(connected);

  useLayoutEffect(() => {
    if (ownedMetadata.length > 0) {
      (async () => {
        const owned: Array<any> = [];

        for (let i = 0; i < ownedMetadata.length; i++) {
            const item = ownedMetadata[i];
            const uri = item.metadata.info.data.uri;
            const data = await get(uri);

            owned.push({
              pubkey: item.metadata.pubkey,
              name: data.body.name,
              image: data.body.image,
              description: data.body.description,
              attributes: data.body.attributes,
            });
        }

        setNuggets(owned);
      })();
    }
  }, [ownedMetadata]);

  return (
    <ProfileSearchStyles>
      <Loading active={connected && ownedMetadata.length === 0}/>
      <Connect active={!connected}/>
      <div className="results">
        {
          owned.map(item => {
            return(
              <NftNugget
                pubkey={item.pubkey}
                image={item.image}
                attributes={item.attributes}
              />
            )
          })
        }
      </div>
    </ProfileSearchStyles>
  )
}

export const ProfileSearchState = state => ({
    loading: state.profile.loading,
    owned: state.profile.nuggets.owned,
    created: state.profile.nuggets.created,
})

export const ProfileSearch = connect(ProfileSearchState, { setLoading, setConnected, setNuggets })(ProfileSearchComponent);