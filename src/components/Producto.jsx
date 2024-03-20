

function Producto({producto}) {
    const {codigoProducto, description, disponibilidad, marca, precio} = producto
    return (
      <div className="flex">
        <div className="flex flex-col bg-gray-200 rounded-lg shadow-xl w-full m-2">
          <div className="text-xs text-center px-3 mb-1 mt-4">
            <p>
              <b> Código de Producto </b>: {codigoProducto}{" "}
            </p>
            <p className="pt-2">
              <b>Descripción </b>: {description}
            </p>
            <p className="pt-2">
              <b>Marca </b>: {marca}
            </p>
            <p className="pt-2">
              <b>Precio</b>: {precio}
            </p>
            <p className="pt-2 pb-5">
              <b>Disponibilidad</b>: {disponibilidad}
            </p>
            <button className="bg-blue-500 text-white p-3 text-center w-full hover:bg-blue-900">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    );
}

export default Producto;