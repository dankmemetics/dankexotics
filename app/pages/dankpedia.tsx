import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { Search } from '../components/common/common.search';
import { DankpediaList } from '../components/dankpedia/dankpedia.list';

export function Dankpedia() {
  return (
    <>
      <Header tab="dankpedia"/>
      <PageContainer>
          <Search/>
          <DankpediaList/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Dankpedia;