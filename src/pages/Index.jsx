import { useLoaderData } from "react-router-dom";
import Producto from "../components/Producto";

export async function loader() {
  
    const url = "http://localhost:3000/api/productos/";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
    
    return resultado.productos
}

const Index = () => {
  const productos = useLoaderData();
  console.log(productos)

  return (
    <>
      <main className="">
        <h2 className=""> Nuestros Productos</h2>
        {productos.length ? (
          <div>
            {productos.map( producto => (
              <Producto
                key={producto?._id}
                producto={producto}/>
            ))}
          </div>
        ) : (
          <h1>No hay productos</h1>
        )}
      </main>
    </>
  );
}

export default Index
