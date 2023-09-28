import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import * as S from './Layout.styled';

export const Layout = () => {
  return (
    <S.Container>
      <S.NavList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </S.NavList>
      <S.MainContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </S.MainContent>
      <ToastContainer autoClose={2000} />
    </S.Container>
  );
};
