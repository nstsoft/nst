import "./App.scss";
import {
  AboutUs,
  Layout as AppLayout,
  Header,
  WhyWe,
  Technologies,
  ContactUs,
  Services,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <AppLayout>
        <AboutUs />
        <WhyWe />
        <Services />
        <Technologies />
        <ContactUs />
      </AppLayout>
    </>
  );
}

export default App;
