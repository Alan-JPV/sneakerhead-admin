//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Switch } from 'react-router-dom';
import Adm from './components/admin';
import Page from './components/page';
import Orders from './components/Orders';
import ProList from './components/ProList';
import Products from './components/Products';
function App() {
  return (
    <>
    <div style={{background: 'linear-gradient(180deg, #FFF 2%, #75A9CF 100%)'}}>
    <BrowserRouter>
    <Adm />
       <Routes>
       <Route path="/" element={<Page />}></Route>
       <Route path="/order" element={<Orders />}></Route>
       <Route path='/pll' element={<Products/>}></Route>
       </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
