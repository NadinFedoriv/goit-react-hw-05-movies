import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


export const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
