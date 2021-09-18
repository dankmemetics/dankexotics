import { connect } from 'react-redux';
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

export interface DankpediaListI {
    input: string,
    terpenes: {
      myrcene: boolean,
      caryophyllene: boolean,
      linalool: boolean,
      pinene: boolean,
      humulene: boolean,
      limonene: boolean,
    },
    thc: Array<number>,
    cbd: Array<number>,
  }

export function DankpediaListComponent({
    input,
    terpenes,
    thc,
    cbd,
  }: DankpediaListI) {
    return(
        <DankpediaListStyles>
            {
                Exotics
                .filter(exotic => {
                    if (input && !exotic.name.includes(input)) {
                        return false;
                    }

                    if (!terpenes.myrcene && exotic.terpene.toLowerCase() === 'myrcene') {
                        return false;
                    }

                    if (!terpenes.caryophyllene && exotic.terpene.toLowerCase() === 'caryophyllene') {
                        return false;
                    }

                    if (!terpenes.linalool && exotic.terpene.toLowerCase() === 'linalool') {
                        return false;
                    }

                    if (!terpenes.pinene && exotic.terpene.toLowerCase() === 'pinene') {
                        return false;
                    }

                    if (!terpenes.humulene && exotic.terpene.toLowerCase() === 'humulene') {
                        return false;
                    }

                    if (!terpenes.limonene && exotic.terpene.toLowerCase() === 'limonene') {
                        return false;
                    }

                    if (exotic.thc < thc[0] || exotic.thc > thc[1]) {
                        return false;
                    }

                    if (exotic.cbd < cbd[0] || exotic.cbd > cbd[1]) {
                        return false;
                    }

                    return true;
                })
                .map(exotic => {
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

export const DankpediaListState = state => ({
    input: state.search.input,
    terpenes: {
      myrcene: state.search.terpenes.myrcene,
      caryophyllene: state.search.terpenes.caryophyllene,
      linalool: state.search.terpenes.linalool,
      pinene: state.search.terpenes.pinene,
      humulene: state.search.terpenes.humulene,
      limonene: state.search.terpenes.limonene,
    },
    thc: state.search.thc,
    cbd: state.search.cbd,
});

export const DankpediaList = connect(DankpediaListState)(DankpediaListComponent);