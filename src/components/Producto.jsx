

function Producto({producto}) {
    const {codigoProducto, description, disponibilidad, marca, precio} = producto
    return (
      <div className="pt-10 md:flex">
          <div className="md:w-1/3 block">
            <p>Código de Producto: {codigoProducto} </p>
            <p>Descripción: {description}</p>
            <p>Marca: {marca}</p>
            <p>Precio: {precio}</p>
            <p>Disponibilidad: {disponibilidad}</p>
          </div>
      </div>
    );
}

export default Producto;