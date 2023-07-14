/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createBrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
// import AllBooks from '../pages/AllBooks';

const routes = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: '/all-books',
  //   element: <AllBooks />,
  // },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
