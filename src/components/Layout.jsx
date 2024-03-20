import {Link, Outlet, useLocation} from 'react-router-dom';

const Layout = () => {
  const location = useLocation()
    return (
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-600 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">imagen</h2>
          <nav className="mt-10">
            <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} font-bold uppercase text-2xl block mt-2 hover:text-blue-400 
            `} to="/productos">Productos</Link>
            <Link className={`${location.pathname === '/nosotros' ? 'text-blue-400' : 'text-white'} font-bold uppercase text-2xl block mt-2 hover:text-blue-400 
            `} to="/nosotros">Nosotros</Link>
            <Link className={`${location.pathname === '/registro' ? 'text-blue-400' : 'text-white'} font-bold uppercase text-2xl block mt-2 hover:text-blue-400 
            `} to="/registro">Registro</Link>
            <Link className={`${location.pathname === '/login' ? 'text-blue-400' : 'text-white'} font-bold uppercase text-2xl block mt-2 hover:text-blue-400 
            `} to="/login">Login</Link>
            <Link className={`${location.pathname === '/contacto' ? 'text-blue-400' : 'text-white'} font-bold uppercase text-2xl block mt-2 hover:text-blue-400 
            `} to="/contacto">Contacto</Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
    );
}
 
export default Layout;