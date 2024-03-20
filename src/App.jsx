import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import NuevoPassword from "./pages/NuevoPassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import { AuthProvider } from "../src/context/AuthProvier";
import { ProductosProvider } from "./context/ProductosProvider";


function App() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <ProductosProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/productos" element={<Index />} />
                <Route path="/registro" element={<Registrar />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />
                <Route
                  path="/olvide-password/:token"
                  element={<NuevoPassword />}
                />
                <Route path="/olvide-password" element={<OlvidePassword />} />
              </Route>
            </Routes>
          </ProductosProvider>
        </AuthProvider>
      </BrowserRouter>
    );
}

export default App