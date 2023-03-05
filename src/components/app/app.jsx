import Footer from "../footer/footer";
import Header from "../header/header";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../../pages/main";

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
      <Routes>
        <Route path="/" element={<Main pageWidth={pageWidth} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
