import Link from 'next/link';
import styled from 'styled-components';
import { Primary3 } from '../brand/brand.colors';
import { Gradient3 } from '../brand/brand.gradients';
import { Nugget } from '../common/common.nugget';
import { Exotics } from '../../exotics';

export const IndexCardsStyles = styled.div`
    width: 100%;
    height: 640px;
    border-bottom: 5px solid white;
    overflow: hidden;

    ${Gradient3}

    div.wrap {
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: auto;

        display: flex;
        align-items: center;

        div.graphic {
            display: flex;
            width: 50%;
            height: 100%;
            position: relative;

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
                    <h3>Over 100 Exotic Strains of Kush</h3>
                    <p>
                        Ranging from Purple Kush to Afghan Goo. There are over 100 Dank Exotic NFTs to choose from.
                        Learn more about each Dank Exotic by searching the Dankpedia.
                    </p>
                    <Link href="/dankpedia">
                        <a className="button">
                            View Dankpedia
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