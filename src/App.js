import '../src/scss/App.scss';
import HeaderComponent from './components/HeaderComponent';
import HomePages from './pages/Home/HomePages';
import BasePages from './pages/Base/BasePages';
import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import RegistroPages from './pages/Registro/RegistroPages';
import TablaPages from './pages/Tabla/TablaPages';
import ConteoPages from './pages/Conteo/ConteoPages';
import ResultadoConteoPages from './pages/Resultados/ResultadoConteoPages';
import PrivateRoute from './routes/PrivateRoute';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function App() {
  const token = Cookies.get('token');
  useEffect(()=>{

  },[token,Cookies.get('token')])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePages />,

    },
    {
      path: "/base",
      element: <BasePages />,
    },
    {
      path: "/registro",
      element:  <PrivateRoute  canActivate={token} component={<RegistroPages/>} />,
    },
    {
      path: "/consulta",
      element:  <PrivateRoute  canActivate={token} component={<TablaPages />} /> 
    },
    {
      path: "/conteo",
      element:<PrivateRoute  canActivate={token} component={<ConteoPages />} /> 
    },
    {
      path: "/resultado",
      element: <PrivateRoute  canActivate={token} component={<ResultadoConteoPages />} /> 
    }
      
  ])
  return (
    <div className='app'>
    
    <div className='header-fijo '>
        <HeaderComponent />
    </div>
    <div className='body'>
       <RouterProvider router={router} />
    </div>
    
    </div>
  );
}

export default App;
