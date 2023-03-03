import About from "../about/about";
import Copyright from "../copyright/copyright";
import Footer from "../footer/footer";
import Form from "../form/form";
import Header from "../header/header";
import Promo from "../promo/promo";
import Steps from "../steps/steps";
import Why from "../whyus/why";
import "./app.css";

import { useState, useEffect } from "react";

function App() {
  const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);

  window.onresize = newPageSize;

  function newPageSize() {
    setTimeout(() => {
      setPageWidth(document.documentElement.scrollWidth);
    }, 1000);
  }

  useEffect(() => {
    console.log(pageWidth);
  }, [pageWidth]);
  return (
    <div className="App">
      <Header pageWidth={pageWidth} />
      <Promo />
      <About pageWidth={pageWidth} />
      <Steps />
      <Why />
      <Form />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
