import BN from 'bn.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Background, Primary3 } from '../brand/brand.colors';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';
import { fromLamports } from '@oyster/common';

export const AuctionsCardStyles = styled.div`
    position: relative;
    display: flex;
    background: ${Background};
    width: 540px;
    height: 320px;
    overflow: hidden;
    border-radius: 5px;
    padding: 10px;
    margin: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

    img {
        margin: 5px 15px 5px 5px;
        width: 180px;
        height: 180px;
        border: 5px solid white;
        border-radius: 50%;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        width: 100%;
        height: auto;

        img {
            margin: 15px auto;
        }
    }

    div.text {
        width: calc(100% - 210px);

        @media (max-width: 640px) {
            width: 100%;
        }

        h3 {
            font-size: 16px;
            padding: 10px 5px;
        }

        div.accent {
            width: 120px;
            height: 2px;
            background: white;
            margin: 0 10px 10px 5px;
        }

        div.traits {
            display: flex;
            flex-wrap: wrap;
        }
      
        div.trait {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 5px 5px;
            font-size: 14px;
            font-weight: bold;

            &.marker {
                p { width: 90px; }
            }

            div.meter-wrap {
                width: calc(100% - 90px);
            }
        }

        div.info {
            display: flex;

            div.info-c {
                width: 50%;
                padding: 5px;

                p.label {
                    font-size: 14px;
                    font-weight: bold;
                    padding: 0 0 5px 0;
                }

                p {
                    font-size: 18px;
                }
            }
        }

        div.bid {
            padding: 5px;

            @media (max-width: 640px) {
                padding: 5px 5px 60px 5px;
            }

            p.label {
                font-size: 14px;
                font-weight: bold;
                padding: 0 0 5px 0;
            }

            p {
                display: flex;
                align-items: center;
                font-size: 24px;
                font-weight: bold;
            }

            img {
                border: none;
                border-radius: 0;
                height: auto;
                width: 24px;
                margin: 0 10px 0 0;
            }
        }

        a.view-button {
            position: absolute;
            right: 15px;
            bottom: 35px;
            width: 180px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Primary3};
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;

            @media (max-width: 640px) {
               bottom: 15px;
            }
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

export function AuctionsCard({
    auction,
    name,
    image,
    description,
    attributes,
}) {
    let type = 'Indica';
    let terpene = 'Myrcene';
    let thc = '19';
    let cbd = '1';
    let url = '1';

    let ended = false;

    const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0});

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(auction.auction.info.timeToEnd());
        }, 1000);
        
        setTimer(auction.auction.info.timeToEnd());

        return () => clearInterval(interval);
    }, [auction]);

    if (timer.days === 0 && timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
        ended = true;
    }

    const minPrice = fromLamports(new BN(auction.auction.info.priceFloor.minPrice).toNumber());

    for (let i = 0; i < attributes.length; i++) {
        const attr: any = attributes[i];

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
            url = attr.value;
        }
    }

    return(
        <AuctionsCardStyles>
            <img src={image}/>
            <div className="text">
                <h3>{name}</h3>
                <div className="accent"/>

                <div className="traits">
                    <div className="trait label">
                        <Trait type={type} label={type}/>
                        <Trait type={terpene} label={terpene}/>
                    </div>


                    <div className="trait marker">
                        <p>THC {thc}%</p>
                        <div className="meter-wrap">
                        <Meter width={thc} height={15} />
                        </div>
                    </div>

                    <div className="trait marker">
                        <p>CBD {cbd}%</p>
                        <div className="meter-wrap">
                        <Meter width={cbd} height={15}/>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="info-c">
                        <p className="label">Winners</p>
                        <p>100</p>
                    </div>
                    <div className="info-c">
                        <p className="label">Time Left</p>
                        <p>
                            {ended ? 'Ended' : `${padding(timer.days)}:${padding(timer.hours)}:${padding(timer.minutes)}:${padding(timer.seconds)}`}
                        </p>
                    </div>
                </div>
                <div className="bid">
                    <p className="label">Starting Bid</p>
                    <p>
                        <img src="/images/solana.svg"/>
                        {minPrice.toFixed(2)}
                    </p>
                </div>
                
                <Link to={`/auctions/${auction.auction.pubkey}`}>
                    <a className="view-button">
                        View Auction
                    </a>
                </Link>
            </div>
        </AuctionsCardStyles>
    )
}