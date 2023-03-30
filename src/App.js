import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoutes from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main/>,
    children: [
      {
        path:"/home",
        element: <PrivateRoutes><Home/></PrivateRoutes>
      },
      {
        path:"/",
        element: <Login/>
      }
    ]
  }
])

function App() {
  return (
    <div className='bg-slate-100'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
