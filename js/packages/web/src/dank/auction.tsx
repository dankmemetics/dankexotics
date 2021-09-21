import { PageContainer } from "./components/brand/brand.app";
import { Header } from './components/common/common.header';
import { Footer } from './components/common/common.footer';
import { Auction as AuctionComponent } from './components/auctions/auction';

export function Auction() {
  return (
    <>
      <Header tab="auctions"/>
      <PageContainer>
        <AuctionComponent/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Auction;