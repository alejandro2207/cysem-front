import {Link} from 'react-router-dom';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/clienteAxios';

import useAuth from '../hooks/useAuth';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const {setAuth} = useAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if([email, password].includes('')){
      setAlerta({
        msg: 'Todos los campos son requeridos',
        error: true
      });
      return
    }
    setAlerta({})

    try{
      const { data } = await clienteAxios.post(`/auth/login`, {email, password});
      console.log(data)
      localStorage.setItem('token', data.token)
      setAuth(data)
    }catch(error){
      const {data} = error.response
      setAlerta({
        msg: data.msg,
        error: true
      })
    }
  }


  const {msg} = alerta

  return (
    <div className="container mx-auto mt-5 md:mt-5 p-5 md:justify-center md:w-3/4">
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Iniciar Sesión <span className="text-slate-700">Cysem</span>
      </h1>

      {msg && <Alerta alerta={alerta}/>}

      <form 
        onSubmit={handleSubmit}
        className="my-10 bg-white rounded-lg shadow p-10">
        <div className="my-5">
          <label
            className="uppercase mx-7 text-gray-500 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Escribe tu email"
            className="w-5/6 mx-7 mt-3 p-3 boder rounded-xl bg-gray-50"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-10">
          <label
            className="uppercase mx-7 text-gray-500 block text-xl font-bold"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu contraseña"
            className="w-5/6 mx-7 mt-3 p-3 boder rounded-xl bg-gray-50"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hove:cursor-pointer hover:bg-sky-900 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/registro"
          className="block text-center my-5 text-salte-500 uppercase text-sm"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
        <Link
          to="/olvide-password"
          className="block text-center my-5 text-stale-500 uppercase text-sm"
        >
          Olvide mi password
        </Link>
      </nav>
    </div>
  );
}

export default Login
