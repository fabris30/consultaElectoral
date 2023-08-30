import '../src/scss/App.scss';
import HeaderComponent from './components/HeaderComponent';
import HomePages from './pages/Home/HomePages';
import BasePages from './pages/Base/BasePages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegistroPages from './pages/Registro/RegistroPages';
import TablaPages from './pages/Tabla/TablaPages';
import ConteoPages from './pages/Conteo/ConteoPages';
import ResultadoConteoPages from './pages/Resultados/ResultadoConteoPages';

function App() {
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
      element: <RegistroPages />,
    },
    {
      path: "/consulta",
      element: <TablaPages />
    },
    {
      path: "/conteo",
      element: <ConteoPages />
    },
    {
      path: "/resultado",
      element: <ResultadoConteoPages />
    }
      
  ])
  return (
    <div>
    
    <div className='header-fijo'>
        <HeaderComponent />
    </div>
    <div className='body'>
        <RouterProvider router={router} />
    </div>
    

    </div>
  );
}

export default App;
