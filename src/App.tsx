import './App.scss';
import { AboutUs, Layout as AppLayout, Header, WhyWe, Technologies, ContactUs, Services, Process } from './components';

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
        <ContactUs />
      </AppLayout>
    </>
  );
}

export default App;
