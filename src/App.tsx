import "./App.scss";
import { Layout as AppLayout, Header } from "./components";
import { WhyWe } from "./components/whyWe";

function App() {
  return (
    <>
      <Header />
      <AppLayout>
        <WhyWe />
      </AppLayout>
    </>
  );
}

export default App;
