/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createBrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
import AddNewBook from '../pages/AddNewBook';
import BookDetails from '../pages/BookDetails';
import EditBook from '../pages/EditBook';
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/add-new-book',
        element: <AddNewBook />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/edit-book',
        element: <EditBook />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },

  // {
  //   path: '/',
  //   element: <Home />,
  // },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
