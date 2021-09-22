import { PageContainer } from "./components/brand/brand.app";
import { Header } from './components/common/common.header';
import { Footer } from './components/common/common.footer';
import { ScheduleNuggets } from './components/schedule/schedule.nuggets';

export function Schedule() {
  return (
    <>
      <Header tab="schedule"/>
      <PageContainer>
        <ScheduleNuggets/>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Schedule;