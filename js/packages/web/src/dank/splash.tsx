import { Header } from './components/common/common.header';
import { Footer } from './components/common/common.footer';
import { IndexTitle } from './components/index/index.title';
import { IndexCards } from './components/index/index.cards';
import { IndexProfile } from './components/index/index.profile';

export function Index() {
  return (
    <>
      <Header tab="index"/>
      <IndexCards/>
      <IndexTitle/>
      <IndexProfile/>
      <Footer/>
    </>
  )
}

export default Index;