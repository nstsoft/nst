import "./App.scss";
import { AboutUs, Layout as AppLayout, Header, WhyWe } from "./components";

function App() {
  return (
    <>
      <Header />
      <AppLayout>
        <AboutUs />
        <WhyWe />
      </AppLayout>
    </>
  );
}

export default App;
