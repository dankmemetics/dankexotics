import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Primary3 } from '../brand/brand.colors';

export const IndexTitleStyles = styled.div`
    width: 100%;
    height: 640px;
    border-bottom: 5px solid white;
    overflow: hidden;

    @media (max-width: 640px) {    
        height: auto;       
    }

    div.wrap {
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: auto;

        display: flex;
        align-items: center;


        @media (max-width: 640px) {    
            flex-direction: column-reverse;
            flex-wrap: wrap;
        }
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


        @media (max-width: 640px) {    
            width: 100%;
            height: 360px;
            animation: none;
        }

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

    div.card-text {
        width: 50%;
        padding: 0 0 0 90px;

        @media (max-width: 640px) {  
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 320px;
            padding: 0 !important;
        }

        h3 {
            font-size: 32px;
            font-weight: 300;
            letter-spacing: 1.5px;
            padding: 0 0 15px 0;
        }

        p {
            font-size: 18px;
            font-weight: 400;
            line-height: 2;
        }

        @media (max-width: 1128px) {    
            padding: 0 30px;

            h3 {
                font-size: 24px;
            }

            p {
                font-size: 16px;
            }
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
                <div className="card-text">
                    <h3>100 Exotic Strains of Kush</h3>
                    <p>
                        Ranging from Purple Kush to Afghan Goo. There are over 100 Dank Exotic NFTs to choose from.
                        Learn more about each Dank Exotic by searching the Dankpedia.
                    </p>
                    
                    <Link to="/dankpedia">
                        <a className="button">
                            View Dankpedia
                        </a>
                    </Link>
                </div>
            </div>
        </IndexTitleStyles>
    )
}