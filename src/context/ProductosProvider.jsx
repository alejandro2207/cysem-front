import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const ProductosContext = createContext();

const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [alerta, setAlerta] = useState({});
    
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProductos = async() => {
            try{
                const { data } = await clienteAxios("/productos");
                setProductos(data.productos);
            }catch(error){
                console.log(error)
            }
        }
        obtenerProductos();
    }, []);
    return (
        <ProductosContext.Provider
            value={{
                productos
            }}>
                {children}
        </ProductosContext.Provider>
    )
}
export {
    ProductosProvider
}

export default ProductosContext