import styled from 'styled-components';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';
import { Exotics } from '../../exotics';

export const DankpediaNuggetStyles = styled.div`
    padding: 30px 15px;

    div.title {
        display: flex;
        align-items: center;
        padding: 30px 0;

        img {
            width: 180px;
            border-radius: 50%;
            border: 5px solid white;
        }

        div.text {
            padding: 0 0 0 45px;
        }

        h3 {
            font-size: 32px;
            font-weight: 300;
            letter-spacing: 1.5px;
            padding: 0 0 10px 0;
        }

        div.accent {
            width: 180px;
            height: 2px;
            background: white;
            margin: 0 0 15px 0;
        }

        div.traits {
            display: flex;

            div.trait {
                padding: 15px 45px 15px 0;

                p {
                    font-size: 18px;
                    font-weight: bold;
                    padding: 0 0 15px 0;
                }
            }
        }
    }

    div.potency {
        padding: 15px 0;

        p {
            font-size: 18px;
            font-weight: bold;
            padding: 30px 0;
        }
    }

    div.description {
        padding: 15px 0;

        p.label {
            font-size: 24px;
            font-weight: bold;
            padding: 15px 0;
        }

        p {
            font-size: 18px;
            line-height: 2;
            padding: 15px 0;
        }
    }
`;

export function DankpediaNugget({ nugget }) {
    const index = parseInt(nugget || '0');

    return(
        <DankpediaNuggetStyles>
            <div className="title">
                <img src={`/exotics/${nugget}.jpg`}/>
                <div className="text">
                    <h3>{Exotics[index].name}</h3>
                    <div className="accent"/>

                    <div className="traits">
                        <div className="trait">
                            <p>Terpene</p>
                            <Trait type={Exotics[index].terpene} label={Exotics[index].terpene} size="large"/>
                        </div>
                        <div className="trait">
                            <p>Type</p>
                            <Trait type={Exotics[index].type} label={Exotics[index].type} size="large"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="potency">
                <p>Average THC Potency ({Exotics[index].thc}%)</p>
                <Meter width={Exotics[index].thc} height={30}/>

                <p>Average CBD Potency ({Exotics[index].cbd}%)</p>
                <Meter width={Exotics[index].cbd} height={30}/>
            </div>

            <div className="description">
                <p className="label">About this Dank Exotic</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Convallis convallis tellus id interdum velit. Vulputate odio ut enim blandit volutpat. Bibendum est ultricies integer quis auctor elit sed. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Non blandit massa enim nec dui nunc mattis enim ut. Auctor neque vitae tempus quam pellentesque nec. Nunc consequat interdum varius sit amet mattis vulputate enim. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Morbi non arcu risus quis varius quam quisque id diam. Habitant morbi tristique senectus et. Lorem ipsum dolor sit amet consectetur. Viverra tellus in hac habitasse. At tempor commodo ullamcorper a lacus vestibulum sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Erat nam at lectus urna duis convallis convallis tellus id. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
                </p>
            </div>
        </DankpediaNuggetStyles>
    )
}