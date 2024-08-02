import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import List from './pages/list/List';
import './index.css';
import Add from './pages/item/add/Add';
import Item from './pages/item/Item';
import Profile from './pages/profile/Profile';
import MainLayout from './components/MainLayout';

const Layout = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/category/:id',
          element: <List />,
        },
        {
          path: '/item/:id',
          element: <Item />,
        },
        {
          path: '/itemedit/:id',
          element: <Item />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
