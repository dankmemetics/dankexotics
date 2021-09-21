import { get } from 'superagent';
import { connect } from 'react-redux';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { AuctionsCard } from './auctions.card';
import { AuctionViewState, useAuctions } from '../../../hooks';
import { setAuctions, setLoading } from '../../redux/redux.profile';
import { Loading } from '../common/common.loading';

export const AuctionsListStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 15px 120px 15px;
`;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
}

export interface AuctionsListI {
  auctions: Array<any>;
  loading: boolean;
  setAuctions(payload: any): void;
  setLoading(payload: boolean): void;
}

export function AuctionsListComponent({ auctions, loading, setAuctions, setLoading }: AuctionsListI) {
  const auctionsLive = useAuctions(AuctionViewState.Live);
  const auctionsEnded = useAuctions(AuctionViewState.Ended);
  const auctionsData = auctionsLive.concat(auctionsEnded);
  
  useLayoutEffect(() => {
    setLoading(true);

    if (auctionsData.length > 0) {
      (async () => {
        const items: Array<any> = [];

        for (let i = 0; i < auctionsData.length; i++) {
          const auction = auctionsData[i];
          const pubkey = auction.thumbnail.metadata.pubkey;
          const uri = auction.thumbnail.metadata.info.data.uri;

          const data = await get(uri);

          items.push({
            auction,
            pubkey,
            name: data.body.name,
            image: data.body.image,
            description: data.body.description,
            attributes: data.body.attributes,
          });
        }

        setAuctions(items);
        setLoading(false);
      })();
    }
  }, [auctionsLive, auctionsEnded]);

  return (
    <AuctionsListStyles>
      <Loading active={loading}/>

      {auctions.map(auction => {
        return(
          <AuctionsCard
            auction={auction.auction}
            name={auction.name}
            image={auction.image}
            description={auction.description}
            attributes={auction.attributes}
          />
        )
      })}
    </AuctionsListStyles>
  )
}

export const AuctionsListState = state => ({
  auctions: state.profile.auctions,
  loading: state.profile.loading,
})

export const AuctionsList = connect(AuctionsListState, { setAuctions, setLoading })(AuctionsListComponent);