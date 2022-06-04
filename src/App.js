import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./pages/Header";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Invalid404Page from "./pages/404";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="*" element={<Invalid404Page />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
