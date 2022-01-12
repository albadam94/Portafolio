import React from   'react';


import Labogada from '../Media/LH COLOR.png';
import Aeropuerto from '../Media/LOGO AEROPUERTO.png';
import LDelicias from '../Media/LOGO DELICIAS SF.png';
import UI from '../Media/UI.png';
import Elemento from '../Media/QUINTO ELEMENTO.png';
import UiElemento from '../Media/UiElemento.png';
import Waya from '../Media/WAYA-03.png';
import Tarjetas from '../Media/TARJETASMK.png';
import Polo from '../Media/POLO.png';
import MK from '../Media/MK1.png';
import Movil from '../Media/Movil.png';
import Clinica from '../Media/Clinicaveterinaria.png';
import Menu from '../Components/Menu';






function Portafolio(){
    return(
       
         <div >
            
     

        
        
        
           
       
            <div className="portfolio-menu mt-2 mb-4">
            <Menu/>
           
            <ul>
            <h1 className="text-center portafolio" id="Portafolio">PORTAFOLIO</h1>
             <div className="d-flex justify-content-center">
               <li className="btn btn-outline-info " data-filter=".web">Diseño Web</li>
               <li className="btn btn-outline-info " data-filter=".logos">Logotipos</li>
               <li className="btn btn-outline-info" data-filter=".mockups">Mockups</li>
               </div>
            </ul>
         </div>

         
         
         <div className="row row-cols-1 row-cols-md-3 g-0">
            <div className="item logos col-lg-3 col-md-4 col-6 col-sm">
               <a href="https://www.behance.net/gallery/117120021/LOGO-ABOGADA-LAURA-HOLGUIN"  target="_blank" rel="noopener noreferrer"> <img className="img-fluid"  src={Labogada}alt="Logoabogada" ></img></a>
            </div>
            
            <div className="item logos col-lg-3 col-md-4 col-6 col-sm">
                <a href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"  target="_blank" rel="noopener noreferrer"><img className="img-fluid"  src={Aeropuerto} alt="LogoAeropuerto" ></img></a>
                
             </div>
             
             <div className="item logos col-lg-3 col-md-4 col-6 col-sm">
                <a href="https://www.behance.net/gallery/122398213/MARCA-LA-DELICIA-SEVILLANA"  target="_blank" rel="noopener noreferrer"><img className="img-fluid"  src={LDelicias} alt="LogoPanaderia"></img></a>
                
             </div>
             
             <div className="item web col-lg-3 col-md-4 col-6 col-sm">
                <img className="img-fluid"  src={UI} alt="UiDesigned"></img>
                
             </div>
             
             <div className="item logo col-lg-3 col-md-4 col-6 col-sm">
               <a href="https://www.behance.net/gallery/121154455/EL-QUINTO-ELEMENTO-SPAIDENTIDAD-VISUALDISENO-WEB"  target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={Elemento} alt="Logospa"></img></a>
                
             </div>
             <div className="item web col-lg-3 col-md-4 col-6 col-sm">
                <a href="https://www.behance.net/gallery/121154455/EL-QUINTO-ELEMENTO-SPAIDENTIDAD-VISUALDISENO-WEB"  target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={UiElemento } alt="Ui"></img></a>
               
             </div>
             <div className="item logo col-lg-3 col-md-4 col-6 col-sm">
            <a href="https://www.behance.net/gallery/124044579/MARCA-WAYA-REPOSTERIA-ANCESTRAL" target="_blank" rel="noopener noreferrer"><img className="img-fluid"src={ Waya} alt="LogoWaya"></img></a>
                   
                </div>
             <div className="item mockups col-lg-3 col-md-4 col-6 col-sm">
                <img className="img-fluid" src={Tarjetas} alt="Mockuptarjeta"></img>
                
             </div>
             <div className="item web col-lg-3 col-md-4 col-6 col-sm">
                <img className="img-fluid" src={Polo} alt="UI Ecommerce" width="500px" height="500px" ></img>
            </div>
            
             
             <div className="item mockups col-lg-3 col-md-4 col-6 col-sm">
               <a href="https://www.behance.net/gallery/128563649/Diseno-UI-Brand-TUFLIX"  target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={ MK} alt="Mockup" width="500px" height="500px" ></img></a>
                
             </div>
            
      <div className="item logos col-lg-3 col-md-4 col-6 col-sm">
          <a href="https://www.behance.net/gallery/128563649/Diseno-UI-Brand-TUFLIX" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src={Movil} alt="mockupcelular" ></img></a>
         </div>
         
         
            <div className="item logos col-lg-3 col-md-3 col-4 col-sm img-responsive">
               <a href="https://clinicamishuellitas.netlify.app " target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={Clinica}alt=" Ui Clinica" ></img></a>
             </div>
             </div>
                </div>
                
                  
    )
}

             



export default Portafolio;