import "./App.css";
import Background from "./components/Background";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import CareerTimeLine from "./components/CareerTimeLine";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <Main />
    </>
  );
}

function Main() {
  return (
    <>
      <div className="notBG">
        <Router>
          <Header />
          <div className="homeComponent">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/experience" element={<CareerTimeLine />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Contact />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
