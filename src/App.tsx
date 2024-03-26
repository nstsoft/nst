import "./App.scss";
import {
  AboutUs,
  Layout as AppLayout,
  Header,
  WhyWe,
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
      </AppLayout>
    </>
  );
}

export default App;
