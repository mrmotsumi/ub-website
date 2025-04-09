// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // No curly braces for default export
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';  // No curly braces
import Footer from './components/Footer';   // No curly braces

function App() {
  return (
    <Router>
      <Navbar />
      {/*  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;



<Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/resources" element={<Resources />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

