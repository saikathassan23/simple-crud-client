import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Update from '../pages/Update';
import Users from '../pages/Users';

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch('http://localhost:5000/users'),
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

export default myRoutes;
