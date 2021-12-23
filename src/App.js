import "./App.css";
import Background from "./components/Background";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import CareerTimeLine from "./components/CareerTimeLine";
import Contact from "./components/Contact";

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
        <Header />
        <div className="homeComponent">
          {/* <Home /> */}
          {/* <Project /> */}
          {/* <CareerTimeLine /> */}
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
