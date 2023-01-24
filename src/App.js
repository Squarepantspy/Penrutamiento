import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; // componentes que se importaron
import Navegar from './components/Navegar';
import Home from './components/Home';
import Numero from './components/Numero';
import Concat from './components/Concat';

function App() {


  return (
    <div className="container">
      <BrowserRouter>{/*wrappeo de rutas */}
        <Routes>
              <Route path="/" element={<Navegar/>}>
                <Route path="Home" element={<Home/>}/>
                <Route path="/:number" element={<Numero/>} />
                <Route path=":word/:color1/:color2" element={<Concat/>}/>
              </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
