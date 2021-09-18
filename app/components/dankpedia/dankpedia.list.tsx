import styled from 'styled-components';
import { Nugget } from '../common/common.nugget';
import { Exotics } from '../../exotics';

export const DankpediaListStyles = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 90px 0;

    div.nugget {
        margin: 30px;
    }
`;

export function DankpediaList() {
    return(
        <DankpediaListStyles>
            {
                Exotics.map(exotic => {
                    return(
                        <Nugget
                            image={exotic.id}
                            label={exotic.name}
                            type={exotic.type}
                            terpene={exotic.terpene}
                            thc={exotic.thc}
                            cbd={exotic.cbd}
                            displayRarity={false}
                            url={`/dankpedia/nugget/${exotic.id}`}
                        />
                    )
                })
            }
        </DankpediaListStyles>
    )
}