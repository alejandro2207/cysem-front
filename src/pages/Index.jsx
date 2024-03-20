import { useState, useEffect } from "react";
import Producto from "../components/Producto";
import clienteAxios from "../config/clienteAxios";
import useProductos from "../hooks/useProductos";


const Index = () => {

  const {productos} = useProductos()

  return (
    <>
      <main className="">
        <h2 className=""> Nuestros Productos</h2>
        {productos.length ? (
          <div className="grid grid-cols-3 gap-4 w-900">
            {productos.map((producto) => (
              <Producto key={producto?._id} producto={producto} />
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
