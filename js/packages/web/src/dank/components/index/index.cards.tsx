import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Primary3 } from '../brand/brand.colors';
import { Gradient3 } from '../brand/brand.gradients';
import { Nugget } from '../common/common.nugget';
import { Exotics } from '../../exotics';

export const IndexCardsStyles = styled.div`
    position: relative;
    width: 100%;
    height: 640px;
    border-bottom: 5px solid white;
    overflow: hidden;

    @media (max-width: 640px) {  
        height: auto;
    }

    ${Gradient3}

    div.wrap {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: auto;

        display: flex;
        align-items: center;

        @media (max-width: 640px) {  
            flex-wrap: wrap;
        }

        div.graphic {
            display: flex;
            width: 50%;
            height: 100%;
            position: relative;
            top: -30px;

            @media (max-width: 1128px) {    
                left: 90px;
            }

            @media (max-width: 640px) {  
                width: 100%;
                height: 420px;
                left: -60px;
            }

            div.nugget {
                position: absolute;
                left: calc(50% - 120px);
                top: calc(50% - 210px);
                transform: scale(0.75);
                z-index: 1;
                box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.15);
                pointer-events: none;

                &.nugget1 {
                    left: calc(50% - 320px);
                    transform: scale(0.65) rotate(-15deg);
                    
                    @keyframes move1 {
                        0% { transform: scale(0.65) rotate(-15deg) translateY(0); }
                        50% { transform: scale(0.65) rotate(-15deg) translateY(-25px); }
                        100% { transform: scale(0.65) rotate(-15deg) translateY(0); }
                    }

                    animation: move1;
                    animation-duration: 2.5s;
                    animation-timing-function: ease;
                    animation-iteration-count: infinite;
                }

                &.nugget2 {
                    z-index: 3;
                }

                &.nugget3 {
                    left: calc(50% + 100px);
                    transform: scale(0.65) rotate(15deg);

                    @keyframes move2 {
                        0% { transform: scale(0.65) rotate(15deg) translateY(0); }
                        50% { transform: scale(0.65) rotate(15deg) translateY(-25px); }
                        100% { transform: scale(0.65) rotate(15deg) translateY(0); }
                    }

                    animation: move2;
                    animation-duration: 2.5s;
                    animation-delay: 1.25s;
                    animation-timing-function: ease;
                    animation-iteration-count: infinite;
                }
            }
        }

        div.card-text {
            width: 50%;
            padding: 30px;

            @media (max-width: 640px) {  
                width: 100%;
                padding: 60px 30px !important;
            }

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
    
            @media (max-width: 1128px) {
                padding: 0 0 0 30px;
                
                img {
                    width: 42px;
                }
    
                h2 {
                    font-size: 32px;
                }
    
                h3 {
                    font-size: 18px;
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
    }
`;

export function IndexCards() {
    return(
        <IndexCardsStyles>
            <div className="wrap">
                <div className="card-text">

                    <h2>
                        <img src="/images/logo.png"/>
                        Dank Exotics
                    </h2>
                    <h3>The Dankest Exotic Kush on Solana</h3>

                    <Link to="/auctions">
                        <a className="button">
                            View Auctions
                        </a>
                    </Link>
                </div>
                <div className="graphic">
                    <Nugget className="nugget nugget1" image={36} label={Exotics[36].name} type={Exotics[36].type} terpene={Exotics[36].terpene} thc={Exotics[36].thc} cbd={Exotics[36].cbd}/>
                    <Nugget className="nugget nugget2" image={25} label={Exotics[25].name} type={Exotics[25].type} terpene={Exotics[25].terpene} thc={Exotics[25].thc} cbd={Exotics[25].cbd}/>
                    <Nugget className="nugget nugget3" image={9} label={Exotics[9].name} type={Exotics[9].type} terpene={Exotics[9].terpene} thc={Exotics[9].thc} cbd={Exotics[9].cbd}/>
                </div>
            </div>
        </IndexCardsStyles>
    )
}