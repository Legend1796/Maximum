import About from "../about/about";
import Header from "../header/header";
import Promo from "../promo/promo";
import Steps from "../steps/steps";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <About />
      <Steps />
    </div>
  );
}

export default App;
