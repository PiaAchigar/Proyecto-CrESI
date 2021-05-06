//Componente principal App que envuelve todos los demas componentes del sitio.
import React, { useEffect } from "react";

//Paginas//
//Cada pagina esta compuesta por varios componentes que hacen a la pagina (intentar reutilizar componentes si se necesita algo similar que ya esta hecho)
import Inicio from "./pages/Inicio";
import Recursos from "./pages/Recursos";
import Visitas from "./pages/Visitas";
import Contacto from "./pages/Contacto";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";

//Componentes
//Estos tres componentes se encuentran fuera de todas los componentes paginas ya que ellos estan siempre en todas las vistas.
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsappFloat from "./components/WhatsappFloat/WhatsappFloat";

//Ruteador
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Para que automaticamente se haga scroll al top de la pagina a la que se va.
  // useEffect(() => {
  //   setTimeout(() => { window.scroll({top: 0,left: 0,}); console.log("subiendo");}, 500);  
  // }, [location]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/recursos" component={Recursos} />
        <Route path="/visitas" component={Visitas} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/tienda" component={Tienda} />
        <Route path="/carrito" component={Carrito} />
      </Switch>
      <WhatsappFloat />
      <Footer />
    </div>
  );
}

export default App;
