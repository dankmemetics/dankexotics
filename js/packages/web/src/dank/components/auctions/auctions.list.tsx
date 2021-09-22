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
}

export function AuctionsListComponent({
  auctions,
  loading,
  setAuctions,
  setLoading,

  input,
  terpenes,
  thc,
  cbd,
}: AuctionsListI) {
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

      {auctions
      .filter(auction => {
        const exotic = {
          type: '',
          terpene: '',
          thc: 0,
          cbd: 0,
          name: auction.name,
        }

        const attributes = auction.attributes;

        for (let i = 0; i < attributes.length; i++) {
          const attr: any = attributes[i];
  
          if (attr.trait_type === 'thc') {
              exotic.thc = attr.value;
          }
  
          if (attr.trait_type === 'cbd') {
              exotic.cbd = attr.value;
          }
  
          if (attr.trait_type === 'type') {
              exotic.type = attr.value;
          }
  
          if (attr.trait_type === 'terpene') {
              exotic.terpene = attr.value;
          }
      }

        if (input && !exotic.name.includes(input)) {
            return false;
        }

        if (!terpenes.myrcene && exotic.terpene.toLowerCase() === 'myrcene') {
            return false;
        }

        if (!terpenes.caryophyllene && exotic.terpene.toLowerCase() === 'caryophyllene') {
            return false;
        }

        if (!terpenes.linalool && exotic.terpene.toLowerCase() === 'linalool') {
            return false;
        }

        if (!terpenes.pinene && exotic.terpene.toLowerCase() === 'pinene') {
            return false;
        }

        if (!terpenes.humulene && exotic.terpene.toLowerCase() === 'humulene') {
            return false;
        }

        if (!terpenes.limonene && exotic.terpene.toLowerCase() === 'limonene') {
            return false;
        }

        if (exotic.thc < thc[0] || exotic.thc > thc[1]) {
            return false;
        }

        if (exotic.cbd < cbd[0] || exotic.cbd > cbd[1]) {
            return false;
        }

        return true;
    })
      .map(auction => {
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
})

export const AuctionsList = connect(AuctionsListState, { setAuctions, setLoading })(AuctionsListComponent);