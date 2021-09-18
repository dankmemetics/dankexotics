import { useRouter } from 'next/router';
import { PageContainer } from "../../../components/brand/brand.app";
import { Header } from '../../../components/common/common.header';
import { Footer } from '../../../components/common/common.footer';
import { DankpediaNugget } from '../../../components/dankpedia/dankpedia.nugget';

export function Nugget() {
    const router = useRouter();
    const { nugget } = router.query;

    return (
        <>
            <Header tab="dankpedia"/>
            <PageContainer>
                <DankpediaNugget nugget={nugget}/>
            </PageContainer>
            <Footer/>
        </>
    )
}

export default Nugget;