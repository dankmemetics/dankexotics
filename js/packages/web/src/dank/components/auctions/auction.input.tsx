import styled from 'styled-components';
import { useState } from 'react';
import { Background, Green, Red, Primary3 } from '../brand/brand.colors';
import { useUserAccounts, useConnection, useMeta } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { AuctionView, useUserBalance, useBidsForAuction } from '../../../hooks';
import { sendPlaceBid } from '../../../actions/sendPlaceBid';
import { sendRedeemBid } from '../../../actions/sendRedeemBid';
import { sendCancelBid } from '../../../actions/cancelBid';


export const AuctionInputStyles = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;

    @media (max-width: 640px) {
        display: none;
    }


    img.currency {
        border: none !important;
        border-radius: 0 !important;
        width: 42px !important;
        height: 42px !important;
        margin: 0 30px 0 0;
    }

    input {
        width: calc(100% - 300px);
        height: 42px;
        border-radius: 21px;
        border: 2px solid white;
        padding: 0 15px;
        margin: 0 30px 0 0;
        font-size: 18px;
    }

    a.button {
        width: 120px;
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
    }

    div.popup {
        position: absolute;
        right: 0px;
        top: 70px;
        background: ${Background};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        padding: 0 30px;
        border-radius: 5px;

        &.state-0 { display: none; }
        &.state-1 { background: ${Green}; }
        &.state-2 { background: ${Red}; }

        p {
            font-size: 18px;
            font-weight: bold;
        }
    }

    a.redeem-button {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${Primary3};
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export function AuctionInput({ auction, minPrice, ended }: { auction: AuctionView | undefined, minPrice: number | undefined, ended: boolean }) {
    const connection = useConnection();
    const { accountByMint } = useUserAccounts();
    const wallet = useWallet();

    const mintKey = auction?.auction.info.tokenMint;
    const balance = useUserBalance(mintKey);
    const myPayingAccount = balance.accounts[0];

    const { prizeTrackingTickets, bidRedemptions } = useMeta();
    const bids = useBidsForAuction(auction?.auction.pubkey || '');

    const [value, setValue] = useState(0);
    const [popup, setPopup] = useState(0);

    let winnerIndex: number | null = null;

    if (auction?.myBidderPot?.pubkey) {
        winnerIndex = auction.auction.info.bidState.getWinnerIndex(auction.myBidderPot?.info.bidderAct);
    }

    const eligible = winnerIndex !== null;

    if (!ended) {
        return(
            <AuctionInputStyles>
                <img src="/images/solana.svg" className="currency"/>
                <input type="number" min={0} placeholder="Amount in SOL" value={value} onChange={e => setValue(parseFloat(e.target.value))}/>
                <a
                    className="button"
                    onClick={async e => {
                        if (auction && value >= (minPrice || 0)) {
                            try {
                                const bid = await sendPlaceBid(
                                    connection,
                                    wallet,
                                    myPayingAccount.pubkey,
                                    auction,
                                    accountByMint,
                                    value,
                                );
    
                                setPopup(1);
                                setTimeout(() => { setPopup(0); }, 5000);
                            } catch (error) {
                                console.log('error', error);
                                setPopup(2);
                                setTimeout(() => { setPopup(0); }, 5000);
                            }
                        }
                    }}
                >
                    Make Bid
                </a>
    
                <div className={`popup state-${popup}`}>
                    <p>
                        {popup === 1 ? 'Sucessfully placed bid' : ''}
                        {popup === 2 ? 'Failed to placed bid' : ''}
                    </p>
                </div>
            </AuctionInputStyles>
        )
    } else {
        return(
            <AuctionInputStyles>
                <a
                    className="redeem-button"
                    onClick={async e => {
                        if (auction && bids) {
                            if (eligible) {
                                try {
                                    await sendRedeemBid(
                                        connection,
                                        wallet,
                                        myPayingAccount.pubkey,
                                        auction,
                                        accountByMint,
                                        prizeTrackingTickets,
                                        bidRedemptions,
                                        bids,
                                    );
    
                                    setPopup(1);
                                    setTimeout(() => { setPopup(0); }, 5000);
                                } catch (error) {
                                    console.log('error', error);
                                    setPopup(2);
                                    setTimeout(() => { setPopup(0); }, 5000);
                                }
                            } else {
                                try {
                                    await sendCancelBid(
                                        connection,
                                        wallet,
                                        myPayingAccount.pubkey,
                                        auction,
                                        accountByMint,
                                        bids,
                                        bidRedemptions,
                                        prizeTrackingTickets,
                                    );
    
                                    setPopup(1);
                                    setTimeout(() => { setPopup(0); }, 5000);
                                } catch (error) {
                                    console.log('error', error);
                                    setPopup(2);
                                    setTimeout(() => { setPopup(0); }, 5000);
                                }
                            }
                        }
                    }}
                >
                    {eligible ? 'Redeem Bid' : 'Refund Bid'}
                </a>

                <div className={`popup state-${popup}`}>
                    <p>
                        {popup === 1 ? 'Sucessfully claimed bid' : ''}
                        {popup === 2 ? 'Failed to claim bid' : ''}
                    </p>
                </div>
            </AuctionInputStyles>
        )
    }
}