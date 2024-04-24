import './App.scss';
import {
  AboutUs,
  Layout as AppLayout,
  ContactUs,
  Header,
  OurWorks,
  Process,
  Services,
  Technologies,
  WhyWe,
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
