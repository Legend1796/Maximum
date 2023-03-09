import About from "../../src/components/about/about";
import Form from "../../src/components/form/form";
import Promo from "../../src/components/promo/promo";
import Steps from "../../src/components/steps/steps";
import Why from "../../src/components/whyus/why";

function Main({ pageWidth }) {
  return (
    <div className="Main">
      <Promo />
      <About pageWidth={pageWidth} />
      <Steps pageWidth={pageWidth} />
      <Why />
      <Form pageWidth={pageWidth} />
    </div>
  );
}

export default Main;
