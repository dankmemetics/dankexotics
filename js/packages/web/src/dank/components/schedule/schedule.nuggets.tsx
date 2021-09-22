import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Primary } from '../brand/brand.colors';
import { Exotics } from '../../exotics';
export const ScheduleNuggetsStyles = styled.div`
    h3.schedule {
        font-size: 24px;
        font-weight: 600;
        padding: 15px;
    }

    h3.disclaimer {
        font-size: 18px;
        font-style: italic;
        font-weight: bold;
        text-decoration: underline;
        padding: 30px 15px;
    }

    div.nuggets {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0 60px 0;

        div.nugget {
            width: calc(100% / 2);
            padding: 5px 15px;

            a {
                color: ${Primary};
                text-decoration: underline;
            }

            h4 {
                font-size: 18px;
                font-weight: 400;
                font-weight: bold;
            }
        }
    }
`;

export function ScheduleNuggets() {

    return(
        <ScheduleNuggetsStyles>
            <h3 className="disclaimer">Secondary Auction Market Opens November 30th</h3>

            <h3 className="schedule">Dank Nuggets Round 1: September 24th - September 26th</h3>
            <div className="nuggets">
                {
                    Exotics.slice(76, 102).map(exotic => {
                        return(
                            <div className="nugget">
                                <Link to={`/dankpedia/nugget/${exotic.id}`}>
                                    <h4>{exotic.name}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="schedule">Dank Nuggets Round 2: September 27th - September 29th</h3>
            <div className="nuggets">
                {
                    Exotics.slice(51, 76).map(exotic => {
                        return(
                            <div className="nugget">
                                <Link to={`/dankpedia/nugget/${exotic.id}`}>
                                    <h4>{exotic.name}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="schedule">Dank Nuggets Round 3: September 30th - October 2nd</h3>
            <div className="nuggets">
                {
                    Exotics.slice(26, 51).map(exotic => {
                        return(
                            <div className="nugget">
                                <Link to={`/dankpedia/nugget/${exotic.id}`}>
                                    <h4>{exotic.name}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="schedule">Dank Nuggets Round 4: October 3nd - October 5th</h3>
            <div className="nuggets">
                {
                    Exotics.slice(1, 26).map(exotic => {
                        return(
                            <div className="nugget">
                                <Link to={`/dankpedia/nugget/${exotic.id}`}>
                                    <h4>{exotic.name}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="schedule">Dank Nuggets Round 5: October 6th - October 8th</h3>
            <div className="nuggets">
                {
                    Exotics.slice(0, 1).map(exotic => {
                        return(
                            <div className="nugget">
                                <Link to={`/dankpedia/nugget/${exotic.id}`}>
                                    <h4>{exotic.name}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </ScheduleNuggetsStyles>
    )
}