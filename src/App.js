import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar
        items={["inicio", "about", "contact"]}
      />
      <Routes>
        <Route exact path="/inicio" element={<Home titulo="Pagina Home" />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
