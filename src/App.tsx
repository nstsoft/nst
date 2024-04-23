import './App.scss';
import {
  AboutUs,
  Layout as AppLayout,
  Header,
  WhyWe,
  Technologies,
  ContactUs,
  Services,
  Process,
  OurWorks,
} from './components';

function App() {
  return (
    <>
      <Header />
      <AppLayout>
        <AboutUs />
        <WhyWe />
        <Services />
        <Technologies />
        <Process />
        <OurWorks />
        <ContactUs />
      </AppLayout>
    </>
  );
}

export default App;
