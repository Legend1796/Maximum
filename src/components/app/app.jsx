import About from "../about/about";
import Footer from "../footer/footer";
import Form from "../form/form";
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
      <Form />
      <Footer />
    </div>
  );
}

export default App;
