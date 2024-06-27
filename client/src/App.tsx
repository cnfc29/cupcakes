import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAppSelector } from './hooks/reduxHooks';
import BasicLayout from './components/layouts/BasicLayout';
import MainPage from './components/pages/MainPage';
import PrivateRouter from './components/HOCs/PrivateRouter';
import SignUpPage from './components/pages/SignUpPage';
import SignInPage from './components/pages/SignInPage';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.auth.userData);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BasicLayout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/signup',
          element: (
            <PrivateRouter isAllowed={user.status !== 'logged'} redirect="/">
              <SignUpPage />
            </PrivateRouter>
          ),
        },
        {
          path: '/signin',
          element: (
            <PrivateRouter isAllowed={user.status !== 'logged'} redirect="/">
              <SignInPage />
            </PrivateRouter>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
