import "./App.scss";
import {
  AboutUs,
  Layout as AppLayout,
  Header,
  WhyWe,
  Services,
  ContactUs,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <AppLayout>
        <AboutUs />
        <WhyWe />
        <Services />
        <ContactUs />
      </AppLayout>
    </>
  );
}

export default App;
