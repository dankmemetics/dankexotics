import { PageContainer } from "./components/brand/brand.app";
import { Header } from './components/common/common.header';
import { Footer } from './components/common/common.footer';
import { Search } from './components/common/common.search';
import { AuctionsList } from './components/auctions/auctions.list';

export function Auctions() {
  return (
    <>
      <Header tab="auctions"/>
      <PageContainer>
        <Search/>
        <AuctionsList/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Auctions;