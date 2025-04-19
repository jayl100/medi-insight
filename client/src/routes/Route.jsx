import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import Container from '../components/common/Container.jsx';
import Hospital from '../pages/Hospital.jsx';
import HospitalDetail from '../pages/HospitalDetail.jsx';

const routeList = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/hospitals',
    element: <Hospital />,
  },
  {
    path: '/hospitals/:id',
    element: <HospitalDetail />,
  }
];

const router = createBrowserRouter(
  routeList.map((route) => {
    return {
      path: route.path,
      element: <Container child={route.element} />,
    }
  })
);

export default router;