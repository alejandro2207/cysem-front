import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const ConfirmarCuenta = () => {

    const [alerta, setAlerta] = useState('');
    const [usuarioConfirmado, setUsuarioConfirmado] = useState(false);
    const params = useParams();
    const {id} = params;

    useEffect(() => {
        const confirmarCuenta = async() => {
            try{
                const url = `/usuarios/confirmar/${id}`;
                const {data} = await clienteAxios.get(url);
                setAlerta({
                    msg: data.msg,
                    error: false
                });
                setUsuarioConfirmado(true)
            }catch(error){
                const {data} = error.response
                setAlerta({
                    msg: data.msg,
                    error: true
                });
            }
        }
        confirmarCuenta();
    },[]);

    const {msg} = alerta

  return (
    <div className="container mx-auto mt-5 md:mt-5 p-5 md:justify-center md:w-3/4">
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu cuenta y comienza a adquirir los mejores{" "}
        <span className="text-slate-700">productos</span>
      </h1>
      <div className=",t-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta}/>}
        {usuarioConfirmado &&(
            <Link
                to="/login"
                className="block text-center my-5 text-slate-500 uppercase text-sm"
            >
                Iniciar Sesión
            </Link>
        )}
      </div>
    </div>
  );
}

export default ConfirmarCuenta
