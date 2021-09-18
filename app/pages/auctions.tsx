import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { Footer } from '../components/common/common.footer';
import { AuctionsSearch } from '../components/auctions/auctions.search';
import { AuctionsList } from '../components/auctions/auctions.list';

export function Trade() {
  return (
    <>
      <Header tab="auctions"/>
      <PageContainer>
        <AuctionsSearch/>
        <AuctionsList/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Trade;