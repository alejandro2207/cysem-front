import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";


const NuevoPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [alerta, setAlerta] = useState({});
    const [tokenValido, setTokenValido] = useState(false);
    const [passwordModificado, setPasswordModificado] = useState(false);
    const params = useParams();
    const {token} = params

    useEffect(() => {
        const confirmarToken = async() => {
            try{
                await clienteAxios.get(`/usuarios/olvide-password/${token}`);
                setTokenValido(true);
            }catch(error){
                const {data} = error.response;
                setAlerta({
                    msg: data.msg,
                    error: true
                });
            }
        }
        confirmarToken();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(password.length <6){
            setAlerta({
                msg: 'El password debe contener al menos 6 caracteres',
                error: true
            });
            return
        }

        if(password !== confirmarPassword){
            setAlerta({
                msg: 'El password no coincide',
                error: true
            });
            return
        }
        setAlerta({})

        // Se realiza el cambio de contraseña con la API
        try{
            const {data} = await clienteAxios.post(`/usuarios/olvide-password/${token}`, {password});
            setAlerta({
                msg: data.msg,
                error: false
            });
            setPasswordModificado(true)
            setPassword('')
            setConfirmarPassword('')
        }catch(error){
            const {data} = error.response;
            setAlerta({
                msg: data.msg,
                error: true
            })
        }

    }

    const {msg} = alerta

  return (
    <div className="container mx-auto mt-5 md:mt-5 p-5 md:justify-center md:w-3/4">
      <h1 className="text-sky-600 text-6xl font-black capitalize ">
        Reestablecer tu password y no pierdas acceso a los mejores{" "}
        <span className="text-slate-700">productos</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white rounded-lg shadow p-10"
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-500 block text-xl font-bold"
              htmlFor="password"
            >
              Nuevo Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Escribe tu nuevo password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-500 block text-xl font-bold"
              htmlFor="confirmarPassword"
            >
              Confirmar Password
            </label>
            <input
              id="confirmarPassword"
              type="password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Escribe tu nuevo password"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Guardar nuevo password"
            className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>
      )}
      {passwordModificado && (
        <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to={"/login"}>
                Inicir Sesión
            </Link>
      )}
    </div>
  );
}

export default NuevoPassword
