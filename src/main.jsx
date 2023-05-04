import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './Home/Home';
import AuthProvider from './provider/AuthProvider';
import Login from './Login/Login';
import Register from './Login/Register';
import BrefPage from './Pages/BrefPage/BrefPage';
import Details from './layout/Details/Details';
import ErrorPage from './ErrorPage';
import Blog from './Pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/chef/:id',
        element:<BrefPage></BrefPage>,
        loader:({params}) => fetch(`https://food-hunt-server-mohammadashrafulislam1.vercel.app/chef/${params.id}`)
      },
      {
        path:'/recipes/:id/:id',
        element:<Details></Details>,
        loader:({params})=> fetch(`https://food-hunt-server-mohammadashrafulislam1.vercel.app/recipes/${params.id}/${params.id}`)
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
