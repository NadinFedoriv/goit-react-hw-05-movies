import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';


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
      <Suspense fallback = {<Loader/>}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
