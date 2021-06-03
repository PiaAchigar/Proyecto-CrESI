//Componente principal App que envuelve todos los demas componentes del sitio.
import React from "react";

//Paginas//
//Cada pagina esta compuesta por varios componentes que hacen a la pagina (intentar reutilizar componentes si se necesita algo similar que ya esta hecho)
import Inicio from "./pages/Inicio";
import Recursos from "./pages/Recursos";
import Visitas from "./pages/Visitas";
import Contacto from "./pages/Contacto";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";
import DetalleProducto from "./pages/DetalleProducto";
import Politica from "./pages/Politica";

//Componentes
//Estos tres componentes se encuentran fuera de el SWITCH ya que ellos estan siempre en todas las vista.
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsappFloat from "./components/WhatsappFloat/WhatsappFloat";

//Ruteador
import { Switch, Route } from "react-router-dom";

//Context
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/recursos" component={Recursos} />
          <Route path="/visitas" component={Visitas} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/tienda" component={Tienda} exact />
          <Route path="/tienda/:id" component={DetalleProducto} exact />
          <Route path="/carrito" component={Carrito} />
          <Route path="/politicas" component={Politica} />
        </Switch>
        <WhatsappFloat />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
