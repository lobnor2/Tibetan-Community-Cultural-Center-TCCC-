import "./App.css";
import Nav from "./components/nav/nav";
import Header from "./components/header_banner/header_banner";
import Hero from "./components/hero_section/Hero";
import About from "./components/about/About";
import Programs from "./components/programs/Programs";

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Hero />
      <About />
      <Programs />
    </div>
  );
}

export default App;
