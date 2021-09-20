import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Primary3 } from '../brand/brand.colors';
import { Gradient4, Gradient2 } from '../brand/brand.gradients';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';

export const IndexProfileStyles = styled.div`
    width: 100%;
    height: 640px;
    border-bottom: 5px solid white;
    overflow: hidden;
    ${Gradient4}

    @media (max-width: 640px) {  
        height: auto;
    }

    div.wrap {
        position: relative;
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

        div.graphic {
            background: ${Gradient2};
            overflow: hidden;
            width: 50%;
            border-radius: 5px;
            padding: 30px;

            @media (max-width: 1128px) {    
                position: relative;
            }

            @media (max-width: 640px) {  
                width: 100%;
                margin: 0 0 30px 0;
            }

            h3 {
                font-size: 18px;
                font-weight: 500;
                padding: 0 0 15px 0;
            }

            h4 {
                display: flex;
                align-items: center;
                font-size: 24px;
                font-weight: 600;
                padding: 0 0 30px 0;
            }

            div.accent {
                width: 180px;
                border-bottom: 2px solid white;
            
                &.long {
                    width: 320px;
                }
            }
            
            div.stats {
                display: flex;
                padding: 30px 0;
            
                div.stat-section {
                    width: 50%;
                }
            
                p {
                    font-size: 14px;
                    font-weight: bold;
                    padding: 15px 0;
                }

                @media (max-width: 640px) {  
                    flex-wrap: wrap;
              
                    div.stat-section {
                      width: 100%;
                      padding: 15px 0;
                    }
                }
            }
        }

        div.card-text {
            width: 50%;
            padding: 30px 30px 30px 60px;

            @media (max-width: 640px) {  
                width: 100%;
                padding: 60px 30px !important;
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
    }
`;

export function IndexProfile() {
    return(
        <IndexProfileStyles>
            <div className="wrap">
                <div className="graphic">
                    <h3>6tUdEfy7uiGYHoLFQwSWdBwtYsDhSKj8ZJgcTtb4gktd</h3>
                    <h4>has 420 dank exotic nuggets</h4>

                    <div className="accent"/>

                    <div className="stats">
        
                        <div className="stat-section">
                            <p>Most Common Terpene</p>
                            <Trait type="myrcene" label="Myrcene"/>

                            <p>Most Common Type</p>
                            <Trait type="indica" label="Indica"/>
                        </div>

                        <div className="stat-section">
                            <p>Average THC Potency (69%)</p>
                            <Meter width={69} height={25}/>

                            <p>Average CBD Potency (6.9%)</p>
                            <Meter width={6.9} height={25}/>
                        </div>

                    </div>

                    <div className="accent long"/>
                </div>
                <div className="card-text">
                    <h3>Show off your Dankest Kush</h3>
                    <p>
                        Already have Dank Exotics? Share your profile with others and show off your rarest and dankest kush to all your friends.
                    </p>
                    <Link to="/profile">
                        <a className="button">
                            View Profile
                        </a>
                    </Link>
                </div>
            </div>
        </IndexProfileStyles>
    )
}