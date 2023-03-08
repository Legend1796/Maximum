import Footer from "../footer/footer";
import Header from "../header/header";
import "./app.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../../pages/main";
import NotFound from "../../pages/notFound";

function App() {
  const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);
  const location = useLocation();
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
        <Route exact path="/" element={<Main pageWidth={pageWidth} />} />
        <Route
          path={!location === "/notfound" || "/denied" || "/sucsess"}
          element={<Navigate replace exact path="/" />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
