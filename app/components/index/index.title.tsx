import Link from 'next/link';
import styled from 'styled-components';
import { Primary3 } from '../brand/brand.colors';

export const IndexTitleStyles = styled.div`
    width: 100%;
    height: 640px;
    border-bottom: 5px solid white;
    overflow: hidden;

    div.wrap {
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: auto;

        display: flex;
        align-items: center;
    }

    div.exotics {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @keyframes move {
            0% { transform: translateY(0); }
            50% { transform: translateY(-1000px); }
            100% { transform: translateY(0); }
        }

        animation: move;
        animation-duration: 25s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;

        div.exotic {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            border: 5px solid white;
            margin: 10px;
            box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);

            img {
                width: 100%;
            }
        }
    }

    div.text {
        width: 50%;
        padding: 0 0 0 90px;

        img {
            width: 64px;
            margin: 0 15px 0 0;
        }

        h2 {
            display: flex;
            align-items center;

            font-size: 48px;
            font-weight: 300;
            letter-spacing: 2px;
            padding: 0 0 15px 0;
        }

        h3 {
            font-size: 24px;
            font-weight: 400;
        }

        a.button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Primary3};
            color: white;
            text-decoration: none;
            width: 320px;
            height: 50px;
            margin: 30px 0;
            font-size: 24px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.15);

            &:hover {
                box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.25);
            }
        }
    }
`;

export function IndexTitle() {
    return(
        <IndexTitleStyles>
            <div className="wrap">
                <div className="exotics">
                    {
                        new Array(100).fill(0).map((_, i) => {
                            return(
                                <div className="exotic">
                                    <img src={`/exotics/${i + 1}.jpg`}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text">
                    
                    <h2>
                        <img src="/images/logo.png"/>
                        Dank Exotics
                    </h2>
                    <h3>The Dankest Exotic Kush on Solana</h3>
                    
                    <Link href="/auctions">
                        <a className="button">
                            View Auctions
                        </a>
                    </Link>
                </div>
            </div>
        </IndexTitleStyles>
    )
}