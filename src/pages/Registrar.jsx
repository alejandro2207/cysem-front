import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const Registrar = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmarPassword, setConfirmarPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [rol, setRol] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async(e) => {
        e.preventDefault();

        if([userName, email, rol, phone, password, confirmarPassword].includes('')){
            setAlerta({
                msg: 'Todos los campos son requeridos',
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

        if(password.length < 6){
            setAlerta({
                msg: 'El password debe contener al menos 6 caracteres',
                error: true
            });
            return
        }
        setAlerta({})

        // Crear al usuario en la API
        try {
          const {data}  = await clienteAxios.post(
            `/usuarios`,
            {
              userName,
              email,
              rol,
              phone,
              password,
            }
          );
          setAlerta({
            msg: data.msg,
            error: false,
          });
          setNombre("");
          setEmail("");
          setPassword("");
          setConfirmarPassword("");
          setPhone("");
          setRol("");
        } catch (error) {
          const dataMesagge = error.response.data.errors[0];
          setAlerta({
            msg: dataMesagge.msg,
            error: true,
          });
        }
    }

    const {msg} = alerta;

  return (
    <div className="container mx-auto mt-5 md:mt-5 p-5 md:justify-center md:w-3/4">
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Crea tu cuenta y adquiere los mejores productos{" "}
        <span className="text-slate-700">Cysem</span>
      </h1>

      {msg && <Alerta alerta={alerta}/>}

      <form 
        className="my-10 bg-white rounded-lg shadow p-10"
        onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            className="uppercase text-gray-500 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre completo"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-500 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-500 block text-xl font-bold"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            id="phone"
            type="number"
            placeholder="Teléfono de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-500 block text-xl font-bold"
            htmlFor="rol"
          >
            Rol
          </label>
          <input
            id="rol"
            type="text"
            placeholder="Rol de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-500 block text-xl font-bold"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-500 block text-xl font-bold"
            htmlFor="confirmarContraseña"
          >
            Confirmar contraseña
          </label>
          <input
            id="confirmarContraseña"
            type="password"
            placeholder="Confirma tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-900 transition-colors "
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/login"
          className="block text-center my-5 text-salte-500 uppercase text-sm"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
        <Link
          to="olvide-password"
          className="block text-center my-5 text-stale-500 uppercase text-sm"
        >
          Olvide mi password
        </Link>
      </nav>
    </div>
  );
}

export default Registrar
