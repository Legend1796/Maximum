import About from "../about/about";
import Header from "../header/header";
import Promo from "../promo/promo";
import Steps from "../steps/steps";
import Why from "../whyus/why";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <About />
      <Steps />
      <Why />
    </div>
  );
}

export default App;
