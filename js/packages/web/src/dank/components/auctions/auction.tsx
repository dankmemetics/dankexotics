import BN from 'bn.js';
import { get } from 'superagent';
import { connect } from 'react-redux';
import { useLayoutEffect, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';
import { AuctionBid } from './auction.bid';
import { AuctionInput } from './auction.input';
import { setAuction, setLoading } from '../../redux/redux.profile';
import { Exotics } from '../../exotics';
import { fromLamports } from '@oyster/common';
import { useAuction, useBidsForAuction } from '../../../hooks';
import { Loading } from '../common/common.loading';

export const AuctionStyles = styled.div`
    div.title {
        display: flex;
        padding: 30px;

        img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 5px solid white;
            margin: 0 30px 0 0;
        }

        div.text {
            padding: 15px;

            h2 {
                font-size: 32px;
                font-weight: 300;
                letter-spacing: 1.5px;
                padding: 0 0 10px 0;
            }

            h3 {
                font-size: 24px;
                font-weight: 600;
                letter-spacing: 1.5px;
                padding: 15px 0 5px 0;
            }

            h4 {
                font-size: 32px;
                font-weight: 400;
                padding: 15px 0;
            }

            div.info {
                display: flex;
                align-items; center;

                div.infoc {
                    width: calc(100% / 3);
                    padding: 15px 0;

                    h3 {
                        font-size: 18px;
                        padding: 0 0 5px 0;
                    }

                    h4 {
                        display: flex;
                        align-items: center;
                        font-size: 24px;
                        padding: 0;

                        img {
                            width: 32px;
                            height: 32px;
                            border: none;
                            border-radius: 0;
                            margin: 0 15px 0 0;
                        }
                    }
                }
            }

            div.accent {
                width: 320px;
                height: 2px;
                background: white;
                margin: 0 0 15px 0;
            }

            div.traits {
                display: flex;

                p {
                    font-size: 14px;
                    font-weight: bold;
                    padding: 10px 0;
                }

                div.trait {
                    margin: 0 30px 0 0;
                }
            }

            div.potency {
                padding: 15px 0;
        
                p {
                    font-size: 14px;
                    font-weight: bold;
                    padding: 10px 0;
                }
            }

            p {
                font-size: 18px;
                line-height: 2;
                padding: 15px 0;
            }
        }

        div.bid-list {
            margin: 15px 0;
            width: 100%;
            height: 320px;
            overflow: hidden;
            overflow-y: auto;
            border-radius: 5px;
        }
    }
`;

export function padding(num: number) {
    if (num >= 10) {
        return '' + num;
    } else {
        return '0' + num;
    }
}

export interface AuctionI {
    auction: any;
    loading: boolean;
    setAuction(payload: any): void;
    setLoading(payload: boolean): void;
}

export function AuctionComponent({ auction, loading, setAuction, setLoading }: AuctionI) {
    const { id } = useParams<{ id: string }>();
    const auctionHook = useAuction(id);
    const bids = useBidsForAuction(auctionHook?.auction.pubkey || '');

    let ended = false;
    const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const minPrice = fromLamports(new BN(auctionHook?.auction?.info.priceFloor.minPrice || 0).toNumber());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(auctionHook?.auction?.info?.timeToEnd() || { days: 0, hours: 0, minutes: 0, seconds: 0 });
        }, 1000);
        
        setTimer(auctionHook?.auction?.info?.timeToEnd() || { days: 0, hours: 0, minutes: 0, seconds: 0 });

        return () => clearInterval(interval);
    }, [auctionHook]);

    if (timer.days === 0 && timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
        ended = true;
    }

    useLayoutEffect(() => {
        setLoading(true);

        (async() => {
            if (auctionHook) {
                const pubkey = auctionHook.thumbnail.metadata.pubkey;
                const uri = auctionHook.thumbnail.metadata.info.data.uri;
                const data = await get(uri);

                setAuction({
                    auction: auctionHook,
                    pubkey,
                    name: data.body.name,
                    image: data.body.image,
                    description: data.body.description,
                    attributes: data.body.attributes,
                });
                setLoading(false);
            }
        })();
    }, [auctionHook]);

    let type = 'Indica';
    let terpene = 'Myrcene';
    let thc = '19';
    let cbd = '1';
    let index = 1;

    const winners = auction.auction?.items?.length || 0;

    if (auction?.attributes) {
        for (let i = 0; i < auction.attributes.length; i++) {
            const attr: any = auction.attributes[i];
    
            if (attr.trait_type === 'thc') {
                thc = attr.value;
            }
    
            if (attr.trait_type === 'cbd') {
                cbd = attr.value;
            }
    
            if (attr.trait_type === 'type') {
                type = attr.value;
            }
    
            if (attr.trait_type === 'terpene') {
                terpene = attr.value;
            }
    
            if (attr.trait_type === 'ref_id') {
                index = parseInt(attr.value);
            }
        }
    }

    return(
        <AuctionStyles>
            <Loading active={loading}/>
            <div className="title">
                <img src={`/exotics/${index}.jpg`}/>
                <div className="text">
                    <h2>{Exotics[index].name}</h2>
                    <div className="accent"/>

                    <div className="info">
                        <div className="infoc">
                            <h3>Time Left</h3>
                            <h4>
                                {ended ? 'Ended' : `${padding(timer.days)}:${padding(timer.hours)}:${padding(timer.minutes)}:${padding(timer.seconds)}`}
                            </h4>
                        </div>
                        <div className="infoc">
                            <h3>Minimum Bid</h3>
                            <h4>
                                <img src="/images/solana.svg"/>
                                {minPrice.toFixed(2)}
                            </h4>
                        </div>
                        <div className="infoc">
                            <h3>Bid Outcome</h3>
                            <h4>{winners} winners</h4>
                        </div>
                    </div>

                    <h3>Bid on this Dank Nugget</h3>
                    <AuctionInput auction={auctionHook} minPrice={minPrice} ended={ended}/>

                    <h3>Bids on this Dank Nugget</h3>
                    <div className="bid-list">
                        {
                            bids.map(bid => {
                                return (<AuctionBid bid={bid}/>);
                            })
                        }
                    </div>

                    <div className="traits">
                        <div className="trait">
                            <p>Terpene</p>
                            <Trait type={terpene} label={terpene} size="large"/>
                        </div>
                        <div className="trait">
                            <p>Type</p>
                            <Trait type={type} label={type} size="large"/>
                        </div>
                    </div>

                    <div className="potency">
                        <p>Average THC Potency ({thc}%)</p>
                        <Meter width={thc} height={20}/>

                        <p>Average CBD Potency ({cbd}%)</p>
                        <Meter width={cbd} height={20}/>
                    </div>

                    <h3>About this Dank Nugget</h3>
                    <p>
                        {auction.description}
                    </p>
                </div>
            </div>
        </AuctionStyles>
    )
}

export const AuctionState = state => ({
    auction: state.profile.auction,
    loading: state.profile.loading,
})

export const Auction = connect(AuctionState, { setAuction, setLoading })(AuctionComponent);