import { useParams } from 'react-router-dom';
import { PageContainer } from "./components/brand/brand.app";
import { Header } from './components/common/common.header';
import { Footer } from './components/common/common.footer';
import { DankpediaNugget } from './components/dankpedia/dankpedia.nugget';

export function Nugget() {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <Header tab="dankpedia"/>
            <PageContainer>
                <DankpediaNugget nugget={id}/>
            </PageContainer>
            <Footer/>
        </>
    )
}

export default Nugget;