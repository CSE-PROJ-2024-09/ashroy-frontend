import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Orphanage from '../pages/Orphanage';
import AnimalWelfare from '../pages/AnimalWelfare';
import EalderlyCare from '../pages/EalderlyCare';
import ShelterHome from '../pages/ShelterHome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import OrphanageDetails from '../pages/OrphanageDetails';
import AnimalWelfareDetails from '../pages/AnimalWelfareDetails';
import ElderlyCareDetails from '../pages/ElderlyCareDetails';
import ShelterHomeDetails from '../pages/ShelterHomeDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/orphanage',
        element: <Orphanage />,
      },
      {
        path: '/orphanage/:id',
        element: <OrphanageDetails />,
      },
      {
        path: '/animal-welfare',
        element: <AnimalWelfare />,
      },
      {
        path: '/animal-welfare/:id',
        element: <AnimalWelfareDetails />,
      },
      {
        path: '/elderly-care',
        element: <EalderlyCare />,
      },
      {
        path: '/elderly-care/:id',
        element: <ElderlyCareDetails />,
      },
      {
        path: '/shelter-home',
        element: <ShelterHome />,
      },
      {
        path: '/shelter-home/:id',
        element: <ShelterHomeDetails />,
      },
    ],
  },
]);

export default router;
