import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs';
import { TiCancel } from 'react-icons/ti';
import { fromLamports } from '@oyster/common';

export const AuctionBidStyles = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;

    &:nth-child(even) {
        background: rgba(255, 255, 255, 0.05);
    }

    &:nth-child(odd) {
        background: rgba(255, 255, 255, 0.25);
    }

    div.address {
        display: flex;
        align-items: center;
        width: calc(100% - 300px);
        height: 100%;
        padding: 0 10px;

        p.label {
            font-size: 12px !important;
            font-weight: bold;
            padding: 0 0 0 10px !important;
        }                    
    }

    div.amount {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 300px;
        height: 100%;
        font-size: 14px;
        padding: 0 10px;

        img.currency {
            width: 24px;
            height: 24px;
            border: none;
            border-radius: 0;
            margin: 0 15px 0 0;
        }
        

        p.label {
            font-size: 14px !important;
            font-weight: bold;
            padding: 0;
        }
    }
`;

export function AuctionBid({ bid }) {
    const cancelled = bid?.info?.cancelled || false;
    const bidder = bid?.info?.bidderPubkey || '~';

    return(
        <AuctionBidStyles>
            <div className="address">
                {
                    cancelled ?
                    <TiCancel/>
                    :
                    <BsCheckCircle/>
                }
                
                <p className="label">
                    {bidder}
                </p>
            </div>
            <div className="amount">
                <img src="/images/solana.svg" className="currency"/>
                <p className="label">
                    {fromLamports(bid?.info?.lastBid || 0).toFixed(2)} SOL
                </p>
            </div>
        </AuctionBidStyles>
    )
}