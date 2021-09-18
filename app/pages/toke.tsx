import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { TokeNuggets } from '../components/toke/toke.nuggets';
import { TokeSearch } from '../components/toke/toke.search';

export function Toke() {
  return (
    <>
      <Header tab="toke"/>
      <PageContainer>
        <TokeNuggets />
        <TokeSearch/>
      </PageContainer>
    </>
  )
}

export default Toke;