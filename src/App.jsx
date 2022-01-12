import React from 'react';
import './Estilos.css';
import Portafolio from './Pages/Portafolio';
import Menu from './Components/Menu';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pagina1 from './Pages/Pagina1';
import Footer from './Components/Footer';






export default function App() {
  return (
   
   
  
  <Router>
  


      <Menu />
     



      <Routes>

        <Route path="/" element={<Pagina1 />} />
        <Route path="Portafolio" element={<Portafolio />} />
        <Route path="/Portafolio#inicio" element={<Pagina1 />} />


      </Routes>
      <Footer />
      
    </Router>
    
  );
}