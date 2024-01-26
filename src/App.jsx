import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Services from "./components/Services/Services";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Gmaps from "./components/Gmaps/Gmaps";

function App() {
  return (
    <div className="App">
      <header>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </header>
      <section id="location">
        <Gmaps />
      </section>
      <section id="services">
        <Services />
      </section>
      <section>
        <Companies/> 
        <Value />
      </section>
      <section id="contact">
        <Contact />
        <GetStarted />
      </section>    
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
