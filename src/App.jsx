import "./App.css";
import Nav from "./components/nav/nav";
import Header from "./components/header_banner/header_banner";
import Hero from "./components/hero_section/Hero";
import About from "./components/about/About";
import Programs from "./components/programs/Programs";
import Media from "./components/media/Media";
import Testimony from "./components/testimonial/Testimony";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Hero />
      <About />
      <Programs />
      <Media />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
